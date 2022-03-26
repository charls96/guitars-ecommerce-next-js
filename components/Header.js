import Link from "next/link";
import styles from "../styles/Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.bar}>
          <Link href="/">
            <a>
              <Image width={400} height={100} src="/img/logo.svg" alt="logo" />
            </a>
          </Link>
          <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/about-us">About us</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/shop">Shop</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
