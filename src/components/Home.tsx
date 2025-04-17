import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';

interface HomeProps {
  bgOpacity?: number;
  children?: React.ReactNode;
}

export default function Home({ bgOpacity = 0.55, children }: HomeProps) {
  const [showBg, setShowBg] = useState(false);

  useEffect(() => {
    // Defer background image rendering until after mount
    setShowBg(true);
  }, []);

  return (
    <div className={styles.wrapper}>
      {showBg && (
        <div className={styles.bgImage} style={{ opacity: bgOpacity }} />
      )}
      <div className="flex ml-9 flex-col items-start justify-center min-h-screen">
        {children}
      </div>
    </div>
  );
}