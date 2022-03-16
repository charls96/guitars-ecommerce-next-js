import Layout from "../components/Layout";
import Image from "next/image"
import styles from "../styles/AboutUs.module.css"

const AboutUs = () => {
  return (
    <Layout page="About Us">
      <main className="container">
        <h2 className="heading">About Us</h2>
        <div className={styles.content}>
          <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="about-us.jpg" />
          <div>
            <p>
              Sed eleifend lacus vel nisl pretium, sed tincidunt mi porttitor.
              Donec id neque non est consequat mattis. Aliquam et tempor elit.
              Nam ultrices dolor eget dolor euismod, ut congue lacus hendrerit.
              Donec imperdiet finibus viverra. Vestibulum aliquam gravida justo
              in mattis.
            </p>
            <p>
              Sed eleifend lacus vel nisl pretium, sed tincidunt mi porttitor.
              Donec id neque non est consequat mattis. Aliquam et tempor elit.
              Nam ultrices dolor eget dolor euismod, ut congue lacus hendrerit.
              Donec imperdiet finibus viverra. Vestibulum aliquam gravida justo
              in mattis. Donec vehicula, leo vitae egestas feugiat, eros ex
              sodales metus, vel viverra purus felis eu enim.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AboutUs;
