import { useFetch } from '../hook/useFetch';
import {  useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import Loader1 from './loader/Loader1';
import Error from './loader/Error';
import Loader2 from './loader/Loader2';

function Statistics() {

  useEffect(()=>{
    Aos.init()
  },[])

    const { data, loader, error } = useFetch(
      "http://localhost:1212/api/statistics",
    ); 
    // console.log(data);
  return (
    <>
      {loader && <Loader2/>}
      {error && <h2 className='mt-10 flex justify-center'>Something is wrong😰</h2>}
      {
        <section className="statistics container">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="stat__card seven"
          >
            <div className="stat__number md:text-xl">
              {data && data.experience}
            </div>
            <p className="number__subtitle">yillik tajriba</p>
          </div>
          <div
            data-aos="fade-down"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="stat__card"
          >
            <div className="stat__number">{data && data.clients}</div>
            <p className="number__subtitle">mamnun mijozlar</p>
          </div>
          <div
            data-aos="fade-down"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="stat__card"
          >
            <div className="stat__number">{data && data.warranty}</div>
            <p className="number__subtitle">yillik kafolat</p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="stat__card"
          >
            <div className="stat__number">{data && data.delivery}</div>
            <p className="number__subtitle">kunda yetkazish</p>
          </div>
        </section>
      }
    </>
  )
}

export default Statistics