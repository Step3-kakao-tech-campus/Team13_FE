import { useRef } from "react";
import { useParams } from "react-router-dom";
import { PropTypes } from "prop-types";
import useInfiniteReplyQuery from "@/hooks/api/fund/useInfiniteReplyQuery.js";
import Comment from "@/components/fund-detail/comment/Comment";
import useIntersectionObserver from "@/hooks/useIntersectionObserver.js";
import CommentSkeleton from "@/components/fund-detail/comment/Comment.skeleton.jsx";

/**
 * 대댓글 무한 스크롤
 * @param {number} commentId
 */

function InfiniteReply({ commentId }) {
  const { fundId } = useParams();
  const { data, fetchNextPage } = useInfiniteReplyQuery({ fundId, commentId });
  const loaderRef = useRef();

  useIntersectionObserver(async () => {
    await fetchNextPage();
  }, loaderRef);

  return (
    <>
      {data?.pages?.map((page) =>
        page.comments.map((info, index) => (
          <Comment key={index} {...info} isReply={true} />
        )),
      )}

      <CommentSkeleton
        isReply={true}
        loaderRef={loaderRef}
        style={data?.pages.at(-1)?.isLastPage && { display: "none" }}
      />
    </>
  );
}

InfiniteReply.propTypes = {
  commentId: PropTypes.number,
};

export default InfiniteReply;
