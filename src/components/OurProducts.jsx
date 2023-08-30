import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function OurProducts() {
  return (
    <section className="our__products">
      <div className="products__title">Bizning mahsulotlar</div>
      <div className="nav__model container">
        <ul className="flex items-center justify-center gap-10">
          <NavLink to="/">
            <li className="model__type">Barchasi</li>
          </NavLink>
          <NavLink to ='modelA+'>
            <li className="model__type">Model A+</li>
          </NavLink>
          <NavLink to = 'modelB+'>
            <li className="model__type">Model B+</li>
          </NavLink>
          <NavLink to = 'modelC'>
            <li className="model__type">Model C</li>
          </NavLink>
          <NavLink to = 'modelC+'>
            <li className="model__type">Model C+</li>
          </NavLink>
          <NavLink to = 'modelD'>
            <li className="model__type">Model D</li>
          </NavLink>
          <NavLink to = 'modelYevro'>
            <li className="model__type">Model Yevro</li>
          </NavLink>
          <NavLink to = 'yangiTovarlar'>
            <li className="model__type">Yangi Tovarlar</li>
          </NavLink>
          <NavLink to = 'modelA'>
            <li className="model__type">Model A</li>
          </NavLink>
        </ul>
      </div>
      <div className="model__subline h-[2px] w-full bg-[#01384D] opacity-[0.3] mb-12"></div>
      <div className="products container">
        <Outlet />
      </div>
    </section>
  );
}

export default OurProducts;
