import "./_Home.scss";
import bed from "../assets/style/imgs/bed.png";
import Header from "../components/Header";
import { ArrowRight } from "../assets/style/imgs/icons/icons";
import OurProducts from "../components/OurProducts";
import AksiyaProducts from "../components/AksiyaProducts";
// import ZoomModal from "../components/modals/ZoomModal";
import Hometwo from "../components/Hometwo";
import { useFetch } from "../hook/useFetch";
import Statistics from "../components/Statistics";
import Footer from "../components/Footer";
import Technologies from "../components/Technologies";
import AboutUs from "../components/AboutUs";
import Address from "../components/Address";

function Home() {
  
  return (
    <div>
      <section className="hero__full">
        <Header />
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
      </section>
      <Statistics />
      {/* <ZoomModal/> */}
      <div id="katalog">
        <OurProducts />
      </div>
      <div id="aksiya">
        <AksiyaProducts />
      </div>
      <Technologies />
      <div id="aboutUs">
        <AboutUs />
      </div>
      <div id="address">
        <Address />
      </div>
      <Hometwo />
      <div id="aloqa">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
