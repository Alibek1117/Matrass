
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
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



function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />}>
          <Route index element={<All />} />
          <Route path="modelA+" element={<ModelAPlus />} />
          <Route path="modelB+" element={<ModelBPlus />} />
          <Route path="modelC" element={<ModelC />} />
          <Route path="modelC+" element={<ModelCPlus />} />
          <Route path="modelD" element={<ModelD />} />
          <Route path="modelYevro" element={<ModelYevro />} />
          <Route path="yangiTovarlar" element={<YangiTovarlar/>} />
          <Route path="modelA" element={<ModelA/>} />
        </Route>
        <Route path="admin" element={<Admin />} />
        <Route path="login" element={<Login />} />
      </Route>,
    ),
  );

  return (
    <div className="App">
     <RouterProvider router ={routes}/>

    </div>
  );
}

export default App;
