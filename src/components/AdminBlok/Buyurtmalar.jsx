/* eslint-disable no-unused-vars */
import React from 'react'

function Buyurtmalar() {
  return (
    <div className="m-auto mt-10 w-[1086px]">
      <table className="w-[1086px]  border ">
        <thead className="h-[50px] bg-[#01384D] text-white">
          <tr>
            <th>ID</th>
            <th>ismi</th>
            <th>telefon raqami</th>
            <th>mahsulot nomlari</th>
            <th>miqdor</th>
            <th>Qayta aloqa</th>
          </tr>
        </thead>
        <tbody className="h-[59px] border text-center">
          <tr>
            <td>6</td>
            <td>Jenny Wilson</td>
            <td>+998 90 123 45 67</td>
            <td>Ortopedik Eko matras</td>
            <td>4</td>
            <td>
              <div className="mx-auto flex h-[15px] w-[32px] items-center rounded-[50px] bg-green-200 p-[1px]">
                <span className="h-[13px]  w-[13px] rounded-[50px] bg-green-700"></span>
              </div>
            </td>
          </tr>
        </tbody>
        <tbody className="h-[59px] border text-center">
          <tr>
            <td>7</td>
            <td>Robert Fox</td>
            <td>+998 90 123 45 67</td>
            <td>Ortopedik Eko matras</td>
            <td>4</td>
            <td>
              <div className="mx-auto flex h-[15px] w-[32px] items-center rounded-[50px] bg-green-200 p-[1px]">
                <span className=" h-[13px]  w-[13px] rounded-[50px] bg-green-700"></span>
              </div>
            </td>
          </tr>
        </tbody>
        <tbody className="h-[59px] border text-center">
          <tr>
            <td>3</td>
            <td>Wade Warren</td>
            <td>+998 90 123 45 67</td>
            <td>Ortopedik Eko matras</td>
            <td>4</td>
            <td>
              <div className="mx-auto flex h-[16px] w-[32px] items-center rounded-[50px] bg-green-200 p-[1px]">
                <span className="mt-[1px] h-[13px]  w-[13px] rounded-[50px] bg-green-700"></span>
              </div>
            </td>
          </tr>
        </tbody>
        <tbody className="h-[59px] border text-center">
          <tr>
            <td>3</td>
            <td>Jenny Wilson</td>
            <td>+998 90 123 45 67</td>
            <td>Ortopedik Eko matras</td>
            <td>4</td>
            <td>
              <div className="mx-auto  flex h-[16px] w-[32px] items-center rounded-[50px] bg-green-200 p-[1px]">
                <span className="mt-[1px] h-[13px]  w-[13px] rounded-[50px] bg-green-700"></span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Buyurtmalar