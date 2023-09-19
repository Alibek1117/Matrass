import AdminHeader from "../components/AdminHeader";
import AdminBtn from "../components/AdminBtn";
import { Outlet } from "react-router-dom";

function Admin() {
  return (
    <>
      <div className=" mx-auto bg-[#01384D]  ">
        <AdminHeader />
        <div className=" m-auto flex w-[1345px] justify-between">
          <div>
            <AdminBtn />
          </div>
          <div className=" w-[100%] bg-white ">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
