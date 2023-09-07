/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Vizitka from "../components/Vizitka";
import Social from "../assets/style/imgNurjon/social.png";
import { Arrow } from "../assets/style/imgNurjon/Img";
import vizitkaImg from "../assets/style/imgNurjon/vizitka.png"
import "../index.css";

const Footer = () => {

  const [vizitka, setVizitka] = useState(false)
  const handleVizitka =(e)=>{
    e.preventDefault()
    setVizitka(true)
    setTimeout(() => {
      setVizitka(false)
    }, 3000);
  }
  const handleArrowClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="footer mt-14 pt-8">
        <div className="container mx-auto p-4 px-8 ">
          {!vizitka && (
            <div className="footers ">
              <div className=" ">
                <h1>Sizni qiziqtirdimi?</h1>
                <p>Raqamingizni qoldiring, biz sizga yana qo'ng'iroq qilamiz</p>
              </div>
              <div>
                <form
                onSubmit={ handleVizitka}
                className=" flex items-center gap-5 "
                >
                <div className=" flex items-center justify-center gap-2 rounded-md bg-white pl-[8px]">
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
              </form>
            </div>
              </div>
          )}
          {vizitka && <Vizitka />}
        </div>
      </div>

      <div className="container  ">
        <div className="footer-center flex justify-between  p-4 py-10">
          <div>
            <ul className="flex items-center gap-20">
              <a href="#aboutUs" className="footer__nav">
                Biz haqimizda
              </a>
              <a href="#katalog" className="footer__nav">
                Katalog
              </a>
              <a href="#aksiya" className="footer__nav">
                Aksiya
              </a>
              <a href="#address" className="footer__nav">
                Manzilimiz
              </a>
            </ul>
          </div>
          <div>
            <img src={Social} alt="" />
          </div>
        </div>
        <hr />
        <div className="footer-bottom flex justify-between  p-4">
          <div>
            <p className="footer-bottom-title">
              © 2021 Dream Cloud. Barcha huquqlar himoyalangan.
            </p>
          </div>
          <div>
            <button className="Arrow" onClick={handleArrowClick}>
              <Arrow />
            </button>
          </div>
          <div>
            <img src={vizitkaImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
