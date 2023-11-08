import { useMutation } from "@tanstack/react-query";
import API from "@/constants/API.js";
import AuthAPI from "@/api/authAPI.js";
import { useNavigate } from "react-router-dom";
import routes from "@/constants/routes.js";
import toast from "react-hot-toast";

function useSignUpMutation() {
  const navigate = useNavigate();
  return useMutation(
    [API.AUTH.SIGN_UP],
    async ({ email, password, nickname }) => {
      await AuthAPI.postSignUp({ email, password, nickname });
    },
    {
      onSuccess: () => {
        toast.success("회원가입이 성공적으로 되었습니다");
        navigate(routes.signIn);
      },
      onError: () => {
        toast.error("회원가입에 실패했습니다");
      },
    },
  );
}

export default useSignUpMutation;
