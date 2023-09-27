프로젝트를 실행하기 위해서 패키지 파일을 먼저 설치해주세요. `yarn install`
`yarn dev` 명령어를 통해 프로젝트를 실행할 수 있습니다.

## 디렉토리 구조
```text
.
├── README.md
├── docs : 개발 관련 문서
│   ├── images
└── src : 소스 코드
    ├── src
    │   ├── App.jsx
    │   ├── main.jsx
    │   ├── router.jsx
    │   ├── api : api 관련 함수
    │   ├── assets : icon 이미지 등의 정적 파일
    │   ├── components : 컴포넌트
    │   │   └── common : 여러 페이지에서 사용되는 컴포넌트, 이외의 컴포넌트는 페이지마다 components 하위에 디렉토리 생성
    │   ├── constants : 상수
    │   ├── hooks : 커스텀 훅
    │   ├── pages : 페이지
    │   ├── storage : 전역  태 관련
    │   └── styles : 스타일 관련
    ├── README.md
    ├── index.html
    ├── jsconfig.json
    ├── vite.config.js
    ├── package.json
    ├── public
    └── yarn.lock
```
