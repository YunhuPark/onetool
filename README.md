# ⚡️ OneTool Lab (원툴 랩)

> **"복잡한 건 딱 질색. 필요한 기능만 1초 만에."**
>
> No Ads. No Login. Just Tools.

![Project Status](https://img.shields.io/badge/Status-Active-success?style=flat-square)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)
![Tech](https://img.shields.io/badge/Stack-HTML%2FCSS%2FJS-yellow?style=flat-square)

## 📖 Introduction
**OneTool Lab**은 일상 속 사소한 불편함을 해결하기 위해 만든 **초경량 웹 도구 모음집**입니다.
앱 설치, 회원가입, 무거운 로딩, 그리고 덕지덕지 붙은 광고에 지친 분들을 위해 만들었습니다.

모든 도구는 **Pure HTML/CSS/JS**로 제작되어 압도적으로 가벼우며, **모바일 퍼스트(Mobile First)** 디자인으로 언제 어디서든 즉시 사용할 수 있습니다.

👉 **[사용해보기 (Live Demo)](https://onetool-alpha.vercel.app/)**

---

## 🛠 Features (도구 목록)

### 🔥 1. 인스타 맞팔 판독기 (Insta Checker)
> "누가 내 팔로우를 몰래 끊었을까?"
- **Privacy First:** 서버 전송 없이 브라우저에서 100% 로컬 처리 (해킹 위험 0%)
- **ZIP Support:** 인스타그램 데이터 다운로드 파일(ZIP/JSON) 지원
- **Smart Analysis:** 나를 언팔로우한 사람과 나만 팔로우하는 '팬' 목록 추출 분리 제공
- **Features:** 오름차순/내림차순 정렬, 실시간 검색, 원클릭 복사, 샘플 데이터 체험 기능 제공

### 🍪 2. 두쫀쿠 오픈런 생존 테스트 (Survival Test)
> "내 오픈런 성공 확률은 몇 %일까?"
- **Gamification:** 오픈런 상황을 가정한 밸런스 게임 형태의 인터랙티브 테스트
- **Hyper-Realism:** 새치기 빌런, 되팔렘의 유혹 등 현실 고증 100% 시나리오 (6문항)
- **Result Type:** 자본주의형, 전략가형, 존버형 등 4가지 유형 분석 결과 제공

### 🏃 3. 칼퇴 계산기 (Work Timer)
> "집에 가기까지 정확히 몇 초 남았을까?"
- **Real-time:** 초 단위로 줄어드는 남은 시간 시각화
- **Visual Gauge:** 직관적인 프로그레스 바(Progress Bar) UI
- **Celebration:** 퇴근 시간이 되면 폭죽 애니메이션 효과 발생

### 💸 4. 할인율 계산기 (Sale Calculator)
> "이거 사면 얼마 이득일까?"
- **Instant Calc:** 입력 즉시 결과 도출 (계산 버튼 불필요)
- **Benefit Focus:** 최종 가격뿐만 아니라 '얼마를 아꼈는지' 강조하여 표시
- **Presets:** 자주 쓰는 할인율(10%, 20% 등) 칩(Chip) 버튼 제공

---

## 🎨 Design System & UX Philosophy

* **Dark Mode Only:** 눈의 피로를 줄이고 몰입감을 높이는 다크 테마 적용.
* **Glassmorphism:** 최신 트렌드를 반영한 반투명 유리 질감의 카드 UI.
* **Micro-Interaction:** 부드러운 호버(Hover) 효과와 화면 전환 애니메이션.
* **Mobile Optimized:** 스마트폰 환경에 최적화된 터치 타겟과 레이아웃.

---

## 💻 Tech Stack

이 프로젝트는 불필요한 라이브러리 의존성을 제거하고 **속도(Performance)**에 집중했습니다.

* **Core:** HTML5, CSS3, Vanilla JavaScript (ES6+)
* **Library:** `JSZip` (오직 인스타 데이터 압축 해제용으로만 사용)
* **Hosting:** Vercel (CI/CD Automated)

---

## 🚀 How to Run (Local)

이 프로젝트를 로컬 환경에서 실행하려면 다음 명령어를 입력하세요.

```bash
# 1. 저장소 클론
git clone https://github.com/YunhuPark/onetool.git

# 2. 폴더 이동
cd onetool

# 3. 실행 (VS Code Live Server 권장)
# index.html 파일을 브라우저에서 열면 바로 실행됩니다.