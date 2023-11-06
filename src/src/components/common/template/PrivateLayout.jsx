import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";

import useDeleteUserInfoInLocalStorage from "@/hooks/useDeleteUserInfoInLocalStorage.js";
import routes from "@/constants/routes.js";

function PrivateLayout() {
  const navigate = useNavigate();
  const deleteUserInfoInLocalStorage = useDeleteUserInfoInLocalStorage();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken").replace(/"/gi, "");

    if (!accessToken || accessToken === "") {
      deleteUserInfoInLocalStorage();
      navigate(routes.signIn);
    }
  }, []);

  return <Outlet />;
}
export default PrivateLayout;
