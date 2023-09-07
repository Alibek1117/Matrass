import { useFetch } from '../hook/useFetch';
import { Img } from '../assets/style/imgNurjon/Img';
import Homeabout from "../assets/style/imgNurjon/home-about.png";

function Address() {
     const urlAddress = "http://localhost:1212/api/address";
     const { data: address, loader: loaderr } = useFetch(urlAddress);
    //  console.log(address);
  return (
    <div className='container'>
      <div className="home-about mt-10  justify-center gap-48" id="address">
        <h1 className='manzillarimiz'>Manzillarimiz</h1>
        {loaderr && <h2>Loading...</h2>}
        {address &&
          address.map((item) => (
            <div className="adress-is flex items-center justify-around" key={item.id}>
              <div className='adres-top'>
                <h3>{item.location && item.location}</h3>
                <p>{item.destination && item.destination}</p>
                <a
                  href={item.geolocation && item.geolocation}
                  className="adres-location mt-4 flex items-center rounded justify-center gap-2 border border-slate-700 px-[50px] py-[10px]"
                >
                  <div className='adres-location'>
                    <div className='flex justify-center'>
                  <Img /> <span>Geolokatsiya</span>

                    </div>
                  </div>
                </a>
              </div>
              
              
                <img
                  src={Homeabout}
                  alt="addrss"
                  className="h-[230px] w-[420px]"
                />
                {/* <img src={item.img} alt="addrss" className="w-[420px] h-[230px]" /> */}
              
            </div>
          ))}
      </div>
    </div>
  );
}

export default Address