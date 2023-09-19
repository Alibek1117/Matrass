import React, { useEffect, useState } from "react";
import { IconDelete, IconMell } from "../../assets/style/imgAdmin/IconAdmin";
import { NavLink } from "react-router-dom";
import DeleteCategory from "../modals/category/DeleteCategory";
import CategoryAdd from "../modals/category/CategoryAdd";
import CategoryEdite from "../modals/category/CategoryEdite";

function Toifalar() {
  const [id, setId] = useState();
  const [idEdite, setIdEdite] = useState();
  const [category2, setCategory2] = useState([]);
  const [category, setCategory] = useState([]);
  const [delCategory, setDelCategory] = useState(false);
  const [categoryAdd, setCategoryAdd] = useState(false);
  const [categoryEdite, setCategoryEdite] = useState(false);
  useEffect(() => {
    fetch("http://localhost:1212/admin/categories", {
      method: "GET",

      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkzNzQzNDU0fQ.sFu4MYKeNEy2Q7SufqeoX4yqN4G-G8GfWVEwUGwDOGo",
      },
    })
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, [delCategory, category2]);

  const handleDelete = (id) => {
    setId(id);
    setDelCategory(true);
  };

  const handleEdite = (id) => {
    setIdEdite(id);
    setCategoryEdite(true);
    console.log(id);
  };
  const addToifa = () => {
    setCategoryAdd(true);
  };
  return (
    <div className="m-auto mt-10 w-[1086px]">
      <table className="w-[1086px]  border ">
        <thead className="h-[50px]  bg-[#01384D] text-white">
          <tr>
            <th className="px-10">Toifalar</th>
            <th className="w-full"></th>
          </tr>
        </thead>
        {category ? (
          category.map((item) => (
            <tbody className="h-[59px] border text-center" key={item.id}>
              <tr>
                <td className="pl-1 text-[15px]">{item.category}</td>
                <td className="my-4 flex items-center justify-end gap-3 px-10">
                  <span
                    className="flex h-[34px] w-[34px] items-center justify-center rounded bg-[#E6ECEE]"
                    onClick={() => handleEdite(item.id)}
                  >
                    <IconMell />
                  </span>
                  <span
                    className="flex h-[34px] w-[34px] items-center justify-center rounded bg-[#FBE9E9]"
                    onClick={() => handleDelete(item.id)}
                  >
                    <IconDelete />
                  </span>
                </td>
              </tr>
            </tbody>
          ))
        ) : (
          <h2>Ma'lumotlar yo'q</h2>
        )}
      </table>
      <NavLink>
        <div className="mt-10 w-full text-end">
          <button
            onClick={addToifa}
            className="btn h-[40px] w-[135] rounded border bg-[#01384D] px-7  text-white"
          >
            Qo'shish
          </button>
        </div>
      </NavLink>
      {delCategory && (
        <DeleteCategory id={id} setDelCategory={setDelCategory} />
      )}
      {categoryAdd && (
        <CategoryAdd
          setCategoryAdd={setCategoryAdd}
          setCategory2={setCategory2}
        />
      )}
      {categoryEdite && (
        <CategoryEdite
          setCategoryAdd={setCategoryEdite}
          idEdite={idEdite}
          setCategory2={setCategory2}
        />
      )}
    </div>
  );
}

export default Toifalar;
