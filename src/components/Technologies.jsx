/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useFetch } from '../hook/useFetch';
import { useEffect } from 'react';

import Aos from "aos";
import "aos/dist/aos.css";

function Technologies() {
    const url = "http://localhost:1212/api/technology";
    const { data: tech, loader, error } = useFetch(url);
    // console.log(tech);
        useEffect(() => {
          Aos.init();
        }, []);

  return (
    <div className="container">
      <div className="home-card">
        <h1 className="home-card-title">Ishlab chiqarish texnologiyalari</h1>
        <div className="home-boxs">
          {tech &&
            tech.map((item) => (
              <div data-aos="flip-up" className="home-box" key={item.id}>
                <div>
                  <h1>{item.name}</h1>
                </div>
                {/* <img src={Memoriform} alt="" /> */}
                <div className="iframe overflow-hidden rounded-md">
                  <iframe
                    width="407"
                    height="300"
                    src={item.link}
                    title="YouTube video player"
                    // eslint-disable-next-line react/no-unknown-property
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <div>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          {/* <div className="home-box">
                <h1>Memoriform</h1>
                <img src={Memoriform} alt="" />
                <iframe
                  width="407"
                  height="300"
                  src="https://www.youtube.com/embed/dDIuu6otnQU?si=0N6tiuUxlaEmeWA2"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <p>
                  Lectus pellentesque senectus elit donec massa ipsum ultricies
                  dui. Bibendum et enim fringilla tincidunt ligula non,
                  condimentum nunc.
                </p>
              </div>
              <div className="home-box">
                <h1>Tabiiy lateks</h1>
                <img src={Lateks} alt="" />
                <p>
                  Aliquam euismod ornare justo, sed faucibus eu. Sed amet tellus
                  netus quis bibendum. Euismod diam eu sem tristique aenean
                  rhoncus.
                </p>
              </div>
              <div className="home-box">
                <h1>Mustaqil prujina</h1>
                <img src={Prujina} alt="" />
                <p>
                  Enim urna consequat, justo, cras tincidunt imperdiet orci
                  sodales. Dui purus feugiat morbi quam orci, vel. Elementum
                  tincidunt blandit ultricies venenatis rhoncus.
                </p>
              </div> */}
        </div>
      </div>
    </div>
  );
}

export default Technologies