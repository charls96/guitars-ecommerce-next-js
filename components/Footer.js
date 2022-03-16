import Link from "next/link";
import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/about-us">About us</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/shop">Shop</Link>
        </nav>

        <p className={styles.copyright}>All the rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
