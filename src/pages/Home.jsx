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
<<<<<<< HEAD
// import { useDispatch, useSelector } from "react-redux";
// import { getToken } from "../slice/token";
// import { loginAdminStart } from "../slice/auth";
=======
// import Zakaz from "../components/modals/Zakaz";
>>>>>>> 11a9e73292543a776c16f82d202a5bfbe0891cdf
// import Hometwo from "../components/Hometwo";

function Home() {
  // const {isLoading} =  useSelector(state => state.auth)
  // const {token} =  useSelector(state => state.token)
  // const dispatch = useDispatch()
  // console.log(token, dispatch(getToken()));
  // console.log(isLoading, dispatch(loginAdminStart()));
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
<<<<<<< HEAD


=======
      {/* <Zakaz /> */}
>>>>>>> 11a9e73292543a776c16f82d202a5bfbe0891cdf
    </div>

  );





}

export default Home;
