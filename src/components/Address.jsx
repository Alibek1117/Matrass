import { useFetch } from '../hook/useFetch';
import { Img } from '../assets/style/imgNurjon/Img';
import Homeabout from "../assets/style/imgNurjon/home-about.png";
import { Link } from 'react-router-dom';

function Address() {
     const urlAddress = "http://localhost:1212/api/address";
     const { data: address, loader: loaderr } = useFetch(urlAddress);
     console.log(address);
  return (
    <div className="container">
      <div className="home-about mt-10  justify-center gap-48" id="address">
        <h1 className="manzillarimiz">Manzillarimiz</h1>
        {loaderr && <h2>Loading...</h2>}
        {address &&
          address.map((item) => (
            <div
              className="adress-is flex items-center justify-around"
              key={item.id}
            >
              <div className="adres-top">
                <h3 >{item && item.location}</h3>
                <p >{item && item.destination}</p>
                <a
                  href={item ?? item.geolocation}
                  className="adres-location mt-4 flex items-center justify-center gap-2 rounded border border-slate-700 px-[50px] py-[10px]"
                >
                  <div className="adres-location">
                    <div className="flex justify-center">
                      <Img /> <span>Geolokatsiya</span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="adres-img">
                {/* <img
                  src={Homeabout}
                  alt="addrss"
                  className="h-[230px] w-[420px]"
                /> */}

                {JSON.parse(item.images)?.length > 0 &&
                  JSON.parse(item.images)?.map((image) => {
                    return (
                      <img
                        data-aos="fade-up-left"
                        className="mt-16 rounded-md"
                        src={`http://localhost:1212/address/${image}`}
                        alt='address'
                      />
                    );
                  })}
              </div>
              {/* <img src={item.img} alt="addrss" className="w-[420px] h-[230px]" /> */}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Address