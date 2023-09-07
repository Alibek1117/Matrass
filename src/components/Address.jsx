import { useFetch } from '../hook/useFetch';
import { Img } from '../assets/style/imgNurjon/Img';
import Homeabout from "../assets/style/imgNurjon/home-about.png";
import { Link } from 'react-router-dom';

function Address() {
  function myFunction() {
    location.replace(
      "https://www.google.com/maps/place/Buxoro+Viloyati,+O%60zbekiston/@40.2107507,62.4074503,8z/data=!3m1!4b1!4m6!3m5!1s0x3f50060e65993cd5:0x7d54acc77acd3717!8m2!3d40.2504162!4d63.2032151!16zL20vMDZ0ZnRy?entry=ttu",
    );
  }
     const urlAddress = "http://localhost:1212/api/address";
     const { data: address, loader: loaderr } = useFetch(urlAddress);
    //  console.log(address);
  return (
    <div className="container">
      <div className="home-about mt-10  justify-center gap-48" id="address">
        <h1 className="">Manzillarimiz</h1>
        {loaderr && <h2>Loading...</h2>}
        {address &&
          address.map((item) => (
            <div className="flex items-center justify-around" key={item.id}>
              <div>
                <h3>{item.location && item.location}</h3>
                <p>{item.destination && item.destination}</p>
                <Link
                  onClick={myFunction}
                  href={item.geolocation && item.geolocation}
                  className="mt-4 flex items-center justify-center gap-2 rounded border border-slate-700 px-[50px] py-[10px]"
                >
                  <Img /> <span target="_blank">Geolokatsiya</span>
                </Link>
              </div>
              <div>
                <img
                  src={Homeabout}
                  alt="addrss"
                  className="h-[230px] w-[420px]"
                />
                {/* <img src={item.img} alt="addrss" className="w-[420px] h-[230px]" /> */}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Address