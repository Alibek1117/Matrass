import React, { useEffect, useState } from 'react'
import { IconDelete } from '../../assets/style/imgAdmin/IconAdmin';

function Customers() {
  return (
    <div className="m-auto mt-10 w-[1086px]">
      <table className="w-[1086px]  border ">
        <thead className="h-[50px] bg-[#01384D] text-white">
          <tr>
            <th className="pl-10">ID</th>
            <th>sana</th>
            <th>telefon raqami</th>
            <th>Qayta aloqa</th>
            <th className="w-[300px]"> </th>
            <th></th>
          </tr>
        </thead>
        <tbody className="h-[59px] border text-center">
          <tr>
            <td className="pl-10">6</td>
            <td>12:13-12.05.2021</td>
            <td>+998 90 123 45 67</td>
            <td>
              <div className="mx-auto flex h-[15px] w-[32px] items-center rounded-[50px] bg-green-200 p-[1px]">
                <span className="ml-3 h-[13px]  w-[13px] rounded-[50px] bg-green-700"></span>
              </div>
            </td>
            <td> </td>
            <td>
              <span className="flex h-[34px] w-[34px] items-center justify-center rounded bg-[#FBE9E9]">
                <IconDelete />
              </span>
            </td>
          </tr>
        </tbody>
        <tbody className="h-[59px] border text-center">
          <tr>
            <td className="pl-10">6</td>
            <td>12:13-12.05.2021</td>
            <td>+998 90 123 45 67</td>
            <td>
              <div className="mx-auto flex h-[15px] w-[32px] items-center rounded-[50px] bg-green-200 p-[1px]">
                <span className="ml-3 h-[13px] w-[13px] rounded-[50px] bg-green-700"></span>
              </div>
            </td>
            <td> </td>
            <td>
              <span className="flex h-[34px] w-[34px] items-center justify-center rounded bg-[#FBE9E9]">
                <IconDelete />
              </span>
            </td>
          </tr>
        </tbody>
        <tbody className="h-[59px] border text-center">
          <tr>
            <td className="pl-10">6</td>
            <td>12:13-12.05.2021</td>
            <td>+998 90 123 45 67</td>
            <td>
              <div className="mx-auto flex h-[15px] w-[32px] items-center rounded-[50px] bg-slate-300 p-[1px]">
                <span className="h-[13px]  w-[13px] rounded-[50px] bg-white"></span>
              </div>
            </td>
            <td> </td>
            <td>
              <span className="flex h-[34px] w-[34px] items-center justify-center rounded bg-[#FBE9E9]">
                <IconDelete />
              </span>
            </td>
          </tr>
        </tbody>
        <tbody className="h-[59px] border text-center">
          <tr>
            <td className="pl-10">6</td>
            <td>12:13-12.05.2021</td>
            <td>+998 90 123 45 67</td>
            <td>
              <div className="mx-auto flex h-[15px] w-[32px] items-center rounded-[50px] bg-green-200 p-[1px]">
                <span className="ml-3 h-[13px] w-[13px] rounded-[50px] bg-green-700"></span>
              </div>
            </td>
            <td> </td>
            <td>
              <span className="flex h-[34px] w-[34px] items-center justify-center rounded bg-[#FBE9E9]">
                <IconDelete />
              </span>
            </td>
          </tr>
        </tbody>
        <tbody className="h-[59px] border text-center">
          <tr>
            <td className="pl-10">6</td>
            <td>12:13-12.05.2021</td>
            <td>+998 90 123 45 67</td>
            <td>
              <div className="mx-auto flex h-[15px] w-[32px] items-center rounded-[50px] bg-green-200 p-[1px]">
                <span className="ml-3 h-[13px] w-[13px] rounded-[50px] bg-green-700"></span>
              </div>
            </td>
            <td> </td>
            <td>
              <span className="flex h-[34px] w-[34px] items-center justify-center rounded bg-[#FBE9E9]">
                <IconDelete />
              </span>
            </td>
          </tr>
        </tbody>
        <tbody className="h-[59px] border text-center">
          <tr>
            <td className="pl-10">6</td>
            <td>12:13-12.05.2021</td>
            <td>+998 90 123 45 67</td>
            <td>
              <div className="mx-auto flex h-[15px] w-[32px] items-center rounded-[50px] bg-green-200 p-[1px]">
                <span className="ml-3 h-[13px]  w-[13px] rounded-[50px] bg-green-700"></span>
              </div>
            </td>
            <td> </td>
            <td>
              <span className="flex h-[34px] w-[34px] items-center justify-center rounded bg-[#FBE9E9]">
                <IconDelete />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Customers