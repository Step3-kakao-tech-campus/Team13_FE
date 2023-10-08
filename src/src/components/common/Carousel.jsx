import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

import CarouselCard1 from "@/assets/carousel-card/CarouselCard1.png";
import CarouselCard2 from "@/assets/carousel-card/CarouselCard2.png";
import CarouselCard3 from "@/assets/carousel-card/CarouselCard3.png";

const Styled = {
  Container: styled.article`
    position: relative;
    left: calc((70rem - 100vw) / 2 - 2rem);
    z-index: 0;

    @media (max-width: 70rem) {
      left: -2rem;
    }

    width: 100vw;

    .slick-dots {
      bottom: 1rem;
    }

    .slick-arrow {
      z-index: 1;

      &:before {
        font-size: 2rem;
        color: black;
        opacity: 0.25;
      }

      &:hover:before {
        opacity: 0.75;
        transition: opacity ease-in-out 0.25s;
      }
    }

    .slick-prev {
      left: 2rem;
    }

    .slick-next {
      right: 2rem;
    }

    @media screen and (max-width: 576px) {
      .slick-dots {
        bottom: 0.25rem;
      }
    }
  `,
  Card: styled.img`
    width: 100vw;
    min-height: 100px;
    object-fit: cover;
  `,
};

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    arrows: !isMobile,
  };

  const CARD_INFOS = [
    {
      name: "돈 모을 때도 소비할 때도 펀더링으로 투명하게",
      src: CarouselCard1,
    },
    {
      name: "신뢰 가능한 출금",
      src: CarouselCard2,
    },
    {
      name: "쉽게 조회하는 출금내역과 증빙 자료",
      src: CarouselCard3,
    },
  ];

  return (
    <Styled.Container>
      <Slider {...settings}>
        {CARD_INFOS.map((card) => (
          <Styled.Card key={card.name} src={card.src} alt={card.name} />
        ))}
      </Slider>
    </Styled.Container>
  );
}

export default Carousel;
