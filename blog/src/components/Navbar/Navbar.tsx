import Link from 'next/link';
import styles from './Navbar.module.css';
import { BiSearchAlt, BiPlus, BiSolidUserCircle } from 'react-icons/bi';
import logo from '@/assets/logo.svg';
import Image from 'next/image';
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__left}>
        <Link href="/pages/profile">
          <BiSolidUserCircle className={styles.icon} />
        </Link>
        <Link href="/pages/addblog">
          <BiPlus className={styles.icon} />
        </Link>
        <Link href="/pages/search">
          <BiSearchAlt className={styles.icon} />
        </Link>
      </div>
      <div className={styles.navbar__middle}>
        <Link href="/">
          <Image src={logo} alt="logo of blogs app" className={styles.logo} />
        </Link>
      </div>
      <div className={styles.navbar__right}>
        <Link href="/">Home</Link>
        <Link href="/pages/about">About</Link>
        <Link href="/pages/contact">Contact</Link>
      </div>
    </div>
  );
};
export default Navbar;
