import { ArrowRight } from "../assets/style/imgs/icons/icons";
import bed from "../assets/style/imgs/bed.png";
// import 'bootstrap/dist/css/bootstrap.css';
// import AwesomeSlider from "react-awesome-slider";
// import AwsSliderStyles from "react-awesome-slider/src/styles.scss";
import "./_Response.scss";

// carousel
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './Carousel.css'; // Create this CSS file for styling
// import "bootstrap/dist/css/bootstrap. css";


function Hero() {

  const [data, setData] = useState('')

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // Add more settings as needed
};

  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc1MzU2MTUwfQ.TSJs3Yomp3woiYfoUUwK2azBR0tBBE-Rwtaco33pfP0",
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  // useEffect(()=>{
  //   fetch("http://localhost:1212/admin/carousel", requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => setData(result))
  //     .catch((error) => console.log("error", error));
  //   },[])
  //   console.log(data);
  return (
    <div className="w-full overflow-auto">
      <div className="flex">
        <div className="hero container flex  w-full items-center">
          <div className="hero__left">
            <div className="hero__title md:text-5xl">
              Kechalari sokin dam oling
            </div>
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
