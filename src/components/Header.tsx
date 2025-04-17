"use client";

import styles from "./Header.module.css";
import { ButtonAbout } from "./ui/button";
import Link from "next/link";
import { ThemeSwitch } from "./ui/switch";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isAbout = pathname === "/about";

  return (
    <header className="fixed top-0 left-0 w-full px-6 py-4 z-10 flex justify-between items-center">
      <Link href="/" className={`${styles.header} ${styles.headerTitle} text-xl font-bold`}>
        Theme Switcher
      </Link>

      <div className={styles.headerRight}>
        <ButtonAbout
          asChild
          className={`${styles.buttonAbout} cursor-pointer ${isAbout ? styles.buttonAboutActive : ""}`}
        >
          <Link href="/about" className={styles.buttonAboutLink}>
            <span className={`${styles.buttonAboutTextWrapper} cursor-pointer`}>
              <span className={styles.buttonAboutTextDefault}>About</span>
              <span className={styles.buttonAboutTextHover}>About</span>
            </span>
          </Link>
        </ButtonAbout>
        <ThemeSwitch className={styles.themeSwitch} />
      </div>
    </header>
  );
}