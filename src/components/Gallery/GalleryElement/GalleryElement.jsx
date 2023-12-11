import React from "react";
import Slider from "react-slick";
import './GalleryElement.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className + " sampleNextArrow_Gallery"}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,
            backgroundColor: "black",
            height: "50px",
            width: "50px" }}
      onClick={onClick}
    />
  );
}


const GalleryElement = props => {

    let i = 0;
    const settings = {
        customPaging: function(i) {
            return (
              <a href={`#itemN${i}`}className="smallImages">
                <img src={`http://localhost/essedis/upload/gallery/galleryItems/${props.galleryItemID}/${props.galleryItemData[i++]}`} alt="sliderGallery" />
              </a>
            );
          },
        dots: true,
        infinite: false,
        fade: true,
        slidesToShow: 1,
        dotsClass: "slick-dots slick-thumb",
        speed: 500,
        slidesToScroll: 1,
        adaptiveHeight: true,
        // nextArrow: <SampleNextArrow className="sampleNextArrow_Gallery"/>,
        // prevArrow: <SamplePrevArrow className="sampleNextArrow_Gallery"/>
    };

    return (
        <Slider {...settings}>
            {props.galleryItemData.map(slider => {
                return (<div key={i++} className="bigImages"><img src={`http://localhost/essedis/upload/gallery/galleryItems/${props.galleryItemID}/${slider}`} alt="234234" /></div>)
            })}
        </Slider>
    )
}

export default GalleryElement