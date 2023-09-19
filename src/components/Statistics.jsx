import { useFetch } from "../hook/useFetch";
import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import Loader1 from "./loader/Loader1";
import Error from "./loader/Error";
import Loader2 from "./loader/Loader2";

function Statistics() {
  useEffect(() => {
    Aos.init();
  }, []);

  const { data, loader, error } = useFetch(
    "http://localhost:1212/api/statistics",
  );
  // console.log(data);
  return (
    <>
      {loader && <Loader2 />}
      {error && (
        <h1 className="mt-10 flex justify-center">
          Afsuski backendingizdan ma'lumotlar kelmadi!!!
        </h1>
      )}
      {
        <section className="statistics container">
          <div className="stat__card seven">
            <div className="stat__number md:text-xl">
              {data && data.experience}
            </div>
            <p className="number__subtitle">Yillik tajriba</p>
          </div>
          <div className="stat__card">
            <div className="stat__number">{data && data.clients}</div>
            <p className="number__subtitle">Mamnun mijozlar</p>
          </div>
          <div className="stat__card">
            <div className="stat__number">{data && data.warranty}</div>
            <p className="number__subtitle">Yillik kafolat</p>
          </div>
          <div className="stat__card">
            <div className="stat__number">{data && data.delivery}</div>
            <p className="number__subtitle">Kunda yetkazish</p>
          </div>
        </section>
      }
    </>
  );
}

export default Statistics;
