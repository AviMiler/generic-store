import { useEffect, useState } from "react";
import CaregoryList from "../components/CategoryList";
import TopMenu from "../components/TopMenu";
import { useSelector } from "react-redux";

function useGetData() {}

function Caregories() {
  console.log("CaregoriesComp");

  const productsData = useSelector((state) => state.productsData);

  return (
    <>
      <TopMenu />
      <main>
        <h1>Categories</h1>
        <CaregoryList categories={productsData.categories} />
      </main>
    </>
  );
}
export default Caregories;
