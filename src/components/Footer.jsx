import Vizitka from "../assets/style/imgNurjon/vizitka.png";
import Social from "../assets/style/imgNurjon/social.png";

/* eslint-disable react/no-unescaped-entities */
const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="container  ">
            <div className="footers">
                  <div className="">
                        <h1>Sizni qiziqtirdimi?</h1>
                        <p>Raqamingizni qoldiring, biz sizga yana qo'ng'iroq qilamiz</p>
                  </div>
                  <div className=" flex items-center ">
                        <div className=" bg-white items-center flex"> <span>+998</span>
                              <div className=" bg-slate-600 w-[1px] h-[12px]"></div>
                              <input className="p-2" type="tel" name="tel" id="" placeholder="Raqamingizni yozing" />

                              </div>
                        <button>Yuborish</button>
                  </div>
            </div>
      </div>

    </div>
            <div className="footer-center">
                  <div>
                        <ul>
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
            <div className="footer-bottom">
                  <div>
                        <p>© 2021 Dream Cloud. Barcha huquqlar himoyalangan.</p>
                  </div>
                  <div>
                        <img src={Vizitka} alt="" />
                  </div>
            </div>
    </>
  )
}

export default Footer