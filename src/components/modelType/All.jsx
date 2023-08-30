import React from 'react'
import { Zoom } from '../../assets/style/imgs/icons/icons';
// import './All.scss'
import matrasImg from '../../assets/style/imgs/matras.png'

function All() {
  return (
    <div className="product__card p-8">
      <div className="card__left w-[45%]">
        <div className="left__top flex items-center">
          <span className="type">YANGI MAHSULOT</span>
          <div className="zoom rounded-full bg-[#D9E1E7]  p-3 ">
            <Zoom />
          </div>
        </div>
        <img className="mt-16" src={matrasImg} alt="matras" />
      </div>
      <div className="card__right">
        <h2 className="card__title">Ortopedik Eko matras</h2>
        <div className="product__info">
          <div className="info__card">
            <p>Yuklama</p>
            <h3 className="info__number">
              150 <span>kg</span>
            </h3>
          </div>
          <div className="info__card">
            <p>Kafolat</p>
            <h3 className="info__number">
              3 <span>yil</span>
            </h3>
          </div>
          <div className="info__card">
            <p>O'lchami</p>
            <h3 className="info__number">
              200x120x40 <span></span>
            </h3>
          </div>
          <div className="info__card">
            <p>Kafolat</p>
            <h3 className="info__number">
              3 <span>yil</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default All