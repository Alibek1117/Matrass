/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';
import { Karzinka, Zoom } from '../assets/style/imgs/icons/icons';
import matrasImg from "../assets/style/imgs/matras.png";
import { useFetch } from '../hook/useFetch';
import Zakaz from './modals/Zakaz';
import ZakazDone from './modals/ZakazDone';
import ZoomModal from './modals/ZoomModal';

import Aos from "aos";
import "aos/dist/aos.css";
import Error from './loader/Error';

function AksiyaProducts() {



  const [zoom, setZoom] = useState(false);
  const [zoomId, setZoomId] = useState();
  const [id, setId] = useState(null);
  const [openZakaz, setOpenZakaz] = useState(false);
  const [openZakazDone, setOpenZakazDone] = useState(false);

   const handleZoom = (id) => {
    setZoomId(id)
    //  console.log(e);
     setZoom(true);
   };

  const handleOrder = (id) => {
    console.log(id);
    setOpenZakaz(true);
    setId(id);
  };

     const url = "http://localhost:1212/api/products";
     const { data, loader, error } = useFetch(url);
     const product = data && data.products;
    //  console.log(product);

    useEffect(()=>{
      Aos.init()
    },[])

  return (
    <>
      <div className="container">
        <div className="products__title">Aksiyadagi mahsulotlar</div>
        {loader && <h2>Loading...</h2>}
        {error && <Error/>}
        {product &&
          product
            .filter((product) => {
              return product.new_cost;
            })
            .map((item) => (
              // item.filter(item =>{return item.new_cost})
              <div className="product__card flex p-8" key={item.id}>
                <div data-aos="zoom-in-right" className="card__left w-[45%]">
                  <div className="left__top flex items-center">
                    {/* <span className="type">YANGI MAHSULOT</span> */}
                    <div>
                      {item.new_cost && <span className="aksiya">AKSIYA</span>}
                    </div>
                    <div
                      className="zoom rounded-full bg-[#D9E1E7]  p-3 "
                      onClick={() => handleZoom(item.id)}
                    >
                      <Zoom />
                    </div>
                  </div>
                  {/* <img
                    className="mt-16 md:justify-center"
                    src={matrasImg}
                    alt="matras"
                  /> */}
                  {JSON.parse(item.product_images)?.length > 0 &&
                    JSON.parse(item.product_images)?.map((image) => {
                      return (
                        <img
                          className="mt-16"
                          src={`http://localhost:1212/products/${image}`}
                        />
                      );
                    })}
                </div>
                <div data-aos="zoom-in-left" className="card__right w-[55%]">
                  <h2 className="card__title ">{item && item.name}</h2>
                  <div className="product__info flex gap-20">
                    <div className="info__card">
                      <p>Yuklama</p>
                      <h3 className="info__number">
                        <span className="number">{item.weight}</span>{" "}
                        <sub>kg</sub>
                      </h3>
                    </div>
                    <div className="info__card">
                      <p>Kafolat</p>
                      <h3 className="info__number">
                        <span className="number">{item.warranty}</span>{" "}
                        <sub>yil</sub>
                      </h3>
                    </div>
                    <div className="info__card">
                      <p>O'lchami</p>
                      <h3 className="info__number">
                        <span className="number">{item.size}</span> <sub></sub>
                      </h3>
                    </div>
                    <div className="info__card">
                      <p>Kafolat</p>
                      <h3 className="info__number">
                        <span className="number">3</span> <sub>yil</sub>
                      </h3>
                    </div>
                  </div>
                  <p className="card__subtitle">{item.body}</p>
                  <div className="cost">
                    <span className="cost__title">Narxi</span>
                    {item.new_cost ? (
                      <h2 className="cost__quantity">
                        <del className="number__del">{item.cost}</del>
                        <del className="num__title__del">so'm</del>
                        <span className="number">{item.new_cost}</span>
                        <span className="num__title">so'm</span>
                      </h2>
                    ) : (
                      <h2 className="cost__quantity">
                        <span className="number">{item.cost}</span>
                        <span className="num__title">so'm</span>
                      </h2>
                    )}
                  </div>
                  <button
                    className="order__btn flex items-center"
                    data-aos="zoom-out-right"
                    onClick={() => handleOrder(item.id)}
                  >
                    <p className="title">Buyurtma Berish</p>
                    <Karzinka />
                  </button>
                </div>
              </div>
            ))}
        {zoom && <ZoomModal setZoom={setZoom} zoomId ={zoomId} product = {product} />}
        {openZakaz && (
          <Zakaz
            setOpenZakaz={setOpenZakaz}
            setOpenZakazDone={setOpenZakazDone}
            id={id}
          />
        )}
        {openZakazDone && <ZakazDone setOpenZakazDone={setOpenZakazDone} />}
      </div>
    </>
  );
}

export default AksiyaProducts