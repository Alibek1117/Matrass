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
import './AdminBtn.css'

function AdminBtn() {
  return (
    <div className="h-[85vh] w-[220px]  text-white  ">
      <NavLink to="Buyurtmalar">
        <button className="adminbtn">
          <Iconhome />
          Buyurtmalar
        </button>
      </NavLink>
      <NavLink to="Customers">
        <button className="adminbtn">
          <IconMan />
          Сustomers
        </button>
      </NavLink>
      <NavLink to="Toifalar">
        <button className="adminbtn">
          <Iconfilter />
          Toifalar
        </button>
      </NavLink>
      <NavLink to="Mahsulotlar">
        <button className="adminbtn">
          <Iconkorzina />
          Mahsulotlar
        </button>
      </NavLink>
      <NavLink to="Texnology">
        <button className="adminbtn">
          <Icontexno />
          Texnologiyalar
        </button>
      </NavLink>
      <NavLink to="LOcation">
        <button className="adminbtn">
          <Iconlocation />
          Manzil
        </button>
      </NavLink>
    </div>
  );
}

export default AdminBtn