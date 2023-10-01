import styled from "styled-components";
import { PropTypes } from "prop-types";

const Styled = {
  Container: styled.section`
    display: grid;
    justify-content: center;
    align-items: flex-start;

    grid-template-columns: repeat(auto-fill, 320px);
    grid-gap: 3rem;

    @media screen and (max-width: 320px) {
      grid-template-columns: repeat(1, 100%);
    }
  `,
};

function Grid({ children }) {
  return <Styled.Container>{children}</Styled.Container>;
}

Grid.propTypes = {
  children: PropTypes.node,
};

export default Grid;
