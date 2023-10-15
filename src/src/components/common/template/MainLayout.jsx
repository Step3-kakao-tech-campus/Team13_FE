import styled from "styled-components";
import { PropTypes } from "prop-types";
import Carousel from "@/components/common/Carousel.jsx";

const Styled = {
  Container: styled.section`
    padding: 4rem 0;
  `,
};

/**
 * Carousel이 포함된 레이아웃
 * @param {React.ReactNode} children
 */

function MainLayout({ children }) {
  return (
    <>
      <Carousel />
      <Styled.Container>{children}</Styled.Container>
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
