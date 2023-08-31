/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Karzinka, Zoom } from '../../assets/style/imgs/icons/icons';
// import './All.scss'
import matrasImg from '../../assets/style/imgs/matras.png'
import ZoomModal from '../modals/ZoomModal';

function All() {
  return (
    <>
      <div className="product__card flex p-8">
        <div className="card__left w-[45%]">
          <div className="left__top flex items-center">
            <span className="type">YANGI MAHSULOT</span>
            <div className="zoom rounded-full bg-[#D9E1E7]  p-3 ">
              <Zoom />
            </div>
          </div>
          <img className="mt-16" src={matrasImg} alt="matras" />
        </div>
        <div className="card__right w-[55%]">
          <h2 className="card__title ">Ortopedik Eko matras</h2>
          <div className="product__info flex gap-20">
            <div className="info__card">
              <p>Yuklama</p>
              <h3 className="info__number">
                <span className="number">150</span> <sub>kg</sub>
              </h3>
            </div>
            <div className="info__card">
              <p>Kafolat</p>
              <h3 className="info__number">
                <span className="number">3</span> <sub>yil</sub>
              </h3>
            </div>
            <div className="info__card">
              <p>O'lchami</p>
              <h3 className="info__number">
                <span className="number">200x120x40</span> <sub></sub>
              </h3>
            </div>
            <div className="info__card">
              <p>Kafolat</p>
              <h3 className="info__number">
                <span className="number">3</span> <sub>yil</sub>
              </h3>
            </div>
          </div>
          <p className="card__subtitle">
            Penatibus viverra gravida rhoncus in. At turpis morbi ante tortor a
            est. Habitant adipiscing ut sed pulvinar tellus, ut urna, fermentum.
            Porttitor senectus lorem rhoncus facilisi ac dictum varius egestas.
          </p>
          <div className="cost">
            <span className="cost__title">Narxi</span>
            <h2 className="cost__quantity">
              <span className="number">1 699 999</span>{" "}
              <span className="num__title">so'm</span>
            </h2>
          </div>
          <button className="order__btn flex items-center">
            <p className="title">Buyurtma Berish</p>
            <Karzinka />
          </button>
        </div>
      </div>
      <div className="product__card flex p-8">
        <div className="card__left w-[45%]">
          <div className="left__top flex items-center">
            <span className="type">YANGI MAHSULOT</span>
            <span className="aksiya">AKSIYA</span>
            <div className="zoom rounded-full bg-[#D9E1E7]  p-3 ">
              <Zoom />
            </div>
          </div>
          <img className="mt-16" src={matrasImg} alt="matras" />
        </div>
        <div className="card__right w-[55%]">
          <h2 className="card__title ">Ortopedik Eko matras</h2>
          <div className="product__info flex gap-20">
            <div className="info__card">
              <p>Yuklama</p>
              <h3 className="info__number">
                <span className="number">150</span> <sub>kg</sub>
              </h3>
            </div>
            <div className="info__card">
              <p>Kafolat</p>
              <h3 className="info__number">
                <span className="number">3</span> <sub>yil</sub>
              </h3>
            </div>
            <div className="info__card">
              <p>O'lchami</p>
              <h3 className="info__number">
                <span className="number">200x120x40</span> <sub></sub>
              </h3>
            </div>
            <div className="info__card">
              <p>Kafolat</p>
              <h3 className="info__number">
                <span className="number">3</span> <sub>yil</sub>
              </h3>
            </div>
          </div>
          <p className="card__subtitle">
            Penatibus viverra gravida rhoncus in. At turpis morbi ante tortor a
            est. Habitant adipiscing ut sed pulvinar tellus, ut urna, fermentum.
            Porttitor senectus lorem rhoncus facilisi ac dictum varius egestas.
          </p>
          <div className="cost">
            <span className="cost__title">Narxi</span>
            <h2 className="cost__quantity">
              <del className="number__del">1 699 999</del>{" "}
              <del className="num__title__del">so'm</del>
              <span className="number">1 299 999</span>{" "}
              <span className="num__title">so'm</span>
            </h2>
          </div>
          <button className="order__btn flex items-center">
            <p className="title">Buyurtma Berish</p>
            <Karzinka />
          </button>
        </div>
      </div>
      {/* <ZoomModal/> */}
    </>
  );
}

export default All