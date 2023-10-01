import { createBrowserRouter } from "react-router-dom";

import routes from "@/constants/routes.js";
import Home from "@/pages/Home.jsx";
import Layout from "@/components/common/layout/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    // loader: ,
    // errorElement: ,
    children: [
      {
        path: routes.home,
        element: <Home />,
      },
      {
        path: routes.fund,
        element: <Home />,
      },
      {
        path: routes.celebrity,
        element: <Home />,
      },
    ],
  },
]);

export default router;
