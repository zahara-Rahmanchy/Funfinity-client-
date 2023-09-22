import React from "react";
import "./NewProduct.css";
import "../../App.css";
const UseSection = () => {
  return (
    <section className=" max-w-6xl mx-auto overflow-hidden">
      <h1
        className=" text-center text-5xl italic text-rose-500 font-semibold my-10"
        id="title"
      >
        Know About Us!
      </h1>
      <div
        className="bg-[#7887D3] lg:h-[300px] md:h-[500px] h-[700px] w-full"
        id="body-text"
        style={{backgroundImage: `url(${"/blob.svg"})`}}
      >
        <div
          id="body-text"
          className="grid lg:grid-cols-2 grid-cols-1 lg:place-items-center md:place-content-start place-items-center  w-full bg-[#7887D3]"
          style={{backgroundImage: `url(${"/blob.svg"})`}}
        >
          <p
            id="body-text"
            className="mx-8 text-white text-lg z-10 md:mt-20 mt-15 pt-8"
          >
            Welcome to our Toy Exchange Hub, a vibrant online marketplace where
            toy enthusiasts and collectors come together to experience the joy
            of trading. Whether you're a dedicated seller looking to showcase
            your treasures or a curious buyer seeking that special toy, our
            platform offers a seamless and exciting journey. Explore a diverse
            array of toys from passionate sellers, negotiate fair deals, and
            indulge in hassle-free transactions. Join us to unlock a world of
            endless play possibilities – where connecting, buying, and selling
            toys is a delightful adventure for everyone.
          </p>
          <div className="flex flex-col z-10 items-start md:mt-0 mt-6">
            <h1
              id="body-text"
              className="lg:text-center text-left md:text-left text-4xl italic text-transparent bg-clip-text bg-gradient-to-r  from-[#fabedf]  to-[#f3fcff] font-bold mt-0 pb-4"
            >
              How does it Work?
            </h1>
            <ul
              id="body-text"
              className="list list-disc text-xl font-semibold text-white  ms-8"
            >
              <li>Add Your Toy</li>
              <li>Join as User/Buyer</li>
              <li>Set The Price</li>
              <li>Buy Toys From Other Users</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default UseSection;
