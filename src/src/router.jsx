import { createBrowserRouter } from "react-router-dom";

import routes from "@/constants/routes.js";
import Home from "@/pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "",
    // element: ,
    // loader: ,
    // errorElement: ,
    children: [
      {
        path: routes.home,
        element: <Home />,
      },
    ],
  },
]);

export default router;
