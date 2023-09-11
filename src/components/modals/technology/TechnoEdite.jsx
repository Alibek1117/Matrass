import { Link } from "react-router-dom";
import { CrossBtn } from "../../../assets/style/imgs/icons/icons";
import { useRef } from "react";

/* eslint-disable react/no-unescaped-entities */
function TechnoEdite({ setOpenTechEdite, setTechEdite, idEdite }) {
  const name = useRef();
  const thumbnail = useRef();
  const link = useRef();
  const description = useRef();

  const handlePost = (e) => {
    e.preventDefault();
      setOpenTechEdite(false);
    let obj = {
      name: name.current.value,
      thumbnail: thumbnail.current.value,
      link: link.current.value,
      description: description.current.value,
      isActive: true,
    };

    fetch(`http://localhost:1212/admin/technology/${idEdite}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc1MzU2MTUwfQ.TSJs3Yomp3woiYfoUUwK2azBR0tBBE-Rwtaco33pfP0",
        //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkzNzQzNDU0fQ.sFu4MYKeNEy2Q7SufqeoX4yqN4G-G8GfWVEwUGwDOGo",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => setTechEdite(data));
  };

  return (
    <div className="  fixed left-[30%] top-[140px]  z-10 w-[580px] bg-white p-10 shadow-2xl shadow-black">
      <div>
        <div
          className="absolute right-0 top-0"
          onClick={() => setOpenTechEdite(false)}
        >
          <CrossBtn />
        </div>
      </div>
      <div>
        <h2 className="mb-2 text-[18px] font-semibold">Qo'shish</h2>
        <div>
          <form className="grid w-[500px] grid-cols-2" onSubmit={handlePost}>
            <div>
              <label className="disp mt-4 block" htmlFor="Nomi">
                Nomi
              </label>
              <input
                className="mt-2 h-[40px] w-[220px] rounded border pl-3"
                ref={name}
                type="text"
                placeholder="masalan:"
                id="Nomi"
              />
              <label className="mt-4 block" htmlFor="Nomlari">
                Matn
              </label>
              <input
                className="mt-2 h-[40px] w-[220px] rounded border pl-3"
                ref={description}
                type="text"
                id="Nomlari"
                placeholder="masalan:"
              />
              <div className="mt-10 flex w-[220px] items-center justify-between">
                <p>Navinla</p>
                <div className=" flex h-[15px] w-[32px] justify-end rounded-[50px] bg-green-200 p-[1px]">
                  <span className="h-[13px]  w-[13px] rounded-[50px] bg-green-700"></span>
                </div>
              </div>
            </div>
            <div>
              <label className="mt-4 block" htmlFor="Rasm">
                Thubnail
              </label>
              <input
                className="mt-2 h-[40px] w-[220px] rounded border pl-3"
                ref={thumbnail}
                type="text"
                id="Rasm"
                placeholder=""
              />
              <label className="mt-4 block" htmlFor="Video">
                Video
              </label>
              <input
                className="mt-2 h-[40px] w-[220px] rounded border pl-3"
                ref={link}
                type="text"
                id="Video"
                placeholder=""
              />
              <button className="mt-8 h-[45px] w-[220px] rounded bg-[#01384D] text-white">
                Qo'shish
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TechnoEdite;
