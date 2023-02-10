import Link from "next/link"
import styles from '@/styles/Header.module.scss'
import React, {useState} from "react"

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.hamburger} ${openMenu ? styles.open : undefined}`} onClick={() => menuFunction()}></div>
        <div className={`${styles.overlay} ${openMenu ? styles.open : undefined}`} onClick={() => menuFunction()}></div>
        <nav className={`${styles.nav} ${openMenu ? styles.open : undefined}`} onClick={() => menuFunction()}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href={`/blogs/`}>
                <p>ブログ一覧</p>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}