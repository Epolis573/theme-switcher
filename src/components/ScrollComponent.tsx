import { useEffect } from "react";
import Lenis from "lenis";

export default function ScrollComponent() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const scrollTo = (e: Event) => {
      const link = e.currentTarget as HTMLAnchorElement;
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      const target = document.querySelector(href);
      if (target instanceof HTMLElement) {
        lenis.scrollTo(target);
        e.preventDefault();
      }
    };

    const anchors = document.querySelectorAll("a[href^='#']");
    anchors.forEach((a) => a.addEventListener("click", scrollTo));

    return () => {
      anchors.forEach((a) => a.removeEventListener("click", scrollTo));
    };
  }, []);

  return null;
}
