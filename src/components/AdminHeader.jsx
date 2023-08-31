/* eslint-disable no-unused-vars */
import React from 'react'
import { IconAdmin, IconProfile, Iconhome, Iconsearch } from "../assets/style/imgAdmin/IconAdmin";
import { NavLink } from 'react-router-dom';
function AdminHeader() {
  return (
    <div className=" bg-[#01384D]  ">
      <div className="mx-auto w-[1500px]  text-white">
        <nav className="flex items-center justify-between">
            <div className="flex h-[70px] w-[220px] items-center justify-center gap-2  border border-black">
              <IconAdmin />
              <h3 className="font-sail text-[22px] font-normal ">Matrassue</h3>
            </div>

          <form className="relative">
            <span className="absolute right-5 top-3 ">
              <Iconsearch />
            </span>
            <input
              className=" h-[40px]  w-[400px] rounded-[7px] p-2"
              placeholder="User"
              type="text"
            />
          </form>
          <div className=" flex h-[70px] w-[220px] items-center  justify-center gap-2">
            <span className="flex h-[35px] w-[35px] items-center justify-center rounded-[50px] bg-[#fff]">
              <IconProfile />
            </span>
            <h4 className="font-Montserrat pl-[5px] text-[22px] font-semibold">
              Anvar
            </h4>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default AdminHeader;
