import { createBrowserRouter } from "react-router-dom";

import routes from "@/constants/routes.js";
import PrivateLayout from "@/components/common/template/PrivateLayout.jsx";
import Layout from "@/components/common/template/Layout.jsx";
import Test from "@/pages/Test.jsx";
import FundListPage from "@/pages/FundList.page.jsx";
import LoginPage from "@/pages/Login.page.jsx";
import MyAccountPage from "@/pages/MyAccount.page.jsx";
import CreateFundPage from "@/pages/CreateFund.page.jsx";
import FundDetailPage from "@/pages/FundDetail.page.jsx";
import SignUpPage from "@/pages/SignUp.page.jsx";
import CelebrityListPage from "@/pages/CelebrityList.page.jsx";
import CelebrityDetailPage from "@/pages/CelebrityDetail.page";
import FundTextEditPage from "@/pages/FundTextEdit.page.jsx";
import MainPage from "@/pages/Main.page.jsx";
import FundSupportPage from "@/pages/FundSupport.page.jsx";
import MobilePaymentPage from "@/pages/MobilePayment.page.jsx";
import AdminPage from "@/pages/Admin.page.jsx";
import MyFundPage from "./pages/MyFund.page.jsx";
import WithdrawPage from "@/pages/Withdraw.page.jsx";
import ErrorPage from "@/pages/Error.page.jsx";

const privateChildren = [
  {
    // 펀딩 주최하기
    path: routes.createFund,
    element: <CreateFundPage />,
  },
  {
    // 펀딩 후원하기 페이지
    path: `${routes.support}/:fundId`,
    element: <FundSupportPage />,
    errorElement: <ErrorPage title="찾을 수 없는 펀딩입니다" />,
  },
  {
    // 소개글 및 업데이트 작성
    path: routes.edit,
    element: <FundTextEditPage />,
    errorElement: <ErrorPage title="찾을 수 없는 펀딩입니다" />,
  },
  {
    // 출금 신청
    path: `${routes.withdraw}/:fundId`,
    element: <WithdrawPage />,
    errorElement: <ErrorPage title="찾을 수 없는 펀딩입니다" />,
  },
  {
    // 모바일 결제 진행
    path: routes.mobilePayment,
    element: <MobilePaymentPage />,
  },
  {
    // 관리자 페이지
    path: routes.admin,
    element: <AdminPage />,
  },
  {
    // 마이 펀딩
    path: routes.myFund,
    element: <Test />,
  },
  {
    // 내 계정
    path: routes.myAccount,
    element: <MyAccountPage />,
  },
];

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    errorElement: (
      <Layout>
        <ErrorPage title="접근 불가한 페이지입니다" />
      </Layout>
    ),
    children: [
      {
        // 메인
        path: routes.home,
        element: <MainPage />,
      },
      {
        // 펀딩 목록
        path: routes.fund,
        element: <FundListPage />,
      },
      {
        // 펀딩 상세
        path: `${routes.fund}/:fundId`,
        element: <FundDetailPage />,
        errorElement: <div>존재하지 않는 펀딩입니다</div>,
      },
      {
        // 셀럽 목록
        path: routes.celebrity,
        element: <CelebrityListPage />,
      },
      {
        // 셀럽 상세
        path: `${routes.celebrity}/:celebId`,
        element: <CelebrityDetailPage />,
        errorElement: <div>존재하지 않는 셀럽입니다</div>,
      },
      {
        // 로그인
        path: routes.signIn,
        element: <LoginPage />,
      },
      {
        // 회원가입
        path: routes.signUp,
        element: <SignUpPage />,
      },
      {
        // 사용자
        path: `${routes.user}/:userId`,
        element: <Test />,
        errorElement: <div>존재하지 않는 사용자입니다</div>,
      },
      {
        // 테스트용
        path: "/test",
        element: <Test />,
      },
      {
        // 로그인시에만 접속 가능
        path: "",
        element: <PrivateLayout />,
        children: [...privateChildren],
      },
    ],
  },
]);

export default router;
