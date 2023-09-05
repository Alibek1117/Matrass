/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { ImageICons } from '../../assets/style/imgAdmin/IconAdmin';
import { CrossBtn } from '../../assets/style/imgs/icons/icons';
import { Link } from 'react-router-dom';

function MahsulotModal() {
  return (
    <div className="font-Montserrat   absolute  top-0 flex w-[1130px]  justify-evenly bg-white p-6 ">
      <div className="">
        <h3 className="mb-2 text-[18px] font-semibold">Qo'shish</h3>
        <span className="flex  h-[230px] w-[230px] items-center justify-center  rounded bg-[#013d4d2c]">
          <ImageICons />
        </span>
      </div>
      <div className="flex justify-between gap-4">
        <div>
          <form>
            <label className="block pt-8" htmlFor="Toifalar">
              Toifalar
            </label>
            <select
              className="mt-2 h-[40px] w-[220px] rounded border pl-3 "
              name="Toifalar border-none"
              id="Toifalar"
            >
              <option className=" p-5" value="Model C">
                Model C
              </option>
            </select>
            <label className="mt-4 block" htmlFor="Tovarnomi">
              Tovar nomi
            </label>
            <input
              className="mt-2 h-[40px] w-[220px] rounded border pl-3"
              type="text"
              placeholder="masalan: Lux Soft Memory"
              id="Tovarnomi"
            />
            <label className="mt-4 block" htmlFor="Narxi">
              Narxi
            </label>
            <input
              className="mt-2 h-[40px] w-[220px] rounded border pl-3"
              type="text"
              id="Narxi"
              placeholder="masalan: 20 000"
            />
            <label className="mt-4 block" htmlFor="Yuklama">
              Yuklama
            </label>
            <input
              className="mt-2 h-[40px] w-[220px] rounded border pl-3"
              type="text"
              id="Yuklama"
              placeholder="masalan: 200 kg"
            />
          </form>
        </div>
        <div>
          <form>
            <label className="mt-8 block " htmlFor="Razmeri">
              Razmeri
            </label>
            <input
              className="mt-2 h-[40px] w-[220px] rounded border pl-3"
              type="text"
              id="Razmeri"
              placeholder="masalan: 200 x 140 x 40"
            />
            <label
              className="mt-4 block
            "
              htmlFor="Kafolat"
            >
              Kafolat
            </label>
            <input
              className=" mt-2 h-[40px] w-[220px] rounded border pl-3"
              type="text"
              placeholder="masalan: 1 yil"
              id="Kafolat"
            />
            <label
              className="mt-4
            block"
              htmlFor="Sig’m"
            >
              Sig’m
            </label>
            <input
              className="mt-2 h-[40px] w-[220px] rounded border pl-3"
              type="text"
              id="Sig’m"
              placeholder="masalan:2"
            />
            <label className="mt-4 block" htmlFor="Aksiya Narxi">
              Aksiya Narxi
            </label>
            <input
              className="mt-2 h-[40px] w-[220px] rounded border pl-3"
              type="Text"
              id="Aksiya Narxi"
              placeholder="masalan: 1 200 000"
            />
          </form>
        </div>
        <div>
          <form>
            <label className="mt-8 block" htmlFor="Ma'lumot">
              Ma'lumot
            </label>
            <textarea
              className="mt-2 h-[127px] w-[220px] rounded border p-3"
              placeholder="info..."
              id="Ma'lumot"
            ></textarea>
            <div className="mt-4 flex items-center">
              <p>Navinla</p>
              <div className="mx-auto flex h-[15px] w-[32px] items-center rounded-[50px] bg-green-200 p-[1px]">
                <span className="h-[13px]  w-[13px] rounded-[50px] bg-green-700"></span>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <p>Active</p>
              <div className="mx-auto flex h-[15px] w-[32px] items-center rounded-[50px] bg-green-200 p-[1px]">
                <span className="h-[13px]  w-[13px] rounded-[50px] bg-green-700"></span>
              </div>
            </div>
            <button className="mt-[45px] h-[45px] w-[220px] rounded bg-[#01384D] text-white">
              Qo'shish
            </button>
          </form>
        </div>
      </div>
      <div>
        <Link to="/">
          <CrossBtn />
        </Link>
      </div>
    </div>
  );
}

export default MahsulotModal