import { ArrowRight } from "../assets/style/imgs/icons/icons";
import bed from "../assets/style/imgs/bed.png";
import "./_Response.scss";

import Aos from "aos";
import "aos/dist/aos.css";

// typewriter
import { useTypewriter, Cursor } from "react-simple-typewriter";

import React, { useEffect, useState } from "react";

function Hero() {
  useEffect(() => {
    Aos.init();
  }, []);

  const [title] = useTypewriter({
    words: ["Kechalari ", "Sokin orom oling!"],
    loop: {},
    typeSpeed: 220,
    deleteSpeed: 20,
  });

  return (
    <div className="w-full overflow-auto">
      <div className="flex">
        <div className="hero container flex  w-full items-center">
          <div className="hero__left">
            <span className="hero__title md:text-5xl">{title}</span>
            <span className="hero__title md:text-5xl">
              <Cursor />
            </span>
            <div className="hero__right-two">
              <img src={bed} alt="bed" />
            </div>
            <a href="#katalog" className="flex-categ">
              <div className="categ__btn ">
                <div>
                  <ArrowRight />
                </div>
                <span className=" ml-7">Kategoriyalar</span>
              </div>
            </a>
            <div className=" flex-line ">
              <div className="line ">{/* <div className="span"></div> */}</div>
            </div>
          </div>
          <div className="hero__right">
            <img src={bed} alt="bed" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
