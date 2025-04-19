import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './ScrollAnchorMessage.module.css';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';

// Extend HTMLDivElement to allow custom 'splide' property
interface SplideDivElement extends HTMLDivElement {
  splide?: Splide;
}

const ScrollAnchorMessage: React.FC = () => {
  const splideRef = useRef<SplideDivElement>(null);

  useEffect(() => {
    const currentDiv = splideRef.current;
    if (currentDiv) {
      // Destroy any previous instance to avoid duplicates
      if (currentDiv.splide) {
        currentDiv.splide.destroy();
      }
      const splide = new Splide(currentDiv, {
        type: 'loop',
        perPage: 3,
        gap: '1.25rem',
        pagination: false,
        arrows: false,
        drag: false,
        autoWidth: true,
        autoScroll: {
          speed: 1.5,
          pauseOnHover: false,
          pauseOnFocus: false,
        },
      });
      splide.mount({ AutoScroll });
      // Store instance for clean-up if needed
      currentDiv.splide = splide;
      // cleanup
      return () => {
        splide.destroy();
      };
    }
  }, []);

  return (
    <div id="scroll-anchor-message" className={styles.container}>
      <a
        href="https://epolis573.github.io/about_latte/"
        className={`${styles.link} group`}
      >
        <div className={styles.wrapper}>
          <div className={styles.inner}>
            <div
              className={`splide ${styles.carousel}`}
              id="company-slider"
              role="region"
              aria-roledescription="carousel"
              ref={splideRef}
            >
              <div className="splide__track" id="company-slider-track" aria-live="off" aria-atomic="true">
                <ul className="splide__list">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <li
                      key={i}
                      className={`splide__slide ${styles.slide}`}
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`${(i % 3) + 1} of 3`}
                      aria-hidden={i !== 1}
                    >
                      <div className={styles.thumbnail}>
                        <Image
                          src="/images/bannerscrollanchor.gif"
                          alt="Scroll anchor banner"
                          width={86}
                          height={57}
                          priority
                        />
                      </div>
                      <p className={styles.text}>
                        Find my other works here | こちらから他の作品をご覧いただけます。
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.arrowWrap}>
              <span className={styles.arrowButton}>
                <Image
                  src="/right-arrow.svg"
                  alt="Right Arrow"
                  width={26} // Example values, adjust as needed
                  height={18}
                  className={`${styles.arrowIcon} ${styles.arrowIconBefore} md:w-6.5 md:h-4.5`}
                  priority
                />
                <Image
                  src="/right-arrow.svg"
                  alt="Right Arrow"
                  width={26} // Example values, adjust as needed
                  height={18}
                  className={`${styles.arrowIcon} ${styles.arrowIconAfter} md:w-6.5 md:h-4.5`}
                  priority
                />
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ScrollAnchorMessage;
