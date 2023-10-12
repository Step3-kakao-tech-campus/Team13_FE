import { Helmet } from "react-helmet-async";
import { PropTypes } from "prop-types";

/**
 * head title을 변경
 * @param {string=} title undefined면 title은 Fundering
 */

function PageTitle({ title }) {
  return (
    <Helmet>
      <title>{title ? `${title} - ` : ""}Fundering</title>
    </Helmet>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
