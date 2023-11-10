import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";

import useDeleteUserInfoInLocalStorage from "@/hooks/useDeleteUserInfoInLocalStorage.js";
import routes from "@/constants/routes.js";

function PrivateLayout() {
  const navigate = useNavigate();
  const deleteUserInfoInLocalStorage = useDeleteUserInfoInLocalStorage();

  useEffect(() => {
    const deleteTokenAndRedirect = () => {
      deleteUserInfoInLocalStorage();
      navigate(routes.signIn);
    };

    if (!localStorage.getItem("accessToken")) {
      deleteTokenAndRedirect();
    }

    const accessToken = localStorage?.getItem("accessToken").replace(/"/gi, "");

    if (!accessToken) {
      deleteTokenAndRedirect();
    }
  }, []);

  return <Outlet />;
}
export default PrivateLayout;
