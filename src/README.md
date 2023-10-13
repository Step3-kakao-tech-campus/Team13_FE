프로젝트를 실행하기 위해서 패키지 파일을 먼저 설치해주세요. `yarn install`
`yarn dev` 명령어를 통해 프로젝트를 실행할 수 있습니다.

## 디렉토리 구조
- 컴포넌트는 공통, 펀딩 관련, 셀럽 관련, 페이지 관련으로 분리한다
- 펀딩 관련 및 셀럽 관련 컴포넌트는 여러 페이지에서 사용되는 펀딩 및 셀럽 관련 컴포넌트이다. 예시) FundInfoGridCard
- 페이지 관련 컴포넌트는 해당 페이지에서만 사용되는 컴포넌트이다
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
    │   │   └── fund: 펀딩 관련 컴포넌트
    │   │   └── celebrity: 셀럽 관련 컴포넌트
    │   │   └── 페이지명 (소문자와 - 사용): 해당 페이지에서만 사용되는 컴포넌트
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
