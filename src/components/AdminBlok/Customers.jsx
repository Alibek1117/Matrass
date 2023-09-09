/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { IconDelete } from '../../assets/style/imgAdmin/IconAdmin';

function Customers() {



  // const [contact, setContact] = useState([])
  // useEffect(() => {
  //   fetch("http://localhost:1212/admin/contact/1", {
  //     method: "GET",
  //     headers: {
  //       Authorization:
  //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkzNzQ3NzUwfQ.5UFeIeZhgdcOxLi-GZtJm_MIqdjcLgY7ixE6tN9h4E8",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setContact(data));
  // }, []);
// console.log(contact);


var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc1MzU2MTUwfQ.TSJs3Yomp3woiYfoUUwK2azBR0tBBE-Rwtaco33pfP0",
);

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch("http://localhost:1212/admin/contact/2", requestOptions)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));

  return (
    <div className="m-auto mt-10 w-[1086px]">
      <table className="w-[1086px]  border ">
        <thead className="h-[50px] bg-[#01384D] text-white">
          <tr>
            <th>ID</th>
            <th>sana</th>
            <th>telefon raqami</th>
            <th>Qayta aloqa</th>
            <th className="w-[300px]"> </th>
            <th></th>
          </tr>
        </thead>
        <tbody className="h-[59px] border text-center">
          <tr>
            <td>6</td>
            <td>12:13-12.05.2021</td>
            <td>+998 90 123 45 67</td>
            <td>
              <div className="mx-auto flex h-[15px] w-[32px] items-center rounded-[50px] bg-green-200 p-[1px]">
                <span className="h-[13px]  w-[13px] rounded-[50px] bg-green-700"></span>
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
            <td>6</td>
            <td>12:13-12.05.2021</td>
            <td>+998 90 123 45 67</td>
            <td>
              <div className="mx-auto flex h-[15px] w-[32px] items-center rounded-[50px] bg-green-200 p-[1px]">
                <span className="h-[13px]  w-[13px] rounded-[50px] bg-green-700"></span>
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
            <td>6</td>
            <td>12:13-12.05.2021</td>
            <td>+998 90 123 45 67</td>
            <td>
              <div className="mx-auto flex h-[15px] w-[32px] items-center rounded-[50px] bg-green-200 p-[1px]">
                <span className="h-[13px]  w-[13px] rounded-[50px] bg-green-700"></span>
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
            <td>6</td>
            <td>12:13-12.05.2021</td>
            <td>+998 90 123 45 67</td>
            <td>
              <div className="mx-auto flex h-[15px] w-[32px] items-center rounded-[50px] bg-green-200 p-[1px]">
                <span className="h-[13px]  w-[13px] rounded-[50px] bg-green-700"></span>
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
            <td>6</td>
            <td>12:13-12.05.2021</td>
            <td>+998 90 123 45 67</td>
            <td>
              <div className="mx-auto flex h-[15px] w-[32px] items-center rounded-[50px] bg-green-200 p-[1px]">
                <span className="h-[13px]  w-[13px] rounded-[50px] bg-green-700"></span>
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
            <td>6</td>
            <td>12:13-12.05.2021</td>
            <td>+998 90 123 45 67</td>
            <td>
              <div className="mx-auto flex h-[15px] w-[32px] items-center rounded-[50px] bg-green-200 p-[1px]">
                <span className="h-[13px]  w-[13px] rounded-[50px] bg-green-700"></span>
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