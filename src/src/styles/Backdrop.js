import styled from "styled-components";

const Backdrop = styled.section`
  position: fixed;
  top: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.33);
  z-index: 100;
`;

export default Backdrop;
