/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { IconDelete, IconMell } from "../../assets/style/imgAdmin/IconAdmin";
import { NavLink } from "react-router-dom";
import ProductDelete from "../modals/products/ProductDelete";

function Mahsulotlar() {
  const [id, setId] = useState();
  const [idEdite, setIdEdite] = useState();
  const [delProduct, setDelProduct] = useState(false);
  const [productAdd, setProductAdd] = useState(false);
  const [productEdite, setProductEdite] = useState(false);

  const handleDelete = (id)=>{
    setId(id)
     setDelProduct(true);
  }

  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1212/admin/products", {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc1MzU2MTUwfQ.TSJs3Yomp3woiYfoUUwK2azBR0tBBE-Rwtaco33pfP0",
      },
    })
      .then((res) => res.json())
      .then((data) => setProduct(data.products));
  }, [delProduct]);

  console.log(product);

  return (
    <div className="m-auto mt-10 w-[1086px]">
      <table className="w-[1086px]  border ">
        <thead className="h-[50px] bg-[#01384D] text-white">
          <tr>
            <th>Mahsulot nomlari</th>
            <th>Toifalar</th>
            <th>Narxi</th>
            <th>Yuklama</th>
            <th>Razmeri</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        {product ? (
          product.map((item) => (
            <tbody className="h-[59px] border text-center" key={item.id}>
              <tr>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.cost}</td>
                <td>
                  {item.weight} <span>kg</span>
                </td>
                <td>{item.size}</td>
                <td>
                  <div className="mx-auto flex h-[15px] w-[32px] items-center rounded-[50px] bg-green-200 p-[1px]">
                    <span className="h-[13px]  w-[13px] rounded-[50px] bg-green-700"></span>
                  </div>
                </td>
                <td className="my-4 flex items-center justify-end gap-3 pr-2">
                  <span className="flex h-[34px] w-[34px] items-center justify-center rounded bg-[#E6ECEE]">
                    <IconMell />
                  </span>
                  <span
                    className="flex h-[34px] w-[34px] items-center justify-center rounded bg-[#FBE9E9]"
                    onClick={() =>handleDelete(item.id)}
                  >
                    <IconDelete />
                  </span>
                </td>
              </tr>
            </tbody>
          ))
        ) : (
          <h2>Not Found</h2>
        )}
        
      </table>
      <div className="mt-10 w-full text-end">
        <NavLink>
          <button className="h-[40px] w-[135] rounded border bg-[#01384D] px-7 py-2 text-white">
            Qo'shish
          </button>
        </NavLink>
      </div>
      {delProduct && <ProductDelete setDelProduct={setDelProduct} id={id} />}
    </div>
  );
}

export default Mahsulotlar;
