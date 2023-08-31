/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'
import { IconDelete, IconMell,  LocationIcon } from '../../assets/style/imgAdmin/IconAdmin';

function LOcation() {
  return (
    <div className="m-auto mt-10 w-[1086px]">
      <table className="w-[1086px]  border ">
        <thead className="h-[50px]  bg-[#01384D] text-white">
          <tr>
            <th className="pl-2">MAnzil</th>
            <th className="pl-2">Matn</th>
            <th className="pl-2">Lokation</th>
            <th className="w-[500px]"></th>
          </tr>
        </thead>
        <tbody className="h-[59px] border text-center">
          <tr>
            <td className="pl-1">Toshkent, Parken...</td>
            <td className="pl-1">Enim urna... </td>
            <td className="pl-20 "><LocationIcon/></td>
            <td className="my-4 flex items-center justify-end gap-3 pr-2">
              <span className="flex h-[34px] w-[34px] items-center justify-center rounded bg-[#E6ECEE]">
                <IconMell />
              </span>
              <span className="flex h-[34px] w-[34px] items-center justify-center rounded bg-[#FBE9E9]">
                <IconDelete />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-10 w-full text-end">
        <NavLink>
          <button className="h-[40px] w-[135] rounded border bg-[#01384D] px-7 py-2 text-white">
            Qo'shish
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default LOcation