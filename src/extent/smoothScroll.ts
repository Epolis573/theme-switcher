import Lenis from "lenis";

export function scrollComponent() {
  return {
    lenis: null as InstanceType<typeof Lenis> | null,

    init(): void {
      this.lenis = new Lenis({
        duration: 1,
        easing: (t: number): number => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      const update = (time: number): void => {
        this.lenis?.raf(time);
        requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    },

    scrollTo(event: Event): void {
      const target = event.currentTarget as HTMLAnchorElement;
      const targetId = target.getAttribute("href");
      if (!targetId) return;
      const targetElement = document.querySelector(targetId) as HTMLElement;
      if (targetElement && this.lenis) {
        this.lenis.scrollTo(targetElement);
      }
    },
  };
}