import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CardSlider.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const CardSlider = ({ cards }) => {
  const CustomNextArrow = ({ onClick }) => {
    return (
      <div className="custom-arrow custom-next-arrow" onClick={onClick}>
        <i className="fas fa-chevron-right"></i>
      </div>
    );
  };

  const CustomPrevArrow = ({ onClick }) => {
    return (
      <div className="custom-arrow custom-prev-arrow" onClick={onClick}>
        <i className="fas fa-chevron-left"></i>
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 2150,
        settings: {
          slidesToShow: 5, 
        },
      },
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <CustomNextArrow />, 
    prevArrow: <CustomPrevArrow />

  };


  return (
    <div className="card-slider">
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} alt={`Card ${card.id}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
