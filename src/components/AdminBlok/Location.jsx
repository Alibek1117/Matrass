import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  IconDelete,
  IconMell,
  LocationIcon,
} from "../../assets/style/imgAdmin/IconAdmin";
import AddressAdd from "../modals/address/AddressAdd";
import AddressDelete from "../modals/address/AddressDelete";
import AddressEdite from "../modals/address/AddressEdite";

function LOcation() {
  const [idDel, setIdDel] = useState();
  const [idEdite, setIdEdite] = useState();
  const [openAddressAdd, setOpenAddressAdd] = useState(false);
  const [addressAdd, setAddressAdd] = useState(false);
  const [openAddressEdite, setOpenAddressEdite] = useState(false);
  const [openAddressDel, setOpenAddressDel] = useState(false);
  const [tech, setTech] = useState([]);

  const [location, setLocation] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1212/admin/address", {
      method: "GET",

      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkzNzQzNDU0fQ.sFu4MYKeNEy2Q7SufqeoX4yqN4G-G8GfWVEwUGwDOGo",
      },
    })
      .then((res) => res.json())
      .then((data) => setLocation(data));
  }, [addressAdd, openAddressDel, openAddressEdite]);

  const handleDelete = (id) => {
    setIdDel(id);
    setOpenAddressDel(true);
  };
  const handleEdite = (id) => {
    setIdEdite(id);
    setOpenAddressEdite(true);
  };

  return (
    <div className="m-auto mt-10 w-[1086px]">
      <table className="w-[1086px]  border ">
        <thead className="h-[50px]  bg-[#01384D] text-white">
          <tr>
            <th className="pl-2">Manzil</th>
            <th className="pl-2">Matn</th>
            <th className="pl-2">Lokation</th>
            <th className="w-[500px]"></th>
          </tr>
        </thead>
        {location ? (
          location.map((item) => (
            <tbody className="h-[59px] border text-center" key={item.id}>
              <tr>
                <td className="pl-1">{item.location}</td>
                <td className="pl-1">{item.destination}</td>
                <td className="pl-20 ">
                  <LocationIcon />
                </td>
                <td className="my-4 flex items-center justify-end gap-3 pr-2">
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
          <h2>Not Found</h2>
        )}
      </table>
      <div
        className="mt-10 w-full text-end"
        onClick={() => setOpenAddressAdd(true)}
      >
        <button className="h-[40px] w-[135] rounded border bg-[#01384D] px-7  text-white">
          Qo'shish
        </button>
      </div>
      {openAddressAdd && (
        <AddressAdd
          setOpenAddressAdd={setOpenAddressAdd}
          setAddressAdd={setAddressAdd}
        />
      )}
      {openAddressEdite && (
        <AddressEdite
          setOpenAddressEdite={setOpenAddressEdite}
          idEdite={idEdite}
        />
      )}
      {openAddressDel && (
        <AddressDelete setOpenAddressDel={setOpenAddressDel} idDel={idDel} />
      )}
    </div>
  );
}

export default LOcation;
