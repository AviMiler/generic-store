import TopMenu from "../components/TopMenu";
import Styles from "../style/About.module.css";

function About() {
  return (
    <>

        <TopMenu />

      <main>
        <div className={Styles.about}>
          <h1>About Us</h1>
          <p>
            At Generic Store, we believe shopping should be simple, honest, and
            convenient. We started with a single goal — to provide quality
            products at fair prices, without the fuss. Whether you're looking
            for everyday essentials or something a little special, we're here to
            make your shopping experience easy and reliable. Driven by passion,
            built on trust — welcome to Generic Store.{" "}
          </p>
        </div>
      </main>
    </>
  );
}
export default About;
