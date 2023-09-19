import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Home from "./pages/Home";
import All from "./components/modelType/All";
import "./components/modelType/All";
import ModelA from "./components/modelType/ModelA";
import ModelB from "./components/modelType/ModelB";
import ModelC from "./components/modelType/ModelC";
import ModelD from "./components/modelType/ModelD";
import ModelE from "./components/modelType/ModelE";
import ModelF from "./components/modelType/ModelF";
import Buyurtmalar from "./components/AdminBlok/Buyurtmalar";
import Customers from "./components/AdminBlok/Customers";
import LOcation from "./components/AdminBlok/Location";
import Mahsulotlar from "./components/AdminBlok/Mahsulotlar";
import Texnology from "./components/AdminBlok/Texnology";
import Toifalar from "./components/AdminBlok/Toifalar";
import { useState } from "react";
import NotFound from "./pages/NotFound";
import { useFetch } from "./hook/useFetch";

function App() {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || "",
  );
  const [complate, IsComplate] = useState(false);

  const url = "http://localhost:1212/api/products";
  const { data, loader, error } = useFetch(url);
  const category = data && data.categories;

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />}>
          <Route
            path="login"
            element={<Login token={token} setToken={setToken} />}
          />
          <Route index element={<All />} />
          <Route path="modelA" element={<ModelA />} />
          <Route path="modelB" element={<ModelB />} />
          <Route path="modelC" element={<ModelC />} />
          <Route path="modelD" element={<ModelD />} />
          <Route path="modelE" element={<ModelE />} />
          <Route path="modelF" element={<ModelF />} />
        </Route>
        <Route index element={<Home />} />
        token ?
        <Route path="admin" element={<Admin />}>
          <Route
            path="buyrtmalar"
            index
            element={<Buyurtmalar token={token} setToken={setToken} />}
          />
          ,
          <Route path="Customers" element={<Customers />} />,
          <Route path="Location" element={<LOcation />} />,
          <Route path="Mahsulotlar" element={<Mahsulotlar />} />,
          <Route path="Texnology" element={<Texnology />} />,
          <Route
            path="Toifalar"
            element={<Toifalar complate={complate} IsComplate={IsComplate} />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
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
