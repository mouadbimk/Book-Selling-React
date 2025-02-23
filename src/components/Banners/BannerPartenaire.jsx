import { Swiper, SwiperSlide } from 'swiper/react';  // Correct import
import 'swiper/css/bundle';  // Correct styles import
import { Autoplay } from 'swiper/modules';
const BannerPartenaire = ()=>{
    return (
        <>
          <Swiper
 slidesPerView={4}
 spaceBetween={30}
 loop={true}
 autoplay={{
    delay:2500,
    disableOnInteraction:false
 }}

 modules={[Autoplay]}
  className="mySwiper"
>

  <SwiperSlide className='slider-company'>
  <img src="https://w7.pngwing.com/pngs/523/198/png-transparent-google-logo-google-search-google-play-google-text-logo-number.png" alt="Nature 1" />
  </SwiperSlide>
  <SwiperSlide className='slider-company'>
  <img src="https://static.vecteezy.com/system/resources/previews/014/018/563/non_2x/amazon-logo-on-transparent-background-free-vector.jpg" alt="Nature 1"/>
  </SwiperSlide>
  <SwiperSlide className='slider-company'>
  <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg" alt="Nature 1" />
  </SwiperSlide>
  <SwiperSlide className='slider-company'>
  <img src="https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png" alt="Nature 1" />
  </SwiperSlide>
  <SwiperSlide className='slider-company'>
  <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Nature 1" />
  </SwiperSlide>
  <SwiperSlide className='slider-company'>
  <img src="https://logos-world.net/wp-content/uploads/2020/04/Adidas-Logo-1991-present.jpg" alt="Nature 1" />
  </SwiperSlide>

</Swiper>
        </>
      );
}
export default BannerPartenaire;