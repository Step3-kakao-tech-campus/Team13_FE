# 기술 스택
![image](https://github.com/Step3-kakao-tech-campus/Team13_FE/assets/102893954/917d194c-a948-4a1c-a5da-1a8be7fcf42c)

### **Bundler & Development Server**

- **Vite (v4.4.5)**
    - 빠른 속도로 번들링하고 개발 서버를 제공하여 프론트엔드 애플리케이션의 빠른 개발을 돕습니다.

### **UI 라이브러리 & 스타일링**

- **React (v18.2.0)**
    - 컴포넌트 기반의 동적 UI를 구축하는 데 사용됩니다.
- **Styled-components (v6.0.8), Styled-reset (v4.5.1)**
    - CSS-in-JS 방식으로 스타일을 컴포넌트와 결합하며, 초기 스타일을 재설정합니다.
- **React-slick (v0.29.0), Slick-carousel (v1.8.1)**
    - 반응형 캐러셀 및 슬라이더를 구현하는데 활용됩니다.

### **State Management**

- **Jotai (v2.4.3)**
    - 간단한 API를 통해 React 애플리케이션의 전역 상태를 관리합니다.
- **@tanstack/react-query (v4.35.3), @tanstack/react-query-devtools (v4.35.3)**
    - 데이터 fetching 및 캐싱을 용이하게 해주며, 개발 중 데이터 상태를 모니터링합니다.

### **Form & Input Handling**

- **React-hook-form (v7.46.2), React-number-format (v5.3.1), React-textarea-autosize (v8.5.3)**
    - 폼과 입력을 다루는데 유용하며, 특히 폼 유효성 검사 및 입력 요소의 자동 조절을 지원합니다.

### **Data & Networking**

- **Axios (v1.5.1)**
    - HTTP 클라이언트 라이브러리로, 서버와의 통신을 단순화하고 향상시킵니다.

### **Rich Text Editing & Content Handling**

- **React-quill (v2.0.0), Quill-image-resize-module-react (v3.0.0), Dompurify (v3.0.6)**
    - 리치 텍스트 편집 및 콘텐츠의 처리와 보안을 향상시킵니다.

### **Error Handling & Utilities**

- **React-error-boundary (v4.0.11), React-hot-toast (v2.4.1)**
    - 애플리케이션 내에서 오류 처리 및 통지를 용이하게 도와줍니다.

### **Development 및 빌드 도구:**

- **ESLint (v8.22.0), Prettier (v3.0.3), JSDoc (v4.0.2)**
    - 코드 품질을 유지하고 문서화하여 개발자 경험을 향상시킵니다.
- **MSW (v1.3.2)**
    - 서비스 워커를 이용하여 가짜 서버를 구축하고 개발 중 테스트 및 모의를 수행합니다.

# 서비스 기획 의도

- 아이돌, 스포츠 스타 등 셀럽 팬덤 문화가 더욱 확대되고 있습니다. 이러한 팬덤은 셀럽들의 기념일이나 기념 행사를 위해 캠페인(예를 들어 지하철 광고 등)을 주최하는 경우가 많습니다.

    ![image](https://github.com/Step3-kakao-tech-campus/Team13_FE/assets/102893954/b874eb53-922e-4bc2-a53d-aee278ea27a6)

# ERD

![KakaoTalk_Photo_2023-11-11-23-33-43](https://github.com/Step3-kakao-tech-campus/Team13_FE/assets/102893954/5257a2fe-7cdd-4e88-8f04-a33d4495503b)

### 셀럽 팬덤 (후원자)

- 팬들은 주로 ‘팬 커뮤니티’에서 ‘캠페인 주최자’의 후원 모집 글을 보고, 해당 글에 있는 개인 계좌에 입금하여 모금을 진행합니다. 그러나 이로 인해 여러 문제점이 발생합니다.
    - **금액 사용 투명성의 부재:**
        - 주최자가 어디에 금액을 사용하는지에 대한 투명성이 보장되지 않아 낮은 가격에 진행한 캠페인을 더 높은 가격에 진행하거나 돈을 횡령하는 문제가 발생합니다.
        - 또한, 돈을 받고 사라지는 경우가 발생할 수 있습니다.
- **해결 방안**
    - 공동 계좌를 발급하여 해당 캠페인에서 발생하는 모금 현황, 모금 금액 사용처 등을 투명하게 관리하는 사이트의 필요성이 대두됩니다.

### 셀럽 팬덤 (주최자)

- 셀럽 캠페인 주최자는 팬 커뮤니티에서 후원 모집 글을 작성하고 개인 계좌를 등록하여 후원금을 받습니다. 그러나 이로 인해 여러 문제점이 발생합니다.
    - **금액 관리의 어려움**:
        - 개인 계좌에 큰 금액이 계속해서 모금되고, 후원자들이 입금한 금액을 개별적으로 확인하는 것이 번거롭습니다.
    - **실시간 후원금 사용 내역 공개의 어려움**:
        - 후원자들이 돈의 사용처를 계속 문의하고 주최자는 그에 대한 답변을 하지만, 실시간으로 바로 보여주기 번거로운 경우가 있습니다.
- **해결 방안**
    - 이러한 문제를 해결하기 위해, 모금액 관리를 개인 계좌에서 담당하지 않고, 실시간으로 후원금 사용 내역을 업데이트해주는 웹 서비스의 필요성이 대두됩니다.
    - **실시간 후원금 관리 및 인증**:
        - 개인 계좌가 아닌 공동 계좌를 발급하여, 후원금을 관리하고 실시간으로 업데이트함으로써 주최자 입장에서 후원금 사용 내역을 실시간으로 제3의 사이트에서 인증받을 수 있게 됩니다.
    - **투명하고 효율적인 관리**:
        - 해당 계좌에서 출금을 승인해야 돈을 사용할 수 있도록 설정하여, 주최자는 모든 후원자에게 개별적으로 후원금 사용 내역을 제공하는 번거로움을 덜게 됩니다.

    ![image](https://github.com/Step3-kakao-tech-campus/Team13_FE/assets/102893954/70e78376-971e-48eb-a9e2-767a641823d2)


- **후원자 측**
    - 와디즈, 인디고고 등의 펀딩 사이트처럼 ‘셀럽 캠페인’을 위한 펀딩 형식으로 후원금을 모금하고, 현재 후원금, 캠페인 주최자, 후원금 사용내역을 실시간으로 알림을 받고 확인할 수 있는 사이트가 있다면, 캠페인을 원하는 팬덤들에게 매력적인 웹 서비스가 될 수 있습니다.
- **주최자 측**
    - 이렇게 개인 계좌 대신 공동 계좌를 이용하여 실시간으로 후원금을 관리하고 관련 정보를 제3의 사이트에서 인증받음으로써, 셀럽 캠페인 주최자가 투명하게 후원금을 관리하고 투명성을 유지할 수 있도록 서비스를 제공하게 됩니다.

## 펀더링(Fundering)

![image](https://github.com/Step3-kakao-tech-campus/Team13_FE/assets/102893954/c1ec4dcb-6075-408e-998f-daaad27bc339)


# 주요 개발 기능

- 펀딩 사이트의 경우 ‘모바일’ 환경에서 사용하는 사람들도 많은 만큼, ‘반응형’ 디자인을 채택
    - media Query, Grid

    <img width="1840" alt="image" src="https://github.com/Step3-kakao-tech-campus/Team13_FE/assets/102893954/f3cc46d1-87d7-486c-b3e5-6e80a6b90b0c">

    <img width="968" alt="image" src="https://github.com/Step3-kakao-tech-campus/Team13_FE/assets/102893954/ccd09f39-d6c2-4e1f-8bed-da8be0b883e0">

    <img width="612" alt="image" src="https://github.com/Step3-kakao-tech-campus/Team13_FE/assets/102893954/539bdb7a-3f8f-4413-9f6d-0f696bfb1314">


- 금액 이체를 위한 ‘포트원’API 이용

    <img width="1025" alt="image" src="https://github.com/Step3-kakao-tech-campus/Team13_FE/assets/75734220/807b1892-272d-4798-9adc-ee10da30ace7">
    <img width="1025" alt="image" src="https://github.com/Step3-kakao-tech-campus/Team13_FE/assets/75734220/12b5fe38-1be0-4dae-8fdf-e6c144eb030c">
    <img width="1025" alt="image" src="https://github.com/Step3-kakao-tech-campus/Team13_FE/assets/75734220/eed8ba63-ef57-4a85-b8e0-300a7ede89a9">

# 트러블 슈팅

- **Mock API 활용**:
    - 백엔드 배포 일정 준수를 위해 Mock API를 사용하여 개발을 진행하였습니다.
    
    ![carbon](https://github.com/Step3-kakao-tech-campus/Team13_FE/assets/102893954/3deafe31-d70a-4b5f-93f8-0f36644a87e6)
    
- **API 로직 및 스타일링 분리**:
    - React Query를 활용하여 API 로직과 스타일링을 분리하여 효율적으로 관리하였습니다.
    
    ![carbon (1)](https://github.com/Step3-kakao-tech-campus/Team13_FE/assets/102893954/540c5517-4bf9-4cc2-8a24-5735d94d6f59)
    
- **예외 처리와 에러 관리**:
    - React Error Boundary의 **`<ErrorBoundary />`**와 React Router의 **`CreateBrowserRouter`**의 **`errorElement`**를 활용하여 예외 처리를 구현하였습니다.
    
    ![carbon (3)](https://github.com/Step3-kakao-tech-campus/Team13_FE/assets/102893954/4e0f752c-ed54-44e0-8d1b-af61eb9167e1)
    
    ![carbon (5)](https://github.com/Step3-kakao-tech-campus/Team13_FE/assets/102893954/27788099-3d5a-495f-99b6-11fd1f4fa4f2)
    
- **Custom Hooks 활용**:
    - 중복되는 로직을 처리하기 위해 **`useIntersectionObserver`**, **`useSetImageFileToUrl`**, **`useOutsideClick`** 등의 Custom Hook을 개발하여 활용하였습니다.
    
    ![carbon (6)](https://github.com/Step3-kakao-tech-campus/Team13_FE/assets/102893954/ff26b662-b874-4548-af5d-1f371c5afd92)
    
- 멘토**리뷰, 팀원 간 리뷰 반영 및 개선**:
    - PR 코드 리뷰 및 멘토링을 통해 받은 피드백을 적극적으로 반영하였습니다. 또한, 팀 내부 코드 리뷰에서도 팀원들의 의견을 수용하여 코드를 개선했습니다.
    
    [6주차 코드리뷰 반영 by j8won · Pull Request #81 · Step3-kakao-tech-campus/Team13_FE](https://github.com/Step3-kakao-tech-campus/Team13_FE/pull/81)
    
    ![image](https://github.com/Step3-kakao-tech-campus/Team13_FE/assets/102893954/2a8cf53f-0701-439b-9c22-8cde192dc073)

    [CelebInfoGridCard 셀럽 목록 페이지 Grid 컴포넌트 by Klomachenko · Pull Request #39 · Step3-kakao-tech-campus/Team13_FE](https://github.com/Step3-kakao-tech-campus/Team13_FE/pull/39)
    
    ![image](https://github.com/Step3-kakao-tech-campus/Team13_FE/assets/102893954/c85f4066-15ea-4e0f-8e41-548f3821f8bc)
    
- **반응형 웹 디자인**:
    - Media Query와 Grid를 활용하여 여러 기기에 대응하는 반응형 컴포넌트를 설계하였습니다.
    
    ![carbon (7)](https://github.com/Step3-kakao-tech-campus/Team13_FE/assets/102893954/cdc1a29a-4541-4fd0-bd9e-bbaa41bcc914)
    
- **문서화**:
    - JSDoc과 PropTypes를 활용하여 코드를 문서화하여 개발과 유지보수의 효율성을 높였습니다.
    
    ![carbon (8)](https://github.com/Step3-kakao-tech-campus/Team13_FE/assets/102893954/0beb2701-d191-4af7-9883-a34045d05b9c)
    
    ![carbon (9)](https://github.com/Step3-kakao-tech-campus/Team13_FE/assets/102893954/ed3282d1-b78e-4dc8-baca-47e4ca68d6c0)

    

# 관련 링크

- **서울시 지하철 셀럽 광고 증가세**

    [지하철 광고 수 1위는 뉴규~? 서울지하철 광고의 모든 것](https://m.blog.naver.com/haechiseoul/221925086194)

- **주최자 횡령 자료**

    [[스경X초점] 명품 휘두른 ‘아이돌 서포트’…소속사가 나서야 할 때](https://sports.khan.co.kr/entertainment/sk_index.html?art_id=202101141504003&sec_id=540101)

- **FUNDERING 기획 자료**

    [presentation](https://www.figma.com/proto/IMgAvRFUFhDzkvtTD5Rpdt/presentation?page-id=0:1&node-id=7-9&mode=design&t=IY3tYdk9eVv77aBe-1)
