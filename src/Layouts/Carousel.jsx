import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/styles//css/carousel.css'
const Carousel = ({slides}) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
        <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} style={{ margin: '10px', padding: '10px' }} className='carousel'>
          <img
            src={slide.imageSrc}
            alt={slide.altText}
            className='carousel__img'/>
          <div className='carousel__info'>
            <h1 className='carousel__title'>{slide.title}</h1>
                  <p className='carousel__des'>{slide.description}</p>
          </div>
        </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
