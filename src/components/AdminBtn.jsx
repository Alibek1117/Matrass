import { NavLink } from "react-router-dom";
import {
  Iconhome,
  IconMan,
  Iconfilter,
  Iconkorzina,
  Icontexno,
  Iconlocation,
} from "../assets/style/imgAdmin/IconAdmin";
import React from "react";
import "./AdminBtn.css";

function AdminBtn() {
  return (
    <div className=" w-[220px]   text-white  ">
      <button className="w-full">
        <NavLink to="buyrtmalar" className="adminbtn">
          <Iconhome />
          Buyurtmalar
        </NavLink>
      </button>
      <button className="w-full">
        <NavLink to="Customers" className="adminbtn">
          <IconMan />
          Сustomers
        </NavLink>
      </button>
      <button className="w-full">
        <NavLink to="Toifalar" className="adminbtn">
          <Iconfilter />
          Toifalar
        </NavLink>
      </button>
      <button className="w-full">
        <NavLink to="Mahsulotlar" className="adminbtn">
          <Iconkorzina />
          Mahsulotlar
        </NavLink>
      </button>
      <button className="w-full">
        <NavLink to="Texnology" className="adminbtn">
          <Icontexno />
          Texnologiyalar
        </NavLink>
      </button>
      <button className="w-full pb-3">
        <NavLink to="Location" className="adminbtn">
          <Iconlocation />
          Manzil
        </NavLink>
      </button>
    </div>
  );
}

export default AdminBtn;
