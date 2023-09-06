/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { CrossBtn } from "../../assets/style/imgs/icons/icons";
import { ImageICons } from "../../assets/style/imgAdmin/IconAdmin";

function LocatsionModal() {
  return (
    <div className="  w-[750px]">
      <Link className="flex justify-end" to="/">
        <CrossBtn />
      </Link>
      <div className="flex justify-between gap-5 p-5">
        <div className="">
          <h3 className="mb-2 text-[18px] font-semibold">Tahrirlash</h3>
          <span className="flex  h-[230px] w-[230px] items-center justify-center  rounded bg-[#013d4d2c]">
            <ImageICons />
          </span>
        </div>
        <div>
          <form>
            <label className="mt-7 block" htmlFor="Manzil">
              Manzil
            </label>
            <input
              className="mt-2 h-[40px] w-[220px] rounded border pl-3"
              type="text"
              id="Manzil"
            />
            <label className="mt-4 block" htmlFor="Location">
              Location
            </label>
            <input
              className="mt-2 h-[40px] w-[220px] rounded border pl-3"
              type="text"
              id="Location"
            />
            <div className="mt-4 flex items-center justify-between">
              <p>Holati</p>
              <div className="   flex h-[15px] w-[32px] justify-end rounded-[50px] bg-green-200 p-[1px]">
                <span className="h-[13px]  w-[13px] rounded-[50px] bg-[#12AF18]"></span>
              </div>
            </div>
          </form>
        </div>
        <div className="mt-7">
          <form>
            <label className=" block" htmlFor="Matn">
              Matn
            </label>
            <textarea
              className="mt-2 h-[127px] w-[220px] rounded border p-3"
              id="Matn"
            ></textarea>
          </form>
          <button className="mt-8 h-[45px] w-[220px] rounded bg-[#01384D] text-white">
            Qo'shish
          </button>
        </div>
      </div>
    </div>
  );
}

export default LocatsionModal