import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Home from "./pages/Home";
//ModelTypes
import All from "./components/modelType/All";
import ModelAPlus from "./components/modelType/ModelA+";
import ModelBPlus from "./components/modelType/ModelB+";
import ModelC from "./components/modelType/ModelC";
import ModelCPlus from "./components/modelType/ModelC+";
import ModelD from "./components/modelType/ModelD";
import ModelYevro from "./components/modelType/ModelYevro";
import YangiTovarlar from "./components/modelType/RangiTovarlar";
import ModelA from "./components/modelType/ModelA";
import Buyurtmalar from "./components/AdminBlok/Buyurtmalar";
import Customers from "./components/AdminBlok/Customers";
import LOcation from "./components/AdminBlok/Location";
import Mahsulotlar from "./components/AdminBlok/Mahsulotlar";
import Texnology from "./components/AdminBlok/Texnology";
import Toifalar from "./components/AdminBlok/Toifalar";
import { useState } from "react";
import NotFound from "./pages/NotFound";

function App() {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || "",
  );
  // const [token, setToken] = useState('');
  const [complate, IsComplate] = useState(false);

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />}>
<<<<<<< HEAD
          <Route
            path="login"
            element={<Login token={token} setToken={setToken} />}
          />
=======
          <Route path="login" element={<Login token={token} setToken={setToken} />} />
>>>>>>> 11a9e73292543a776c16f82d202a5bfbe0891cdf
          <Route index element={<All />} />
          <Route path="modelA+" element={<ModelAPlus />} />
          <Route path="modelB+" element={<ModelBPlus />} />
          <Route path="modelC" element={<ModelC />} />
          <Route path="modelC+" element={<ModelCPlus />} />
          <Route path="modelD" element={<ModelD />} />
          <Route path="modelYevro" element={<ModelYevro />} />
          <Route path="yangiTovarlar" element={<YangiTovarlar />} />
          <Route path="modelA" element={<ModelA />} />
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
