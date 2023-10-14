import img1 from '@/assets/img1.jpg';
import img2 from '@/assets/img2.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
const height = 300;
const width = window.innerWidth;
const HomeSlider = () => {
  return (
    <div style={{ marginTop: '2rem' }}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={img1}
            alt=""
            width={width}
            height={height}
            style={{ objectFit: 'cover' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={img2}
            alt=""
            width={width}
            height={height}
            style={{ objectFit: 'cover' }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default HomeSlider;
