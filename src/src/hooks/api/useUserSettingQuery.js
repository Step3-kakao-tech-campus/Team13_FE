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
      onError: (err) => {
        toast.error(err.message);
      },
    },
  );
}

export default useUserSettingQuery;
