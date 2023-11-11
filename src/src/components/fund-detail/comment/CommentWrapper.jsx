import { Suspense } from "react";
import CommentInput from "@/components/fund-detail/comment/CommentInput.jsx";
import InfiniteComment from "@/components/fund-detail/comment/InfiniteComment.jsx";
import InfiniteCommentLoader from "@/components/fund-detail/comment/InfiniteComment.loader.jsx";

function CommentWrapper() {
  return (
    <>
      <CommentInput />
      <Suspense fallback={<InfiniteCommentLoader />}>
        <InfiniteComment />
      </Suspense>
    </>
  );
}
export default CommentWrapper;
