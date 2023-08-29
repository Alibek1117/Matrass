/* eslint-disable no-unused-vars */
import React from "react";
import AdminHeader from "../components/AdminHeader";
import AdminBtn from "../components/AdminBtn";


function Admin() {
  return (
    <>
      <div>
        <AdminHeader />
        <div className="container m-auto flex justify-between">
          <div>
            <AdminBtn />
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Admin;
