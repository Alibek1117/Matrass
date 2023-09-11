import React from "react";
import { CrossBtn } from "../../assets/style/imgs/icons/icons";
import { useState } from "react";
import { useRef } from "react";

function CategoryAdd({ setCategoryAdd, idEdite, setCategory2  }) {
  const categoryInput = useRef("");
  //   const [category, setCategory] = useState();
  const [check, setCheck] = useState(true);

  const closeModal = () => {
    setCategoryAdd(false);
  };
  const handleCheckbox = () => {
    setCheck(!check);
  };
  const handleEdite = (e) => {
    setCategoryAdd(false);
    let obj = {
      category: categoryInput.current.value,
      isActive: check,
    };
    e.preventDefault();

    fetch(`http://localhost:1212/admin/categories/${idEdite}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkzNzQzNDU0fQ.sFu4MYKeNEy2Q7SufqeoX4yqN4G-G8GfWVEwUGwDOGo",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => setCategory2(data));
    //   console.log(category2);
  };
  return (
    <div className="fixed left-[40%] top-[15%] ">
      <form
        className="relative w-[270px] overflow-hidden rounded bg-slate-300 p-6"
        onSubmit={handleEdite}
      >
        <h2 className="title mb-7 text-3xl font-bold">Qo'shish</h2>
        <label>
          <span className=" text-xl ">Kategoriya nomi:</span>
          <input
            className="mt-1 h-10 w-full rounded-md p-3"
            type="text"
            placeholder="masalan: Model A"
            ref={categoryInput}
            // value=''
          />
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
