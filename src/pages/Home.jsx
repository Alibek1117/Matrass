import "./_Home.scss";

import Header from "../components/Header";
import OurProducts from "../components/OurProducts";
import AksiyaProducts from "../components/AksiyaProducts";
// import ZoomModal from "../components/modals/ZoomModal";
import Statistics from "../components/Statistics";
import Footer from "../components/Footer";
import Technologies from "../components/Technologies";
import AboutUs from "../components/AboutUs";
import Address from "../components/Address";
import Hero from "../components/Hero";
// import Zakaz from "../components/modals/Zakaz";
// import Hometwo from "../components/Hometwo";

function Home() {
  
  return (
    <div>
      <section className="hero__full">
        <Header />
        <Hero/>
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
      {/* <Hometwo /> */}
      <div id="aloqa">
        <Footer />
      </div>
      {/* <Zakaz /> */}
    </div>

  );
}

export default Home;
