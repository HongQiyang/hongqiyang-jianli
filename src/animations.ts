import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function runPageMotion(root: ParentNode = document): void {
  const revealItems = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'))

  if (prefersReducedMotion()) {
    revealItems.forEach((item) => {
      item.style.opacity = '1'
      item.style.transform = 'none'
    })
    return
  }

  revealItems.forEach((item, index) => {
    gsap.fromTo(
      item,
      { autoAlpha: 0, y: 18 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.38,
        delay: Math.min(index * 0.025, 0.1),
        ease: 'power3.out',
        clearProps: 'opacity,visibility,transform',
        scrollTrigger: {
          trigger: item,
          start: 'top 86%',
          once: true
        }
      }
    )
  })
}

export function refreshMotion(): void {
  ScrollTrigger.refresh()
}
