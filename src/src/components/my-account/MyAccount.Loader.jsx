import styled from "styled-components";
import Lottie from "lottie-react";
import animationData from "@/assets/lottie/animation_lo1b2rnu.json";

const Styled = {
  Container: styled.div`
    width: 100%;
    height: calc(100vh - 4rem);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p {
      margin-bottom: 10rem;
      color: ${({ theme }) => theme.color.body};
      font-weight: 500;
      text-align: center;
    }

    #lottie-svg-id {
      max-width: 20rem;
    }
  `,
};

function MyAccountLoader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSetting: {
      preserveaspectratio: "xmidymid slice",
      classname: "lottie-svg-class",
      id: "lottie-svg-id",
    },
  };

  return (
    <Styled.Container>
      <div id="lottie-svg-id">
        <Lottie options={defaultOptions} animationData={animationData} />
      </div>
      <p>회원정보를 가져오고 있어요</p>
    </Styled.Container>
  );
}

export default MyAccountLoader;
