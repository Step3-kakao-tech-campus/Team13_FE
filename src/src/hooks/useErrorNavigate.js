import { useNavigate } from "react-router-dom";
import routes from "@/constants/routes.js";

function useErrorNavigate() {
  const navigate = useNavigate();

  const handleError = (error) => {
    if (!localStorage.getItem("accessToken")) {
      navigate(routes.signIn);
    }
  };

  return { handleError };
}

export default useErrorNavigate;
