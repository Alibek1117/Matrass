/* eslint-disable no-unused-vars */
import {  Iconhome,
  Iconman,
  Iconfilter,
  Iconkorzina,
  Icontexno,
  Iconlocation,}
  from '../assets/style/imgAdmin/IconAdmin'
import React from 'react'

function AdminBtn() {
  return (
    <div className="h-[1000%] w-[220px] bg-[#01384D] text-white  ">
      <button className="flex ju h-[60px] w-[100%] border-spacing-0 bg-[#01384D] p-3">
        <Iconhome/>
        Buyurtmalar
      </button>
      <button className="btn h-[60px] w-[100%] border-spacing-0 bg-[#01384D] p-3 ">
        Сustomers
      </button>
      <button className="btn h-[60px] w-[100%] border-spacing-0 bg-[#01384D] p-3 ">
        Toifalar
      </button>
      <button className="btn h-[60px] w-[100%] border-spacing-0 bg-[#01384D] p-3 ">
        Mahsulotlar
      </button>
      <button className="btn h-[60px] w-[100%] border-spacing-0 bg-[#01384D] p-3">
        Texnologiyalar
      </button>
      <button className="btn h-[60px] w-[100%] border-spacing-0 bg-[#01384D] p-3 ">
        Manzil
      </button>
    </div>
  );
}

export default AdminBtn