# AI Visual Novel Prototype  
AI 기반으로 텍스트 입력을 받아 장면을 생성하고,  
웹툰처럼 한 컷 이미지를 출력해주는 **비주얼 노벨형 AI 챗봇 MVP**입니다.

이 프로젝트는 다음과 같은 흐름으로 동작합니다:

1. 사용자가 메시지를 입력합니다.  
2. LLM(무료 HuggingFace API)이 상황을 요약하여 "장면 프롬프트"를 생성합니다.  
3. 이미지 생성 모델(FLUX Schnell)이 해당 장면을 웹툰 스타일의 이미지로 그립니다.  
4. UI는 생성된 이미지 + 대화 풍선 형태로 출력됩니다.

---

## ✨ 주요 기능

- **텍스트 입력 기반 상황 이해**
- **LLM이 자동으로 장면 묘사 프롬프트 생성**
- **무료 모델을 활용한 웹툰 이미지 생성**
- **간단한 대화 UI**
- **0원으로 실행되는 완전 무료 MVP**

---

## 🛠 기술 스택

| 역할 | 기술 |
|------|------|
| 프레임워크 | Next.js (React 기반 웹 프레임워크) |
| 배포 | Vercel 무료 플랜 |
| LLM | Llama 3 8B (HuggingFace 무료 Inference API) |
| 이미지 생성 | FLUX Schnell (HuggingFace 무료 Inference API) |
| 저장 | 브라우저 localStorage |

---

## 📦 폴더 구조

'''ai-vn-prototype
 ┣ pages/
 ┃ ┗ index.js
 ┣ components/
 ┃ ┣ ChatBubble.js
 ┃ ┗ SceneImage.js
 ┣ lib/
 ┃ ┣ llm.js
 ┃ ┗ imageGen.js
 ┣ package.json
 ┗ README.md'''

---

## 🚀 실행 방법

### 1️⃣ HuggingFace API 키 준비
아래에서 무료 토큰을 발급받습니다.

https://huggingface.co/settings/tokens

발급 후 → llm.js / imageGen.js 파일의  
`YOUR_HF_TOKEN` 부분에 넣습니다.

---

### 2️⃣ 프로젝트 다운로드 (또는 클론)
GitHub에서 zip 다운로드하거나 로컬로 복사합니다.

---

### 3️⃣ Vercel에 배포하기
1. https://vercel.com 에서 GitHub로 로그인  
2. “New Project” 클릭  
3. 이 저장소 선택  
4. “Deploy” 버튼 클릭  

1분 뒤 자동으로 웹사이트 URL이 생성됩니다!

---

## 🎯 목표

이 프로젝트는 복잡한 기술 없이도  
**0원으로 AI 비주얼 노벨 챗봇 MVP가 가능한지 증명하는 예제**입니다.

향후 확장 가능 기능:

- 캐릭터 일관성 유지 이미지 생성
- 감정 기반 대화 엔진
- 음성(TTS) 추가
- 스토리 라인 전개
- 사진 기반 상호작용
- 애니메이션 출력 등

---

## 📌 라이선스
이 프로젝트는 자유롭게 수정·확장해도 됩니다.  
학습용 또는 개인 실험용으로 사용하세요.

---

## 👤 만든 이유
“텍스트만으로는 몰입이 부족한 기존 AI 챗봇의 한계를 넘어  
시각적, 감정적 몰입을 강화하는 새로운 형태의 AI 방식을 실험하기 위해.”

---

## 🙋 문의
프롬프트/구조/기능 확장 등 도움이 필요하면 언제든 질문하세요!
