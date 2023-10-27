import { useParams } from "react-router-dom";
import useCoAdminQuery from "@/hooks/api/fund/useCoAdminQuery.js";
import CoAdminUser from "@/components/fund-detail/introduction/CoAdminUser.jsx";

function CoAdmins() {
  const { fundId } = useParams();
  const { data } = useCoAdminQuery({ fundId });

  return (
    <>
      {data?.map((coAdmin, index) => (
        <CoAdminUser
          key={index}
          userId={coAdmin.userId}
          profileUrl={coAdmin.profileUrl}
          nickname={coAdmin.nickname}
        />
      ))}
    </>
  );
}

export default CoAdmins;
