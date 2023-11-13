import { useNavigate } from "react-router-dom";
import routes from "@/constants/routes.js";
import { useAtomValue } from "jotai";
import accessTokenAtom from "@/storage/accessToken.atom.js";

function useErrorNavigate() {
  const accessToken = useAtomValue(accessTokenAtom);
  const navigate = useNavigate();

  const handleError = (error) => {
    console.log(accessToken);
    if (!accessToken) {
      navigate(routes.signIn);
    }
  };

  return { handleError };
}

export default useErrorNavigate;
