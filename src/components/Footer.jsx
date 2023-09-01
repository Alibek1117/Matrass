import { useState } from "react";
import Vizitka from "../assets/style/imgNurjon/vizitka.png";
import Social from "../assets/style/imgNurjon/social.png";
import { Arrow } from "../assets/style/imgNurjon/Img";
import "../index.css";

const Footer = () => {
  const handleArrowClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="footer mt-14">
        <div className="container mx-auto p-4 px-8 ">
          <div className="footers  ">
            <div>
              <h1>Sizni qiziqtirdimi?</h1>
              <p>Raqamingizni qoldiring, biz sizga yana qo'ng'iroq qilamiz</p>
            </div>
            <div className=" flex items-center gap-5 ">
              <div className=" flex items-center justify-center gap-2 rounded-md bg-white ps-3">
                {" "}
                <span className="tel__code">+998</span>
                <div className=" h-[12px] w-[1px] bg-slate-600"></div>
                <input
                  className="rounded-md p-2  outline-none"
                  type="tel"
                  name="tel"
                  id=""
                  placeholder="Raqamingizni yozing"
                />
              </div>
              <button>Yuborish</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container  ">
        <div className="footer-center flex justify-between  p-4 py-10">
          <div>
            <ul className="flex items-center gap-20">
              <a href="#aboutUs" className="footer__nav">Biz haqimizda</a>
              <a href="#katalog" className="footer__nav">Katalog</a>
              <a href="#aksiya" className="footer__nav">Aksiya</a>
              <a href="#address" className="footer__nav">Manzilimiz</a>
            </ul>
          </div>
          <div>
            <img src={Social} alt="" />
          </div>
        </div>
        <hr />
        <div className="footer-bottom flex justify-between  p-4">
          <div>
            <p className="footer-bottom-title">© 2021 Dream Cloud. Barcha huquqlar himoyalangan.</p>
          </div>
          <div>
            <button className="Arrow" onClick={handleArrowClick}>
              <Arrow />
            </button>
          </div>
          <div>
            <img src={Vizitka} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
