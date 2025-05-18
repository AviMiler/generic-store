import styles from '../style/Banner.module.css';
function Banner({imageName}) {
  return (
    <div className={styles.banner}>
      <img
        src={require(`../assets/${imageName}`)}
        alt="Banner"
        className="bannerImage"
      />
    </div>
  );
}
export default Banner;