/* eslint-disable react/no-unescaped-entities */
import Memoriform from "../assets/style/imgNurjon/Memoriform.jpg"
import Lateks from "../assets/style/imgNurjon/lateks.jpg"
import Prujina from "../assets/style/imgNurjon/prujina.jpg"
import Cloud from "../assets/style/imgNurjon/Cloud.png"
import Cloud2 from "../assets/style/imgNurjon/Cloud2.png"
import Card from "../assets/style/imgNurjon/Card.png"
import Card2 from "../assets/style/imgNurjon/Card2.png"
import Card3 from "../assets/style/imgNurjon/Card3.png"
import "../index.css"

import Homeabout from "../assets/style/imgNurjon/home-about.png"
import Footer from "./Footer"
import { Img } from "../assets/style/imgNurjon/Img"

const Hometwo = () => {
  return (
      <>
     
    <div>
      <div className="container ">
            <div className="home-card">
                  <h1 className="home-card-title">Ishlab chiqarish texnologiyalari</h1>
                  <div className="home-boxs">
                        <div className="home-box">
                              <h1>Memoriform</h1>
                              <img src={Memoriform} alt="" />
                              <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>

                        </div>
                        <div className="home-box">
                              <h1>Tabiiy lateks</h1>
                              <img src={Lateks} alt="" />
                              <p>Aliquam euismod ornare justo, sed faucibus eu. Sed amet tellus netus quis bibendum. Euismod diam eu sem tristique aenean rhoncus.</p>

                        </div>
                        <div className="home-box">
                              <h1>Mustaqil prujina</h1>
                              <img src={Prujina} alt="" />
                              <p>Enim urna consequat, justo, cras tincidunt imperdiet orci sodales. Dui purus feugiat morbi quam orci, vel. Elementum tincidunt blandit ultricies venenatis rhoncus.</p>

                        </div>
                  </div>
            </div>
            <div className="hometwo-hero">
                  <div className="w-[55%] mt-4">
                        <h1>Dream Cloud <br /> kompaniyasi haqida</h1>
                        <p>Penatibus viverra gravida rhoncus in. At turpis morbi ante tortor a est. Habitant adipiscing ut sed pulvinar tellus, ut urna, fermentum:</p>
                        <ul className="home-two-ul1">
                              <li>Penatibus viverra gravida rhoncus in.</li>
                              <li>Dolor integer in interdum viverra risus dolor enim.</li>
                              <li>Turpis senectus eu, eget aenean nulla pellentesque sed ut tempor.</li>
                        </ul>
                  </div>
                  <div>
                        <img src={Cloud} alt="" />
                  </div>
            </div>
            <div className="hometwo-hero mt-16">
                  <div>
                        <img src={Cloud2} alt="" />
                  </div>
                  <div className="w-[45%]  mt-6">
                        <p>Libero erat praesent ullamcorper eget tortor sed et. Nec id lobortis gravida vitae. Scelerisque id fusce vitae ut. Integer sed vulputate sed nec. Arcu id mattis erat et id. </p>
                        <ul className="home-two-ul ">
                              <li>Id risus phasellus laoreet eget. A nec pulvinar.</li>
                              <li>Eu justo, tincidunt fringilla diam nulla.</li>
                              <li>Amet, nullam cras lacus, fermentum leo tellus sagittis.</li>
                              <li>Facilisi mauris condimentum sagittis odio rhoncus semper.</li>
                        </ul>
                        <span>Ac tortor volutpat pellentesque mauris nisi, praesent. Et tempus accumsan est elementum feugiat arcu mauris tincidunt. Eget faucibus pharetra et luctus eget ut fames. A cursus elementum egestas eu scelerisque id.</span>
                  </div>
            </div>
            <div className="home-cards">
                  <h1 className="home-cards-title my-16">Nega bizni tanlashadi</h1>
                  <div className="home-cardss">
                        <div className="home-two-card rounded">
                              <img src={Card} alt="" />
                              <h1>Yetkazib Berish</h1>
                              <p>Toshkent bo'ylab bepul o'lchov <br /> va etkazib berish</p>
                        </div>
                        <div className="home-two-card">
                              <img src={Card2} alt="" />
                              <h1>Qo'llab quvvatlash</h1>
                              <p>TBizning qo'llab-quvvatlash xizmati sizga har qanday savolda yordam beradi va menejerlarning </p>
                              <a className="input-tel" >+998 97 144-24-42 </a>
                        </div>
                        <div className="home-two-card">
                              <img src={Card3} alt="" />
                              <h1>Kafolat</h1>
                              <p>Biz matraslarimiz uchun 8 yilgacha kafolat beramiz. Agar matras kamida 25 mm qisqartirilsa.</p>
                        </div>
                  </div>
            </div>

            <div className="home-about flex justify-center gap-56 mt-10">
                  <div>
                        <h1>Manzilimiz</h1>
                        <h3>Toshkent, Parkent ko'chasi, 176-uy</h3>
                        <p>Mo’ljal: Qoraqamish 2/1, Tursunxodjayeva ro’parasi, Milliy <br /> bog’ metro bekati.</p>
                        <button className=" flex items-center justify-center gap-2">
                              <Img /> <span>Geolokatsiya</span>
                        </button>
                  </div>
                  <div>
                        <img src={Homeabout} alt="" />
                  </div>
            </div>

      </div>
      <Footer />
    </div>
    </>
  )
}

export default Hometwo