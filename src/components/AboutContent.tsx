"use client";

import React, { useEffect, useState } from "react";
import styles from './AboutContent.module.css'
export default function AboutContent() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section className={`${styles["p-about__box"]} ${fadeIn ? styles["fade-in"] : ""}`}>
      <h1 className={styles["p-about__title"]}>About</h1>

      <p className={styles["p-about__box-en"]}>
        I&apos;m Nguyen Hai Anh.
        I work as a front-end engineer.<br />
        On this site, I&apos;ve featured the theme switching function using customized shadcn/ui components.<br />
        I enjoy exploring various techniques, including interactive 3D expressions and web animations.
      </p>

      <p className={styles["p-about__box-ja"]}>
        フロントエンド領域のエンジニアをしています。<br />
        このサイトでは、カスタマイズした shadcn/ui コンポーネントを使ってテーマ切り替え機能を実装しています。<br />
        インタラクティブな3D表現やウェブアニメーションなど、さまざまな技術を探求するのが好きです。
      </p>
      <div className={styles["social-icons"]}>
      <a className={styles["github-icon"]}
        href="https://github.com/Epolis573"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      ></a>

      <a className={styles["facebook-icon"]}
        href="https://www.facebook.com/Latte2dx/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      ></a>
      </div>
    </section>
    
  );
}
