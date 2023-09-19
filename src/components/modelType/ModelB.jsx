import { useState } from "react";
import { Karzinka, Zoom } from "../../assets/style/imgs/icons/icons";
import matrasImg from "../../assets/style/imgs/matras.png";
import { useFetch } from "../../hook/useFetch";
import Zakaz from "../modals/Zakaz";
import ZakazDone from "../modals/ZakazDone";
import ZoomModal from "../modals/ZoomModal";
import Loader1 from "../loader/Loader1";

function ModelB() {
  const [zoom, setZoom] = useState(false);
  const [id, setId] = useState(null);
  const [openZakaz, setOpenZakaz] = useState(false);
  const [openZakazDone, setOpenZakazDone] = useState(false);

  const handleZoom = (e) => {
    console.log(e);
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

  return (
    <>
      <div className="container">
        <div className="products__title">Toifa: Model B</div>
        {loader && <Loader1 />}
        {error && <h2>{error}</h2>}
        {product &&
          product
            .filter((product) => {
              return product.category === "Model B";
            })
            .map((item) => (
              <div className="product__card flex p-8" key={item.id}>
                <div className="card__left w-[45%]">
                  <div className="left__top flex items-center">
                    {item.status !== "0" && (
                      <span className="type">YANGI MAHSULOT</span>
                    )}
                    <div>
                      {item.new_cost && <span className="aksiya">AKSIYA</span>}
                    </div>
                    <div
                      className="zoom mt-10 rounded-full bg-[#D9E1E7]  p-3 "
                      onClick={() => handleZoom()}
                    >
                      <Zoom />
                    </div>
                  </div>
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
                  <button
                    className="order__btn flex items-center"
                    onClick={() => handleOrder(item.id)}
                  >
                    <p className="title">Buyurtma Berish</p>
                    <Karzinka />
                  </button>
                </div>
              </div>
            ))}
        {zoom && <ZoomModal setZoom={setZoom} />}
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

export default ModelB;
