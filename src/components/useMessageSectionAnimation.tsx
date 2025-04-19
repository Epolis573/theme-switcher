import { useEffect, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Animates the section dom referenced by sectionRef. 
 * Accepts sectionRef as RefObject<HTMLDivElement | null>, compatible with React's useRef.
 */
export function useMessageSectionAnimation(
  sectionRef: RefObject<HTMLDivElement | null>
) {
  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trig) => trig.kill());
      gsap.killTweensOf(sectionRef.current);
    };
  }, [sectionRef]);
}
