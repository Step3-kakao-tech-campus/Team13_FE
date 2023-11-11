import CommentInput from "@/components/fund-detail/comment/CommentInput.jsx";
import Comment from "@/components/fund-detail/comment/Comment.jsx";
import InfiniteComment from "@/components/fund-detail/comment/InfiniteComment.jsx";

const Styled = {};

function CommentWrapper() {
  return (
    <>
      <CommentInput />
      {/*<Comment />*/}
      <InfiniteComment />
    </>
  );
}
export default CommentWrapper;
