
import { CrossBtn } from "../../../assets/style/imgs/icons/icons";
import { ImageICons } from "../../../assets/style/imgAdmin/IconAdmin";
import { useRef, useState } from "react";


function AddressEdite({ setOpenAddressEdite, idEdite }) {
  const location = useRef();
  const destination = useRef();
  const geolocation = useRef();
  const images = useRef();

  const [img, setImg] = useState("");
  const handleImg = (e) => {
    setImg(e.target.files[0]);
  };

  const handlePost = (e) => {
    e.preventDefault();
    setOpenAddressEdite(false);

    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc1MzU2MTUwfQ.TSJs3Yomp3woiYfoUUwK2azBR0tBBE-Rwtaco33pfP0",
    );

    var formdata = new FormData();
    formdata.append("location", location.current.value);
    formdata.append("destination", destination.current.value);
    formdata.append("geolocation", geolocation.current.value);
    formdata.append("images", img);
    formdata.append("isActive", "true");

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(`http://localhost:1212/admin/address/${idEdite}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="  fixed  left-[25%] top-[140px] z-10 w-[750px] rounded-md bg-white shadow-2xl shadow-black">
      <div
        className="flex justify-end"
        onClick={() => setOpenAddressEdite(false)}
      >
        <CrossBtn />
      </div>
      <div className="flex justify-between gap-5 p-5">
        <form className="flex gap-5" onSubmit={handlePost}>
          <div>
            <h3 className="mb-2 text-[18px] font-semibold">Tahrirlash</h3>
            <input
              onChange={handleImg}
              required
              name="fileInput"
              type="file"
              ref={images}
              placeholder="Image link"
              className="flex  h-[230px] w-[230px] items-center justify-center  rounded bg-[#013d4d2c] text-center"
            />
          </div>
          <div>
            <label className="mt-7 block" htmlFor="Manzil">
              Manzil
            </label>
            <input
              className="mt-2 h-[40px] w-[220px] rounded border pl-3"
              ref={location}
              type="text"
              placeholder="Manzil"
              name="location"
              id="Manzil"
            />
            <label className="mt-4 block" htmlFor="Location">
              Location
            </label>
            <input
              className="mt-2 h-[40px] w-[220px] rounded border pl-3"
              ref={geolocation}
              name="geolocation"
              type="text"
              placeholder="Geolocation link"
              id="Location"
              autoComplete="off"
            />
            <div className="mt-4 flex items-center justify-between">
              <p>Holati</p>
              <div className="   flex h-[15px] w-[32px] justify-end rounded-[50px] bg-green-200 p-[1px]">
                <span className="h-[13px]  w-[13px] rounded-[50px] bg-[#12AF18]"></span>
              </div>
            </div>
          </div>
          <div className="mt-7">
            <label className=" block" htmlFor="Matn">
              Matn
            </label>
            <textarea
              className="mt-2 h-[127px] w-[220px] rounded border p-3"
              ref={destination}
              name="destination"
              placeholder="Mo'ljal"
              id="Matn"
            ></textarea>
            <button className="mt-8 h-[45px] w-[220px] rounded bg-[#01384D] text-white">
              Qo'shish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddressEdite;
