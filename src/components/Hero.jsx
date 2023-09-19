import { ArrowRight } from "../assets/style/imgs/icons/icons";
import bed from "../assets/style/imgs/bed.png";
import "./_Response.scss";
import "./_Header.scss";

import Aos from "aos";
import "aos/dist/aos.css";

import { useTypewriter, Cursor } from "react-simple-typewriter";

import React, { useEffect, useState } from "react";

function Hero() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="w-full overflow-auto">
      <div className="flex">
        <div className="hero container flex  w-full items-center">
          <div className="hero__left">
            <span className="hero__title md:text-5xl">
              Kechalari sokin <br /> dam oling
            </span>
            <div className="hero__right-two">
              <img src={bed} alt="bed" />
            </div>
            <a href="#katalog" className="flex-categ">
              <div className="categ__btn ">
                <div>
                  <ArrowRight />
                </div>
                <span className=" ml-7 ">Kategoriyalar</span>
              </div>
            </a>
            <div className=" flex-line ">
              <div className="line"></div>
            </div>
          </div>
          <div className="hero__right">
            <img className="mr-3" src={bed} alt="bed" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
