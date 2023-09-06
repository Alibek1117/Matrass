/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { ImageICons } from "../../../assets/style/imgAdmin/IconAdmin";
import { CrossBtn } from "../../../assets/style/imgs/icons/icons";

function ProductEdite({ setOpenProductEdite, idEdite, product }) {
  const name = useRef();
  const category = useRef();
  const weight = useRef();
  const images = useRef();
  const warranty = useRef();
  const size = useRef();
  const capacity = useRef();
  const body = useRef();
  const cost = useRef();
  const newCost = useRef();

  const [products, setProducts] = useState("productlaar");

  const handlePost = (e) => {
      e.preventDefault();
      setOpenProductEdite(false);
    let obj = {
        name: name.current.value,
      category: category.current.value,
      weight: weight.current.value,
      images: "/home/khaitbek/Downloads/1080.png",
      isActive: true,
      warranty: warranty.current.value,
      size: size.current.value,
      capacity: capacity.current.value,
      body: body.current.value,
      cost: cost.current.value,
      newCost: newCost.current.value,
      discount: false,
      new: true,
    };
    console.log(obj);
    
    fetch(`http://localhost:1212/admin/products/${idEdite}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json",
          Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc1MzU2MTUwfQ.TSJs3Yomp3woiYfoUUwK2azBR0tBBE-Rwtaco33pfP0",
        },
        body: JSON.stringify(obj),
    })
    .then((res) => res.json())
    .then((data) => setProducts(data));
    console.log(products);
  };
  return (
    <div
      className="font-Montserrat     fixed
    left-[120px] top-16 flex w-[1130px] justify-evenly  border bg-white p-6 shadow-2xl shadow-black "
    >
      <div>
        <h3 className="mb-2 text-[18px] font-semibold">O'zgartirish</h3>
        <span className="flex  h-[230px] w-[230px] items-center justify-center  rounded bg-[#013d4d2c]">
          <ImageICons />
        </span>
      </div>
      <div className="flex justify-between gap-4">
        <form className="flex gap-4" onSubmit={handlePost}>
          <div>
            <label className="block pt-8" htmlFor="Toifalar">
              Toifalar
            </label>
            <select
              className="mt-2 h-[40px] w-[220px] rounded border pl-3 "
              ref={category}
              required
              name="Toifalar border-none"
              id="Toifalar"
            >
              {product ? (
                product.map((item) => (
                  <option className=" p-5" value="Model C" key={item.id}>
                    {item.category}
                  </option>
                ))
              ) : (
                <option>Loding...</option>
              )}
            </select>
            <label className="mt-4 block" htmlFor="Tovarnomi">
              Tovar nomi
            </label>
            <input
              className="mt-2 h-[40px] w-[220px] rounded border pl-3"
              ref={name}
              required
              type="text"
              placeholder="masalan: Lux Soft Memory"
              id="Tovarnomi"
            />
            <label className="mt-4 block" htmlFor="Narxi">
              Narxi
            </label>
            <input
              className="mt-2 h-[40px] w-[220px] rounded border pl-3"
              ref={cost}
              required
              type="text"
              id="Narxi"
              placeholder="masalan: 20 000"
            />
            <label className="mt-4 block" htmlFor="Yuklama">
              Yuklama
            </label>
            <input
              className="mt-2 h-[40px] w-[220px] rounded border pl-3"
              ref={weight}
              required
              type="text"
              id="Yuklama"
              placeholder="masalan: 200 kg"
            />
          </div>
          <div>
            <label className="mt-8 block " htmlFor="Razmeri">
              Razmeri
            </label>
            <input
              className="mt-2 h-[40px] w-[220px] rounded border pl-3"
              ref={size}
              required
              type="text"
              id="Razmeri"
              placeholder="masalan: 200 x 140 x 40"
            />
            <label
              className="mt-4 block
            "
              htmlFor="Kafolat"
            >
              Kafolat
            </label>
            <input
              className=" mt-2 h-[40px] w-[220px] rounded border pl-3"
              ref={warranty}
              required
              type="text"
              placeholder="masalan: 1 yil"
              id="Kafolat"
            />
            <label
              className="mt-4
            block"
              htmlFor="Sig’m"
            >
              Sig’m
            </label>
            <input
              className="mt-2 h-[40px] w-[220px] rounded border pl-3"
              ref={capacity}
              required
              type="text"
              id="Sig’m"
              placeholder="masalan:2"
            />
            <label className="mt-4 block" htmlFor="Aksiya Narxi">
              Aksiya Narxi
            </label>
            <input
              className="mt-2 h-[40px] w-[220px] rounded border pl-3"
              ref={newCost}
              required
              type="Text"
              id="Aksiya Narxi"
              placeholder="masalan: 1 200 000"
            />
          </div>
          <div>
            <label className="mt-8 block" htmlFor="Ma'lumot">
              Ma'lumot
            </label>
            <textarea
              className="mt-2 h-[127px] w-[220px] rounded border p-3"
              ref={body}
              required
              placeholder="info..."
              id="Ma'lumot"
            ></textarea>
            <div className="mt-4 flex items-center">
              <p>Navinla</p>
              <div className="mx-auto flex h-[15px] w-[32px] items-center rounded-[50px] bg-green-200 p-[1px]">
                <span className="h-[13px]  w-[13px] rounded-[50px] bg-green-700"></span>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <p>Active</p>
              <div className="mx-auto flex h-[15px] w-[32px] items-center rounded-[50px] bg-green-200 p-[1px]">
                <span className="h-[13px]  w-[13px] rounded-[50px] bg-green-700"></span>
              </div>
            </div>
            <button className="mt-[45px] h-[45px] w-[220px] rounded bg-[#01384D] text-white">
              Qo'shish
            </button>
          </div>
        </form>
      </div>
      <div onClick={() => setOpenProductEdite(false)}>
        <CrossBtn />
      </div>
    </div>
  );
}

export default ProductEdite;
