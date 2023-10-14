import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import BlogCard from './BlogCard';

const BlogSlider = () => {
  const blogs = [
    {
      name: 'blog 1',
      path: '#',
      bgColor: generate(),
    },
    {
      name: 'blog 2',
      path: '#',
      bgColor: generate(),
    },
    {
      name: 'blog 3',
      path: '#',
      bgColor: generate(),
    },
    {
      name: 'blog 4',
      path: '#',
      bgColor: generate(),
    },
    {
      name: 'blog 5',
      path: '#',
      bgColor: generate(),
    },
    {
      name: 'blog 1',
      path: '#',
      bgColor: generate(),
    },
    {
      name: 'blog 2',
      path: '#',
      bgColor: generate(),
    },
  ];
  function createHex() {
    let hexCode = '';
    const v = 'abcdef0123456789';

    for (let i = 0; i < 6; i++) {
      hexCode += v.charAt(Math.floor(Math.random() * v.length));
    }
    return hexCode;
  }

  function generate() {
    let deg = Math.floor(Math.random() * 360);
    let gradient =
      'linear-gradient(' +
      deg +
      'deg, ' +
      '#' +
      createHex() +
      ',' +
      '#' +
      createHex() +
      ')';

    //   console.log(gradient);
    return gradient;
  }
  return (
    <div>
      <h2>Latest Blogs</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.name}>
            <BlogCard {...blog} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default BlogSlider;
