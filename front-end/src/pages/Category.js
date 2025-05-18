import ProductsList from "../components/ProductsList";
import styles from "../style/Category.module.css";
import TopMenu from "../components/TopMenu.js";
import { useLocation } from "react-router-dom";

function Caregory() {
  // Assuming you want to display the first category for now

  const category = useLocation().state?.category;

  return (
    <>
      <TopMenu />

      <main>
        <div className={styles.category}>
          <h1>{category.name}</h1>
          <p>
            Discover our wide selection of quality products in this category —
            carefully chosen to meet your everyday needs and preferences.
            Whether you're looking for something practical or just browsing,
            you'll find reliable items at great value.
          </p>
          <ProductsList products={category.products} />
        </div>
      </main>
    </>
  );
}

export default Caregory;
