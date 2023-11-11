import useInfiniteComments from "@/hooks/api/fund/useInfiniteComments.js";
import { useParams } from "react-router-dom";
import { useRef } from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver.js";
import Comment from "@/components/fund-detail/comment/Comment.jsx";

function InfiniteComment() {
  const { fundId } = useParams();
  const { data, fetchNextPage } = useInfiniteComments({ fundId });
  const loaderRef = useRef();

  useIntersectionObserver(async () => {
    await fetchNextPage();
  }, loaderRef);

  return (
    <>
      {data?.pages.map((page) =>
        page.comments.map((info, index) => <Comment key={index} {...info} />),
      )}
      <div ref={loaderRef}>load</div>
    </>
  );
}

export default InfiniteComment;
