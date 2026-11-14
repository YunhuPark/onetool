const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

// Exercise the actual inline application with a minimal DOM; dynamic HTML writes
// fail instead of silently parsing an attacker-controlled event handler.
class Element {
  constructor(tag = 'div') { this.tagName = tag; this.children = []; this.listeners = {}; this.style = {}; }
  append(...children) { this.children.push(...children); }
  appendChild(child) { this.append(child); return child; }
  replaceChildren(...children) { this.children = children; }
  addEventListener(name, fn) { this.listeners[name] = fn; }
  set innerHTML(value) { throw new Error(`HTML sink used for list: ${value.slice(0, 40)}`); }
  setAttribute(name, value) { this[name] = value; }
}
function app() {
  const nodes = new Map();
  const copied = [];
  const ctx = vm.createContext({
    window: { addEventListener() {} },
    document: {
      getElementById(id) { if (!nodes.has(id)) nodes.set(id, new Element()); return nodes.get(id); },
      createElement: tag => new Element(tag),
    },
    navigator: { clipboard: { writeText: async value => { copied.push(value); } } },
    alert() {}, console,
  });
  const html = fs.readFileSync(path.join(__dirname, '../insta.html'), 'utf8');
  vm.runInContext(html.match(/<script>([\s\S]*?)<\/script>/)[1], ctx);
  return { ctx, nodes, copied };
}
test('untrusted JSON usernames are validated before use or storage', () => {
  const { ctx } = app();
  const result = ctx.extractUsers([
    { value: '<img src=x onerror=alert(1)>' }, { title: "a');alert(1)//" },
    { value: 123 }, null, { value: 'x'.repeat(31) }, { value: 'valid.name_1' },
  ]);
  assert.deepEqual(Array.from(result), ['valid.name_1']);
});
test('rendering builds text nodes and copy handlers with safe profile links', async () => {
  const { ctx, nodes, copied } = app();
  ctx.renderList(['valid.name_1', '<svg onload=alert(1)>']);
  const rows = nodes.get('userList').children;
  assert.equal(rows.length, 1);
  const name = rows[0].children[0].children[1];
  assert.equal(name.textContent, 'valid.name_1');
  await name.listeners.click();
  assert.deepEqual(copied, ['valid.name_1']);
  const link = rows[0].children[1];
  assert.equal(link.href, 'https://instagram.com/valid.name_1');
  assert.equal(link.rel, 'noopener noreferrer');
});
