/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { IconDelete, IconMell } from '../../assets/style/imgAdmin/IconAdmin';
import { NavLink } from 'react-router-dom';

function Mahsulotlar() {
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
        <tbody className="h-[59px] border text-center">
          <tr>
            <td>Lux Soft Memory</td>
            <td>Model C</td>
            <td>1 600 000 so’m</td>
            <td>150 kg</td>
            <td>200 x 134 x 40</td>
            <td>
              <div className="mx-auto flex h-[15px] w-[32px] items-center rounded-[50px] bg-green-200 p-[1px]">
                <span className="h-[13px]  w-[13px] rounded-[50px] bg-green-700"></span>
              </div>
            </td>
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
        <tbody className="h-[59px] border text-center">
          <tr>
            <td>Lux Soft Memory</td>
            <td>Model C</td>
            <td>1 600 000 so’m</td>
            <td>150 kg</td>
            <td>200 x 134 x 40</td>
            <td>
              <div className="mx-auto flex h-[15px] w-[32px] items-center rounded-[50px] bg-green-200 p-[1px]">
                <span className="h-[13px]  w-[13px] rounded-[50px] bg-green-700"></span>
              </div>
            </td>
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
        <tbody className="h-[59px] border text-center">
          <tr>
            <td>Lux Soft Memory</td>
            <td>Model C</td>
            <td>1 600 000 so’m</td>
            <td>150 kg</td>
            <td>200 x 134 x 40</td>
            <td>
              <div className="mx-auto flex h-[15px] w-[32px] items-center rounded-[50px] bg-green-200 p-[1px]">
                <span className="h-[13px]  w-[13px] rounded-[50px] bg-green-700"></span>
              </div>
            </td>
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
        <tbody className="h-[59px] border text-center">
          <tr>
            <td>Lux Soft Memory</td>
            <td>Model C</td>
            <td>1 600 000 so’m</td>
            <td>150 kg</td>
            <td>200 x 134 x 40</td>
            <td>
              <div className="mx-auto flex h-[15px] w-[32px] items-center rounded-[50px] bg-green-200 p-[1px]">
                <span className="h-[13px]  w-[13px] rounded-[50px] bg-green-700"></span>
              </div>
            </td>
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
        <tbody className="h-[59px] border text-center">
          <tr>
            <td>Lux Soft Memory</td>
            <td>Model C</td>
            <td>1 600 000 so’m</td>
            <td>150 kg</td>
            <td>200 x 134 x 40</td>
            <td>
              <div className="mx-auto flex h-[15px] w-[32px] items-center rounded-[50px] bg-green-200 p-[1px]">
                <span className="h-[13px]  w-[13px] rounded-[50px] bg-green-700"></span>
              </div>
            </td>
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
      <div className="mt-20 w-full text-end">
        <NavLink>
          <button className="h-[40px] w-[135] rounded border bg-[#01384D] px-7 py-2 text-white">
            Qo'shish
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Mahsulotlar