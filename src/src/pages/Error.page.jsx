import { PropTypes } from "prop-types";

/**
 * 에러 문구를 나타내는 페이지
 * @param {string} title
 * @param {string} body
 */

function ErrorPage({ title, body }) {
  return (
    <div style={{ padding: "2rem" }}>
      <div
        style={{ paddingBottom: "1rem", fontSize: "1.75rem", fontWeight: 600 }}
      >
        {title}
      </div>
      <div>{body}</div>
    </div>
  );
}

ErrorPage.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

export default ErrorPage;
