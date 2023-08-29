/* eslint-disable no-unused-vars */
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Home />} />
        <Route path="admin" element={<Admin />} />
        <Route path="login" element={<Login />} />
      </Route>,
    ),
  );
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
