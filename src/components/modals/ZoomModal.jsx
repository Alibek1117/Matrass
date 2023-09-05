/* eslint-disable no-unused-vars */
import React from 'react'
import matrasImg from '../../assets/style/imgs/matras2.png'
import matrasOption1 from '../../assets/style/imgs/matras3.png'
import { Cross } from '../../assets/style/imgs/icons/icons'

function ZoomModal( {setZoom}) {
  return (
    <div className="zoom__back fixed top-0 z-50 h-full w-full bg-slate-600 bg-opacity-[0.8]  ">
      <div className="cross fixed top-0 right-0" onClick={() => setZoom(false)}>
        <Cross />
      </div>
      <div className="zoom_img pt-14 ">
        <img src={matrasImg} alt="img" className="mx-auto" />
        <div className="options mt-6 flex justify-center gap-2">
          <img src={matrasOption1} alt="img" />
          <img src={matrasOption1} alt="img" />
          <img src={matrasOption1} alt="img" />
          <img src={matrasOption1} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default ZoomModal