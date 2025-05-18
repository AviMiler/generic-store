import React from "react";
import { getData } from "../api/api.js";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import styles from "../style/HomePage.module.css";
import TopMenu from "../components/TopMenu.js";
import CaregoryList from "../components/CategoryList.js";
import Banner from "../components/Banner.js";
import SearchBar from "../components/SearchBar.js";
import HomePageSections from "../components/HomePageSections.js";

function HomePage() {

  return (
    <>

        <TopMenu />
     

      <main>
        <Banner imageName={"banner.png"} />
        <SearchBar />
        <HomePageSections />
      </main>
    </>
  );
}

export default HomePage;
