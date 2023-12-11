import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './News.css';

const settings = {
    dots: true,
    dotsClass: "slick-dots dots",
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
      customPaging: () => (
        <div
          style={{
            width: "40px",
            borderBottom: "5px #F26627 solid",
            borderRadius: "10px",
            marginTop:"15px",
          }}
        >
        </div>
      )
  };

  let i = 0;

const NewsSlider = (props) => {
    return (
        <Slider {...settings}>
              
              {props.images.map( slider => {
                return( <div key={i++} className='sliderImages'><img src={`http://localhost/essedis/upload/news-image/${slider}`} alt={slider} /></div>)
              })} 
        </Slider>
    );
};

export default NewsSlider;