import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import routes from "@/constants/routes.js";

function AdminPage() {
  const isAdmin = localStorage.getItem("isAdmin");
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isAdmin);
    if (!isAdmin) {
      navigate(routes.signIn);
    }
  }, [isAdmin]);

  return <div>관리자 페이지</div>;
}

export default AdminPage;
