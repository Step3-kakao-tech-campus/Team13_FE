import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";
import fundAPI from "@/api/fundAPI.js";
import routes from "@/constants/routes.js";

function MobilePaymentPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const imp_uid = searchParams.get("imp_uid");
    const fundId = searchParams.get("fundId");
    const success = searchParams.get("imp_success");
    const error_msg = searchParams.get("error_msg");
    const amount = searchParams.get("amount");

    const handlePost = async () => {
      try {
        await fundAPI.postPaymentByFundId({
          fundId,
          amount: +amount,
          impUid: imp_uid,
        });
        toast.success("결제 성공");
        navigate(routes.myFund);
      } catch (e) {
        toast.error("결제에 실패했습니다");
        return navigate(-1);
      }
    };
    console.log(imp_uid, fundId, success, error_msg, amount);

    if (!success) {
      toast.error(error_msg);
      navigate(-1);
    } else {
      handlePost();
    }
  }, []);
  return <div>mobile payment</div>;
}

export default MobilePaymentPage;
