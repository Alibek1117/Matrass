/* eslint-disable no-unused-vars */
import React from "react";
import AdminHeader from "../components/AdminHeader";
import AdminBtn from "../components/AdminBtn";
import { Outlet } from "react-router-dom";


function Admin() {
  return (
    <>
      <div>
        <AdminHeader />
        <div className="container m-auto flex justify-between">
          <div className="m-0">
            <AdminBtn />
          </div>
          <div className=" w-[100%] h-[100%] " >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
