import styles from '../style/SearchBar.module.css';

function SearchBar(){
    return(
        <div className={styles.searchBar}>
          <input type="text" placeholder="search..." />
          <button type="submit">search</button>
        </div>
    );
}

export default SearchBar;