import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Rating} from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "./Gallery.css";
// import reicon from "../../../public/animation_ll37ry8x.json";
// import {Player} from "@lottiefiles/react-lottie-player";
// import {Slide} from "react-awesome-reveal";
const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    fetch("/gallery.json")
      .then(res => res.json())
      .then(data => {
        setGalleryData(data);
      })
      .catch(error => console.log(error));
  }, []);
  function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
      <div
        className={className}
        style={{...style, background: "teal", right: "10px"}}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const {className, style, onClick} = props;

    return (
      <div
        className={className}
        style={{...style, background: "teal", left: "2px", zIndex: 10}}
        onClick={onClick}
      />
    );
  }
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    centerMode: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    // <div className="h-[500px] flex items-center justify-center bg-white">
    <div className="md:max-w-6xl w-full  mx-auto grid md:grid-cols-5 grid-cols-1 my-20 rounded-lg">
      <div className="mx-auto  md:w-[90%] w-full overflow-hidden col-span-5">
        <Slider {...settings}>
          {galleryData.map((msg, index) => (
            <div
              key={index}
              className="overflow-hidden  w-[90%] cursor-pointer  "
            >
              <div className="project h-full">
                <figure className=" mx-10">
                  <img
                    src={msg.image}
                    className="object-cover shadow-lg shadow-slate-800 m-0 h-[300px] w-full"
                    alt={msg.name}
                  />
                  <Rating
                    style={{maxWidth: 200}}
                    value={msg.rating}
                    readOnly
                    className="flex-grow-1 my-2 mx-auto"
                  />
                </figure>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* <div className="md:col-span-2 bg-rose-300  w-full flex  flex-col items-start h-full justify-start rounded-lg ">
        <div className="grid grid-cols-3 card p-8 gap-4">
          {galleryData.map(msg => (
            <img
              src={msg.image}
              className=" w-60 h-40  border-stone-200 border-2"
            ></img>
          ))}
        </div>
      
      </div> */}
    </div>
  );
};

export default Gallery;
