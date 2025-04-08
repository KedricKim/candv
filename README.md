# C&V Web Project

[![Deploy Status](https://github.com/KedricKim/candv/actions/workflows/deploy.yml/badge.svg)](https://github.com/KedricKim/candv/actions/workflows/deploy.yml)
[![Deploy to GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-blue?logo=github)](https://kedric.duckdns.org)

React 기반 정적 웹사이트로, GitHub Actions를 활용하여 GitHub Pages에 자동 배포됩니다.  
SEO 최적화 및 Supabase 연동이 포함되어 있습니다.

---

## 🔧 GitHub Actions를 통한 자동 배포 설정

이 프로젝트는 GitHub Actions를 통해 `main` 브랜치에 Push 시 자동으로 빌드 및 배포됩니다.  
배포 경로: [https://kedric.duckdns.org](https://kedric.duckdns.org)

---

### 📁 환경변수 설정 (.env)

로컬에서 실행 시, 프로젝트 루트에 `.env` 파일을 생성하여 아래와 같이 설정하세요:

```env
REACT_APP_NAVER_SEO=your-naver-code
REACT_APP_GOOGLE_SEO=your-google-code
REACT_APP_SUPABASE_KEY=your-supabase-key
```
