import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <header className={styles.wrapper}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    Next.js & Redux Study
                </div>
                <div className={styles.menu}>
                    <Link className={styles.link} href="/">홈</Link>
                    <Link className={styles.link} href="/member">회원관리</Link>
                    <Link className={styles.link} href="/member/register">회원가입</Link>
                    <Link className={styles.link} href="/emp">제품관리</Link>
                    <Link className={styles.link} href="/emp/register">직원가입</Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;