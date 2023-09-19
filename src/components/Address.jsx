import { useFetch } from "../hook/useFetch";
import { Img } from "../assets/style/images/Img";
import Homeabout from "../assets/style/images/home-about.png";
import { Link } from "react-router-dom";

function Address() {
  const urlAddress = "http://localhost:1212/api/address";
  const { data: address } = useFetch(urlAddress);
  console.log(address);
  return (
    <div className="container">
      <div className="home-about mt-10  justify-center gap-48" id="address">
        <h1 className="manzillarimiz ml-12">Manzillarimiz</h1>
        {address &&
          address.map((item) => (
            <div
              className="adress-is flex items-center justify-around"
              key={item.id}
            >
              <div className="adres-top">
                <h3>{item && item.location}</h3>
                <p>{item && item.destination}</p>
                <a
                  href={item ?? item.geolocation}
                  className="adres-location mt-4 flex  items-center justify-center gap-2 rounded border border-slate-300 bg-sky-50 px-[50px] py-[10px] transition hover:bg-sky-700"
                >
                  <div className="adres-location cursor-pointer ">
                    <div className="flex justify-center ">
                      <Img /> <span>Geolokatsiya</span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="adres-img">
                <img
                  src={Homeabout}
                  alt="addrss"
                  className="h-[230px] w-[420px]"
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Address;
