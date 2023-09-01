import React from 'react'
import { ArrowRight } from '../assets/style/imgs/icons/icons';
import bed from "../assets/style/imgs/bed.png";
// import AwesomeSlider from "react-awesome-slider";
// import AwsSliderStyles from "react-awesome-slider/src/styles.scss";


function Hero() {
// const slider = (
// <AwesomeSlider cssModule={AwsSliderStyles}>
//  <div data-src="/path/to/image-0.png" />
//  <div data-src="/path/to/image-1.png" />
//  <div data-src="/path/to/image-2.jpg" />
// </AwesomeSlider>)
  return (
    <>
    
      <div className="hero container  flex items-center">
        <div className="hero__left">
          <div className="hero__title">Kechalari sokin dam oling</div>
          <div className="categ__btn">
            <span>Kategoriyalar</span>
            <ArrowRight />
          </div>
          <div className="line">
            <div className="span"></div>
          </div>
        </div>
        <div className="hero__right">
          <img src={bed} alt="bed" />
        </div>
      </div>
      
    </>
  );
}

export default Hero