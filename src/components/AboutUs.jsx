/* eslint-disable react/no-unescaped-entities */
import Cloud from "../assets/style/imgNurjon/Cloud.png";
import Cloud2 from "../assets/style/imgNurjon/Cloud2.png";
import Card from "../assets/style/imgNurjon/Card.png";
import Card2 from "../assets/style/imgNurjon/Card2.png";
import Card3 from "../assets/style/imgNurjon/Card3.png";
import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

function AboutUs() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="container">
      <div className="hometwo-hero " id="aboutUs">
        <div className="heroes">
          <div className="home-two-top">
            <div className="hometwo-hero" id="aboutUs">
              <div className="home-two-top flex gap-10">
                <div className="hometwo-hero-top mt-4 w-[45%]">
                  <h1
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                  >
                    Dream Cloud <br className="br" /> kompaniyasi haqida
                  </h1>
                  <p
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                  >
                    Penatibus viverra gravida rhoncus in. At turpis morbi ante
                    tortor a est. Habitant adipiscing ut sed pulvinar tellus, ut
                    urna, fermentum:
                  </p>
                  <ul
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    className="home-two-ul"
                  >
                    <li>Penatibus viverra gravida rhoncus in.</li>
                    <li>Dolor integer in interdum viverra risus dolor enim.</li>
                    <li>
                      Turpis senectus eu, eget aenean nulla pellentesque sed ut
                      tempor.
                    </li>
                  </ul>
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  className="hero-cloud"
                >
                  <img src={Cloud} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="hometwo-hero mt-16 flex gap-10">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="hero-cloud cloud-hero "
            >
              <img src={Cloud2} alt="" />
            </div>
            <div className="hometwo-hero-top mt-6  w-[45%]">
              <p
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                Libero erat praesent ullamcorper eget tortor sed et. Nec id
                lobortis gravida vitae. Scelerisque id fusce vitae ut. Integer
                sed vulputate sed nec. Arcu id mattis erat et id.{" "}
              </p>
              <ul
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="home-two-ul "
              >
                <li>Id risus phasellus laoreet eget. A nec pulvinar.</li>
                <li>Eu justo, tincidunt fringilla diam nulla.</li>
                <li>Amet, nullam cras lacus, fermentum leo tellus sagittis.</li>
                <li>
                  Facilisi mauris condimentum sagittis odio rhoncus semper.
                </li>
              </ul>
              <span
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="ol__span__title"
              >
                Ac tortor volutpat pellentesque mauris nisi, praesent. Et tempus
                accumsan est elementum feugiat arcu mauris tincidunt. Eget
                faucibus pharetra et luctus eget ut fames. A cursus elementum
                egestas eu scelerisque id.
              </span>
            </div>
            <div className="hero-cloud  hidden">
              <img src={Cloud2} alt="" />
            </div>
          </div>
          <div className="home-cards">
            <h1 className="home-cards-title my-16">Nega bizni tanlashadi</h1>
            <div className="home-cardss">
              <div
                data-aos="fade-right"
                data-aos-duration="3000"
                className="home-two-card rounded"
              >
                <img src={Card} alt="" />
                <h1>Yetkazib Berish</h1>
                <p>
                  Toshkent bo'ylab bepul o'lchov <br /> va etkazib berish
                </p>
              </div>
              <div
                data-aos="fade-down"
                data-aos-duration="3000"
                className="home-two-card"
              >
                <img src={Card2} alt="" />
                <h1>Qo'llab quvvatlash</h1>
                <p>
                  TBizning qo'llab-quvvatlash xizmati sizga har qanday savolda
                  yordam beradi va menejerlarning{" "}
                </p>
                <a className="input-tel">+998 97 144-24-42 </a>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="3000"
                className="home-two-card"
              >
                <img src={Card3} alt="" />
                <h1>Kafolat</h1>
                <p>
                  Biz matraslarimiz uchun 8 yilgacha kafolat beramiz. Agar
                  matras kamida 25 mm qisqartirilsa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
