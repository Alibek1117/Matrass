import React from 'react'
import { Karzinka, Zoom } from '../assets/style/imgs/icons/icons';
import matrasImg from "../assets/style/imgs/matras.png";
import { useFetch } from '../hook/useFetch';

function AksiyaProducts() {

     const url = "http://localhost:1212/api/products";
     const { data, loader, error } = useFetch(url);
     const product = data && data.products;
     console.log(product);

  return (
    <>
      <div className="container">
        <div className="products__title">Aksiyadagi mahsulotlar</div>
        {loader && <h2>Loading...</h2>}
        {error && <h2>{error}</h2>}
        {product && product.filter(product =>{return product.new_cost})
        .map((item) => (
            // item.filter(item =>{return item.new_cost})
            <div className="product__card flex p-8" key={item.id}>
              <div className="card__left w-[45%]">
                <div className="left__top flex items-center">
                  {/* <span className="type">YANGI MAHSULOT</span> */}
                  {item.new_cost && <span className="aksiya">AKSIYA</span>}
                  <div className="zoom rounded-full bg-[#D9E1E7]  p-3 ">
                    <Zoom />
                  </div>
                </div>
                <img className="mt-16" src={matrasImg} alt="matras" />
              </div>
              <div className="card__right w-[55%]">
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
                <button className="order__btn flex items-center">
                  <p className="title">Buyurtma Berish</p>
                  <Karzinka />
                </button>
              </div>
            </div>
          ))}
        {/* <div className="product__card  flex p-8">
          <div className="card__left w-[45%]">
            <div className="left__top flex items-center">
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
              Penatibus viverra gravida rhoncus in. At turpis morbi ante tortor
              a est. Habitant adipiscing ut sed pulvinar tellus, ut urna,
              fermentum. Porttitor senectus lorem rhoncus facilisi ac dictum
              varius egestas.
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
        </div> */}
        {/* <div className="product__card  flex p-8">
           <div className="card__left w-[45%]">
             <div className="left__top flex items-center">
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
               Penatibus viverra gravida rhoncus in. At turpis morbi ante tortor
               a est. Habitant adipiscing ut sed pulvinar tellus, ut urna,
               fermentum. Porttitor senectus lorem rhoncus facilisi ac dictum
               varius egestas.
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
         </div> */}
      </div>
    </>
  );
}

export default AksiyaProducts