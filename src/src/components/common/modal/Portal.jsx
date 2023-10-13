import ReactDOM from "react-dom";
import { PropTypes } from "prop-types";

/**
 * div#portal로 렌더링
 * @props {React.ReactNode} children
 */

function Portal({ children }) {
  const el = document.getElementById("portal");
  return ReactDOM.createPortal(children, el);
}

Portal.propTypes = {
  children: PropTypes.node,
};

export default Portal;
