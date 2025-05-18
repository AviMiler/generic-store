import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductsData } from "./redux/productsDataSlice.js";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { RouterProvider } from "react-router-dom";
import router from "./router.js";
import { getData } from "./api/api.js";
import { Outlet } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getData("productsData").then((data) => {
      if (data) {
        dispatch(setProductsData(data));
      } else {
        console.error("Invalid productsData from API", data);
      }
    });
  }, [dispatch]);
  return <Outlet />;
}

export default App;
