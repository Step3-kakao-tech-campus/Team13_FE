import { useQuery } from "@tanstack/react-query";
import API from "@/constants/API.js";
import toast from "react-hot-toast";
import userAPI from "@/api/userAPI.js";

function useUserSettingQuery() {
  return useQuery(
    [API.USER.SETTING],
    async () => {
      return await userAPI.getUserSettingByToken();
    },
    {
      suspense: true,
      onError: (err) => {
        toast.error(err.response.data.message);
      },
    },
  );
}

export default useUserSettingQuery;
