import React, { useEffect, useState } from "react";
import ProductAdd from "../modals/products/ProductAdd";

function Buyurtmalar() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    fetch("http://localhost:1212/admin/orders/1", {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkzNzQzNDU0fQ.sFu4MYKeNEy2Q7SufqeoX4yqN4G-G8GfWVEwUGwDOGo",
      },
    })
      .then((res) => res.json())
      .then((data) => setOrder(data.data));
  }, []);

  console.log(order);

  return (
    <div className="m-auto mt-10 w-[1086px] ">
      <table className="w-[1086px]  border ">
        <thead className="h-[50px] bg-[#01384D] text-white">
          <tr>
            <th className="pl-10">ID</th>
            <th>ismi</th>
            <th>telefon raqami</th>
            <th>mahsulot nomlari</th>
            <th>miqdor</th>
            <th>Qayta aloqa</th>
          </tr>
        </thead>
        {order ? (
          order.map((item) => (
            <tbody className="h-[59px] border text-center" key={item.id}>
              <tr>
                <td className="pl-10">{item.id}</td>
                <td>{item.name}</td>
                <td>{item.number}</td>
                <td>{item.product_name}</td>
                <td>{item.count}</td>
                <td>
                  <div className="mx-auto flex h-[15px] w-[32px] items-center rounded-[50px] bg-green-200 p-[1px]">
                    <span className="ml-3 h-[13px]  w-[13px] rounded-[50px] bg-green-700"></span>
                  </div>
                </td>
              </tr>
            </tbody>
          ))
        ) : (
          <tbody>
            <tr>
              <td>Ma'lumotlar yo'q</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
}

export default Buyurtmalar;
