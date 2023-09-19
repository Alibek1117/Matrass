import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IconDelete, IconMell } from "../../assets/style/imgAdmin/IconAdmin";
import TechnoAdd from "../modals/technology/TechnoAdd";
import TechnoEdite from "../modals/technology/TechnoEdite";
import TechnoDelete from "../modals/technology/TechnoDelete";

function Texnology() {
  const [idDel, setIdDel] = useState();
  const [idEdite, setIdEdite] = useState();
  const [openTechAdd, setOpenTechAdd] = useState(false);
  const [techAdd, setTechAdd] = useState(false);
  const [techEdite, setTechEdite] = useState(false);
  const [openTechEdite, setOpenTechEdite] = useState(false);
  const [openTechDel, setOpenTechDel] = useState(false);
  const [tech, setTech] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1212/admin/technology", {
      method: "GET",

      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkzNzQzNDU0fQ.sFu4MYKeNEy2Q7SufqeoX4yqN4G-G8GfWVEwUGwDOGo",
      },
    })
      .then((res) => res.json())
      .then((data) => setTech(data));
  }, [techAdd, techEdite, openTechDel]);

  console.log(tech);

  const handleEdite = (id) => {
    setIdEdite(id);
    setOpenTechEdite(true);
    console.log(id);
  };
  const handleDelete = (id) => {
    setIdDel(id);
    setOpenTechDel(true);
    console.log(id);
  };

  return (
    <div className="m-auto mt-10 w-[1086px]">
      <table className="w-[1086px]  border ">
        <thead className="h-[50px]  bg-[#01384D] text-white">
          <tr>
            <th className="pl-10">Nomlari</th>
            <th className="pl-20">Matn</th>
            <th className="pl-20">Video</th>
            <th className="w-[500px] pr-10"></th>
          </tr>
        </thead>
        {tech ? (
          tech.map((item) => (
            <tbody className="h-[59px] border text-center" key={item.id}>
              <tr>
                <td className="pl-10">{item.name}</td>
                <td className="pl-20">{item.description} </td>
                <td className="pl-20">{item.link}</td>
                <td className="my-4 flex items-center justify-end gap-3 pr-10">
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
      <div className="mt-10 w-full text-end">
        <button
          className="h-[40px] w-[135] rounded border bg-[#01384D] px-7  text-white"
          onClick={() => setOpenTechAdd(true)}
        >
          Qo'shish
        </button>
      </div>
      {openTechAdd && (
        <TechnoAdd setOpenTechAdd={setOpenTechAdd} setTechAdd={setTechAdd} />
      )}
      {openTechEdite && (
        <TechnoEdite
          setOpenTechEdite={setOpenTechEdite}
          setTechEdite={setTechEdite}
          idEdite={idEdite}
        />
      )}
      {openTechDel && (
        <TechnoDelete setOpenTechDel={setOpenTechDel} idDel={idDel} />
      )}
    </div>
  );
}

export default Texnology;
