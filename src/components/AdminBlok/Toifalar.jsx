/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import {IconDelete, IconMell } from '../../assets/style/imgAdmin/IconAdmin';
import { NavLink } from 'react-router-dom';
import AddModal from '../../components/modals/AddModal';

function Toifalar ({complate, IsComplate}) {
  //  const {complate, IsComplate} = Toifa
  return (
    <div className="m-auto mt-10 w-[1086px]">
      <table className="w-[1086px]  border ">
        <thead className="h-[50px]  bg-[#01384D] text-white">
          <tr>
            <th className="pl-2">Toifalar</th>
            <th className="w-full"></th>
          </tr>
        </thead>
        <tbody className="h-[59px] border text-center">
          <tr>
            <td className="pl-1">Model C</td>
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
            <td className="pl-1">Model C</td>
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
            <td className="pl-1">Model C</td>
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
            <td className="pl-1">Model C</td>
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
            <td className="pl-1">Model C</td>
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
      <NavLink>
        <div className="mt-10 w-full text-end">
          <button
            onClick={() => IsComplate(true)}
            className="btn h-[40px] w-[135] rounded border bg-[#01384D] px-7 py-2 text-white"
          >
            Qo'shish
          </button>
          { complate && <AddModal  />}
        </div>
      </NavLink>
    </div>
  );
}

export default Toifalar