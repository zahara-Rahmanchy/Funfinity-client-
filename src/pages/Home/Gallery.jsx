// import React from "react";
// import Stars from "./Stars";

// const Gallery = () => {
//   return (
//     <>
//       <div className="max-w-6xl md:mx-auto mx-4   px-6 py-3 ">
//         <div className=" w-full grid grid-cols-4 my-6 gap-5 ">
//           <figure className=" bg-blue-300 p-6">
//             <img
//               src="https://images.unsplash.com/photo-1616574808693-9fce87de38a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80"
//               className=" h-[80%] w-full bg-[#E4F6FE] "
//             />
//             <Stars />
//           </figure>
//           <figure className=" bg-blue-300 p-4">
//             <img src="https://img.freepik.com/free-vector/board-game-set-isometric-style_23-2148696074.jpg?w=740&t=st=1684560750~exp=1684561350~hmac=83eda04b74fc2812c41d2e163ed2eab5abefa606cc4b0b82b0c4ccdd322809b2" />
//             <Stars />
//           </figure>
//           <figure className=" bg-blue-300 p-4">
//             <img src="https://img.freepik.com/free-vector/casino-background-design_1314-200.jpg?w=740&t=st=1684560415~exp=1684561015~hmac=92b2a2b56afb8f920b03c27d53c7e784c2904963524873cfc392b2edca201ad4" />
//             <Stars />
//           </figure>
//           <figure className=" bg-blue-300 p-4">
//             <img src="https://img.freepik.com/free-vector/labyrinth-business-concept-background_23-2147851365.jpg?w=740&t=st=1684561334~exp=1684561934~hmac=11ab54ebee24b19645e7b73c961d836507803f82cc2fd2e90c93e78377e5e935" />
//             <Stars />
//           </figure>

//           <figure className=" bg-blue-300 p-4">
//             <img src="https://img.freepik.com/free-vector/realistic-chess-board-with-3d-black-white-figures-set_1284-13712.jpg?w=740&t=st=1684560515~exp=1684561115~hmac=60f15c73ea31a897d1bb936727bd06577ad89d6a1d4155ba683e03dd658d90b4" />
//             {/* <img src="https://img.freepik.com/free-vector/crossword-english-kids_23-2148783274.jpg?w=900&t=st=1684560618~exp=1684561218~hmac=5e4c54c7d0f250371dd2d49eefafae3ed01a674a3f1a101ecbc9aa8edb5a594f" /> */}
//             <Stars />
//           </figure>

//           <figure className=" bg-blue-300 p-4">
//             <img
//               src="https://img.freepik.com/premium-vector/sudoku-game-vector-set-japanese-puzzle-game_182787-502.jpg?w=740"
//               className=" h-[80%] w-full"
//             />{" "}
//             <Stars />
//           </figure>

//           <figure className=" bg-blue-300 p-4">
//             <img
//               src="https://img.freepik.com/free-vector/business-game-success-competition-board-game-businessman-concept-strategy-idea-teamwork-play_1284-41346.jpg?w=740&t=st=1684561192~exp=1684561792~hmac=fb2359df562abbb4ba11783e175105813c92b323a49af1f63b3658f74e96093b"
//               className=" h-[80%] w-full"
//             />{" "}
//             <Stars />
//           </figure>
//           <figure className=" bg-blue-300 p-4">
//             <img
//               src="https://img.freepik.com/free-photo/alphabet-with-dice-wooden-board_23-2148101542.jpg?w=740&t=st=1684560969~exp=1684561569~hmac=33ba748e019fbed55ccd288af45afe5df9ad2b0e00e35952be3d5102c49a14bd"
//               className=" h-[80%] w-full"
//             />{" "}
//             <Stars />
//           </figure>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Gallery;

import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Rating} from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    // <div className="h-[500px] flex items-center justify-center bg-white">
    <div className="md:max-w-7xl w-full  mx-auto grid md:grid-cols-5 grid-cols-1 my-20 rounded-lg">
      <div className="md:col-span-3 bg-[#F9F9F7] overflow-hidden">
        {/* <Slide direction="right"> */}
        <Slider {...settings}>
          {galleryData.map(msg => (
            <div
              // key={msg._id}
              className=" text-center rounded-lg shadow-md  bg-gradient-to-r from-[#653985] via-base-600  to-[#9363B5]"
              //   style={{backgroundImage: `url(${msg.picture})`, height: "300px"}}
            >
              <div
                className="h-full object-contain mx-10 md:mt-10 m-5 "
                style={{
                  backgroundImage: `url(${msg.image})`,
                  height: "500px",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  padding: "10px 10px 0px 10px",
                }}
              >
                {" "}
                {/* <div className="absolute inset-0 bg-blue-100 bg-opacity-5  z-5"></div> */}
              </div>
              <div className="flex flex-col justify-center items-center  h-full w-full relative ">
                <p className="text-xl md:w-full text-center mx-auto text-white font-semibold z-50 ">
                  {msg.rating}
                  <Rating
                    style={{maxWidth: 200}}
                    value={msg.rating}
                    readOnly
                    className="flex-grow-1 text-center w-full mx-auto mb-2"
                  />
                </p>
              </div>
            </div>
          ))}
        </Slider>
        {/* </Slide> */}
        <div></div>
      </div>
      <div className="md:col-span-2 bg-rose-300  w-full flex  flex-col items-start h-full justify-start rounded-lg ">
        {/* <Slide className="left" duration={2000}> */}
        <div className="grid grid-cols-3 card p-8 gap-4">
          {galleryData.map(msg => (
            <img
              src={msg.image}
              className=" w-60 h-40  border-stone-200 border-2"
            ></img>
          ))}
        </div>
        {/* </Slide> */}
      </div>
    </div>
  );
};

export default Gallery;
