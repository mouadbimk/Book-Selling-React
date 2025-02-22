import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/styles//css/carousel.css'
const Carousel = () => {
  const imageCount = 10;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
      <div style={{ margin: '10px', padding: '10px' }} className='carousel'>
            <img
              src='https://placehold.co/300x400?text=Slide+19'
              alt='Slider'
              className='carousel__img'/>
            <div className='carousel__info'>
              <h1 className='carousel__title'>Example Title Book</h1>
              <p className='carousel__des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore voluptates tempora vitae necessitatibus quo. Eum, consequuntur vitae neque consectetur, animi, suscipit perferendis optio doloremque similique a harum. Quisquam enim sed consectetur. Doloremque temporibus fuga laboriosam perferendis cupiditate, magnam fugit voluptates nostrum et ea sed reiciendis quidem error amet assumenda id omnis. Quisquam ducimus, consectetur reiciendis nulla in distinctio fuga quidem. Incidunt animi ex nesciunt harum eaque quis laborum iure, dignissimos autem similique consequuntur ea saepe et laboriosam repellat quas id, totam veniam facere aliquid. Vero soluta alias rerum consequuntur quae aliquid voluptatum porro ipsam, delectus facere, placeat debitis molestiae.</p>
            </div>
          </div>
        {Array.from({ length: imageCount }).map((_, index) => (
          <div key={index} style={{ margin: '10px', padding: '10px' }} className='carousel'>
            <img
              src={`https://placehold.co/300x400?text=Slide+${index + 1}`}
              alt={`Slider ${index + 1}`}
              className='carousel__img'/>
            <div className='carousel__info'>
              <h1 className='carousel__title'>Example Title Book</h1>
              <p className='carousel__des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, in?</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
