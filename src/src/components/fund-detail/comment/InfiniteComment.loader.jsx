import CommentSkeleton from "@/components/fund-detail/comment/Comment.skeleton.jsx";

function InfiniteCommentLoader() {
  return (
    <>
      <CommentSkeleton />
      <CommentSkeleton />
      <CommentSkeleton />
    </>
  );
}

export default InfiniteCommentLoader;
