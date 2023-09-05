import { Link } from "react-router-dom";
import { CrossBtn } from "../../assets/style/imgs/icons/icons";

/* eslint-disable react/no-unescaped-entities */
function TexnoloModal() {
  return (
    <div className=" w-[500px]">
      <div className="relative">
        <Link className="absolute right-0 top-0"  to="/">
          <CrossBtn />
        </Link>
      </div>
      <div>
        <h2 className="mb-2 text-[18px] font-semibold">Qo'shish</h2>
        <div>
          <form className="grid w-[500px] grid-cols-2">
            <div>
              <label className="disp mt-4 block" htmlFor="Nomi">
                Nomi
              </label>
              <input
                className="mt-2 h-[40px] w-[220px] rounded border pl-3"
                type="text"
                placeholder="masalan:"
                id="Nomi"
              />
              <label className="mt-4 block" htmlFor="Nomlari">
                Nomi
              </label>
              <input
                className="mt-2 h-[40px] w-[220px] rounded border pl-3"
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
                Rasm
              </label>
              <input
                className="mt-2 h-[40px] w-[220px] rounded border pl-3"
                type="text"
                id="Rasm"
                placeholder=""
              />
              <label className="mt-4 block" htmlFor="Video">
                Video
              </label>
              <input
                className="mt-2 h-[40px] w-[220px] rounded border pl-3"
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

export default TexnoloModal