const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

// 외부 CDN 스크립트는 버전이 고정돼 있고 무결성(SRI) 검사가 붙어 있어야 한다.
// CDN이나 패키지가 오염돼도 브라우저가 실행을 거부한다.
const root = path.join(__dirname, '..');
const files = fs.readdirSync(root).filter(name => name.endsWith('.html'));

test('every external script is version-pinned with SRI and anonymous CORS', () => {
  let checked = 0;
  for (const file of files) {
    const html = fs.readFileSync(path.join(root, file), 'utf8');
    const tags = html.match(/<script[^>]*src="https?:\/\/[^"]+"[^>]*>/g) || [];
    for (const tag of tags) {
      const src = tag.match(/src="([^"]+)"/)[1];
      checked += 1;
      assert.match(tag, /integrity="sha384-[A-Za-z0-9+/=]+"/, `${file}: SRI 없음 ${src}`);
      assert.match(tag, /crossorigin="anonymous"/, `${file}: crossorigin 없음 ${src}`);
      // @scope/pkg@1.2.3/... 또는 /lib/1.2.3/... 처럼 버전이 박혀 있어야 한다
      assert.match(src, /@\d+\.\d+\.\d+|\/\d+\.\d+\.\d+\//, `${file}: 버전 미고정 ${src}`);
    }
  }
  assert.ok(checked >= 3, `외부 스크립트를 찾지 못했습니다 (${checked})`);
});
