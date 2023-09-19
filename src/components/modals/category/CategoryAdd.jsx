import React from "react";
import { CrossBtn } from "../../../assets/style/imgs/icons/icons";
import { useState } from "react";
import { useRef } from "react";
import { useFetch } from "../../../hook/useFetch";

function CategoryAdd({ setCategoryAdd, setCategory2 }) {
  const categoryInput = useRef("");
  const [check, setCheck] = useState(true);

  const closeModal = () => {
    setCategoryAdd(false);
  };
  const handleCheckbox = () => {
    setCheck(!check);
  };

  const url = "http://localhost:1212/api/products";
  const { data, loader, error } = useFetch(url);
  const category = data && data.categories;

  const handlePost = (e) => {
    setCategoryAdd(false);
    let obj = {
      category: categoryInput.current.value,
      isActive: check,
    };
    e.preventDefault();
    const filteredCategory = category.filter((item) => {
      return item.category === obj.category;
    });
    {
      filteredCategory.length > 0
        ? alert("Kechirasiz! Bu toifa mavjud🙄. Boshqa toifa tanlang.")
        : fetch("http://localhost:1212/admin/categories", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkzNzQzNDU0fQ.sFu4MYKeNEy2Q7SufqeoX4yqN4G-G8GfWVEwUGwDOGo",
            },
            body: JSON.stringify(obj),
          })
            .then((res) => res.json())
            .then((data) => setCategory2(data));
    }
  };

  return (
    <div className="fixed left-[40%] top-[15%] shadow-2xl shadow-black">
      <form
        className="relative w-[270px] overflow-hidden rounded bg-slate-300 p-6"
        onSubmit={handlePost}
      >
        <h2 className="title mb-7 text-3xl font-bold">Qo'shish</h2>
        <label>
          <span className=" text-xl ">Kategoriya nomi:</span>
          <select
            className="mt-1 h-14 w-full rounded-md p-3"
            type="text"
            placeholder="masalan: Model A"
            ref={categoryInput}
          >
            <option value="Model A">Model A</option>
            <option value="Model B">Model B</option>
            <option value="Model C">Model C</option>
            <option value="Model D">Model D</option>
            <option value="Model E">Model E</option>
            <option value="Model F">Model F</option>
          </select>
        </label>
        <div className="mt-6 flex w-full items-center justify-between">
          <h2 className="text-xl">Holat</h2>
          <div
            className=" relative flex h-[15px] w-[32px] cursor-pointer items-center rounded-[50px] bg-green-200 p-[1px]"
            onClick={handleCheckbox}
          >
            <span
              className={
                check
                  ? "absolute  right-[2px] h-[13px] w-[13px] rounded-[50px] bg-green-700 transition-all"
                  : "absolute  left-[2px] h-[13px] w-[13px] rounded-[50px] bg-green-400 transition-all"
              }
            ></span>
          </div>
        </div>
        <button className="mt-10 w-full rounded bg-[#01384D] px-7 py-2 text-white">
          Qo'shish
        </button>
        <div className="absolute right-0 top-0" onClick={closeModal}>
          <CrossBtn />
        </div>
      </form>
    </div>
  );
}

export default CategoryAdd;
