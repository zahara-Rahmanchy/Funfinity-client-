import React from "react";
import Marquee from "react-fast-marquee";

const SalesAdvert = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 text-3xl font-bold bg-cyan-200 p-5 h-[150px] flex justify-center">
      <Marquee speed={100} pauseOnHover={true}>
        <p className="text-3xl font-bold px-3 text-blue-500">
          Unbeatable prices on board games and puzzles - starting from just
          $9.99!
        </p>
        <p className="text-red-400">
          Special discounts and bundle offers available - save up to 50% on
          select board games and puzzles!"
        </p>
        <p className="">
          Buy one, get one free on all puzzle sets - limited time offer!"
        </p>

        <p>Enjoy free shipping on all orders over $25 - no code required!"</p>
        <p className="text-blue-500">
          Save 20% off your first purchase with our exclusive new customer
          offer!"
        </p>
        <p>
          Join our loyalty program and earn points on every purchase - redeem
          for discounts and exclusive rewards!"
        </p>

        <p className="text-yellow-600">
          Subscribe to our newsletter and receive a 10% discount code
          instantly!"
        </p>
        <p className="text-pink-400">
          Follow us on social media for daily deals and flash sales on board
          games and puzzles!
        </p>
      </Marquee>
    </div>
  );
};

export default SalesAdvert;
