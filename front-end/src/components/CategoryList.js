import { Link } from "react-router-dom";
import styles from "../style/CategoryList.module.css";

function CaregoryList({ categories }) {
  console.log("categoryList");

  if (!categories || categories.length === 0) {
    return <div className={styles.categoryList}>No categories available</div>;
  }

  return (
    <div className={styles.categoryList}>
      {categories.map((category) => (
        <Link
          to={`/category/${category.name}`}
          relative="path"
          state={{ category }}
          key={category.name}
          className={styles.categoryItem}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}

export default CaregoryList;
