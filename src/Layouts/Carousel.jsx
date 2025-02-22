import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const imageCount = 10;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {Array.from({ length: imageCount }).map((_, index) => (
          <div key={index} style={{ margin: '10px', padding: '10px' }}>
            <img
              src={`https://placehold.co/300x400?text=Slide+${index + 1}`}
              alt={`Slider ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
