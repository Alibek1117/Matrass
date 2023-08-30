import "./_Home.scss";
import bed from "../assets/style/imgs/bed.png";
import Header from "../components/Header";
import { ArrowRight } from "../assets/style/imgs/icons/icons";
import OurProducts from "../components/OurProducts";
import AksiyaProducts from "../components/AksiyaProducts";

function Home() {
  return (
    <div>
      <section className="hero__full">
        <Header />
        <div className="hero container flex items-center">
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
      </section>
      <section className="statistics">
        <div className="stat__card">
          <div className="stat__number">7</div>
          <p className="number__subtitle">yillik tajriba</p>
        </div>
        <div className="stat__card">
          <div className="stat__number">10k+</div>
          <p className="number__subtitle">mamnun mijozlar</p>
        </div>
        <div className="stat__card">
          <div className="stat__number">10</div>
          <p className="number__subtitle">yillik kafolat</p>
        </div>
        <div className="stat__card">
          <div className="stat__number">3</div>
          <p className="number__subtitle">kunda yetkazish</p>
        </div>
      </section>
      <OurProducts/>
      <AksiyaProducts/>
    </div>
  );
}

export default Home;
