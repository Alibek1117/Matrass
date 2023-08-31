import  { useState } from 'react';
import Vizitka from "../assets/style/imgNurjon/vizitka.png";
import Social from "../assets/style/imgNurjon/social.png";
import { Arrow } from "../assets/style/imgNurjon/Img";
import "../index.css";

const Footer = () => {
  const handleArrowClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
                        <div className=" bg-white rounded-md items-center flex gap-2 justify-center"> <span>+998</span>
                              <div className=" bg-slate-600 w-[1px] h-[12px]"></div>
                              <input className="p-2 rounded-md  outline-none" type="tel" name="tel" id="" placeholder="Raqamingizni yozing" />

                              </div>
                        <button>Yuborish</button>
                  </div>
            </div>
      </div>

    </div>
       
     
        <div className="container  ">
          <div className="footer-center flex justify-center gap-[750px] p-4">
            <div>
              <ul className="flex">
                <li>Biz haqimizda</li>
                <li>Katalog</li>
                <li>Aksiya</li>
                <li>Manzilimiz</li>
              </ul>
            </div>
            <div>
              <img src={Social} alt="" />
            </div>
          </div>
          <hr />
          <div className="footer-bottom flex justify-center gap-72 p-4">
            <div>
              <p>© 2021 Dream Cloud. Barcha huquqlar himoyalangan.</p>
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
}

export default Footer;
