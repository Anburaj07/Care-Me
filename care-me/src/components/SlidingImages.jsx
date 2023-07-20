import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlidingImages.css";

const SlidingImages = ({image1,image2,image3}) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, // Enable autoplay
      autoplaySpeed: 2000,
    };
  
    return (
      <div className="slider-container">
        <Slider {...settings} justify="center">
          <div>
            <img src={image1} alt="Image1" />
          </div>
          <div>
            <img src={image2} alt="Image2" />
          </div>
          <div>
            <img src={image3} alt="Image3" />
          </div>
        </Slider>
      </div>
    );
  };
  
  export default SlidingImages;