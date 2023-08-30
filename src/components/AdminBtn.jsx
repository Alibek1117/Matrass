/* eslint-disable no-unused-vars */
import {  Iconhome,
  IconMan,
  Iconfilter,
  Iconkorzina,
  Icontexno,
  Iconlocation,}
  from '../assets/style/imgAdmin/IconAdmin'
import React from 'react'

function AdminBtn() {
  return (
    <div className="h-[1000%] w-[220px] bg-[#01384D] text-white  ">
      <button className=" flex h-[60px]  w-[100%] border-spacing-0 scale-100 items-center gap-2 bg-[#01384D] p-3 pl-10 hover:bg-[#EABF9F]">
        <Iconhome />
        Buyurtmalar
      </button>
      <button className="flex  h-[60px] w-[100%] border-spacing-0 scale-100 items-center gap-2 bg-[#01384D] p-3 pl-10  hover:bg-[#EABF9F] ">
        <IconMan />
        Сustomers
      </button>
      <button className="flex h-[60px] w-[100%] border-spacing-0 scale-100 items-center gap-2 bg-[#01384D] p-3 pl-10  hover:bg-[#EABF9F] ">
        <Iconfilter />
        Toifalar
      </button>
      <button className="flex h-[60px] w-[100%] border-spacing-0 scale-100  items-center gap-2 bg-[#01384D] p-3 pl-10 hover:bg-[#EABF9F]  ">
        <Iconkorzina />
        Mahsulotlar
      </button>
      <button className="flex h-[60px] w-[100%] border-spacing-0 scale-100 items-center gap-2 bg-[#01384D] p-3 pl-10 hover:bg-[#EABF9F] ">
        <Icontexno />
        Texnologiyalar
      </button>
      <button className="flex  h-[60px] w-[100%] border-spacing-0 scale-100 items-center gap-2 bg-[#01384D] p-3  pl-10 hover:bg-[#EABF9F] ">
        <Iconlocation />
        Manzil
      </button>
    </div>
  );
}

export default AdminBtn