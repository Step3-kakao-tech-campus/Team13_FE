import useFundIntroQuery from "@/hooks/api/fund/useFundIntroQuery.js";
import QuillStrToHtml from "@/components/common/QuillStrToHtml.jsx";
import { useParams } from "react-router-dom";

function IntroTextView() {
  const { fundId } = useParams();
  const { data } = useFundIntroQuery({ fundId });
  return (
    <QuillStrToHtml
      htmlStr={data?.introduction}
      style={{ paddingTop: "1rem" }}
    />
  );
}

export default IntroTextView;
