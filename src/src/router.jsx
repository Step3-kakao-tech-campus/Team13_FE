import { createBrowserRouter } from "react-router-dom";

import routes from "@/constants/routes.js";
import Test from "@/pages/Test.jsx";
import Layout from "@/components/common/template/Layout.jsx";
import FundListPage from "@/pages/FundList.page.jsx";
import LoginPage from "@/pages/Login.page.jsx";
import MyAccountPage from "@/pages/MyAccount.page.jsx";
import SignUpPage from "./pages/SignUp.page";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    // loader: ,
    // errorElement: ,
    children: [
      {
        path: routes.home,
        element: <Test />,
      },
      {
        path: routes.fund,
        element: <FundListPage />,
      },
      {
        path: `${routes.fund}/:fundId`,
        element: <Test />,
      },
      {
        path: routes.celebrity,
        element: <Test />,
      },
      {
        path: `${routes.celebrity}/:celebrityId`,
        element: <Test />,
      },
      {
        path: routes.myFund,
        element: <Test />,
      },
      {
        path: routes.myAccount,
        element: <MyAccountPage />,
      },
      {
        path: routes.signIn,
        element: <LoginPage />,
      },
      {
        path: routes.signUp,
        element: <SignUpPage />,
      },
      {
        path: `${routes.user}/:userId`,
        element: <Test />,
      },
      {
        path: "/test",
        element: <Test />,
      },
    ],
  },
]);

export default router;
