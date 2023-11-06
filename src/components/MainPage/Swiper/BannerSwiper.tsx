import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from '@emotion/styled';

import { BannerSwiperContainer } from './BannerSwiper.styles';

const CustomSwiper = styled(Swiper)`
  width: 100%;
  height: 200px;

  .swiper-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 10px;
  }

  .swiper-pagination-bullet {
    margin: 0 9px;
    position: relative;
    width: 6px;
    height: 6px;
    background-color: #fff;
    opacity: 0.4;
    @extend %transition_all_03s;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 10px;
      height: 10px;
      transform: translate(-50%, -50%);
      border: 0px solid #fff;
      border-radius: 50%;
      @extend %transition_all_03s;
    }

    &:hover,
    &.swiper-pagination-bullet-active {
      opacity: 1;
    }

    &.swiper-pagination-bullet-active {
      &::before {
        border-width: 1px;
      }
    }
  }
`;

const CustomSwiperSlide = styled(SwiperSlide)`
  width: 100%;
  border-radius: 20px;
  border: 2px solid black;
  background-size: cover;
  background-position: center;
  padding-bottom: 30%;
`;

const slideData = [
  'https://i.postimg.cc/8PzLM1h3/23231.png',
  'https://i.postimg.cc/mD7KY3Gb/wewe.png',
  'https://i.postimg.cc/qqkD29LL/529f73b41a06cd4951aaea5a9b0bcc28.png',
];

const BannerSwiper: React.FC = () => {
  return (
    <BannerSwiperContainer>
      <CustomSwiper
        className="banner"
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {slideData.map((image, index) => (
          <CustomSwiperSlide key={index} style={{ backgroundImage: `url(${image})` }} />
        ))}
      </CustomSwiper>
    </BannerSwiperContainer>
  );
};

export default BannerSwiper;
