/* eslint-disable no-unused-vars */

import { NavLink } from 'react-router-dom';
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
      <NavLink to="Buyurtmalar">
        <button className=" flex h-[60px]  w-[100%] border-spacing-0 scale-100 items-center gap-2 bg-[#01384D] p-3 pl-10 hover:bg-[#EABF9F]">
          <Iconhome />
          Buyurtmalar
        </button>
      </NavLink>
      <NavLink to="Customers">
        <button className="flex  h-[60px] w-[100%] border-spacing-0 scale-100 items-center gap-2 bg-[#01384D] p-3 pl-10  hover:bg-[#EABF9F] ">
          <IconMan />
          Сustomers
        </button>
      </NavLink>
      <NavLink to="Toifalar">
        <button className="flex h-[60px] w-[100%] border-spacing-0 scale-100 items-center gap-2 bg-[#01384D] p-3 pl-10  hover:bg-[#EABF9F] ">
          <Iconfilter />
          Toifalar
        </button>
      </NavLink>
      <NavLink to="Mahsulotlar">
        <button className="flex h-[60px] w-[100%] border-spacing-0 scale-100  items-center gap-2 bg-[#01384D] p-3 pl-10 hover:bg-[#EABF9F]  ">
          <Iconkorzina />
          Mahsulotlar
        </button>
      </NavLink>
      <NavLink to="Texnology">
        <button className="flex h-[60px] w-[100%] border-spacing-0 scale-100 items-center gap-2 bg-[#01384D] p-3 pl-10 hover:bg-[#EABF9F] ">
          <Icontexno />
          Texnologiyalar
        </button>
      </NavLink>
      <NavLink to="LOcation">
        <button className="flex  h-[60px] w-[100%] border-spacing-0 scale-100 items-center gap-2 bg-[#01384D] p-3  pl-10 hover:bg-[#EABF9F] ">
          <Iconlocation />
          Manzil
        </button>
      </NavLink>
    </div>
  );
}

export default AdminBtn