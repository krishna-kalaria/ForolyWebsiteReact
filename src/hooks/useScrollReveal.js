import { useEffect } from 'react'

// Reveals every [data-anim] element (up, down, left, right, fade) once it scrolls
// into view. Re-scans on every route change. Optional data-delay (ms) staggers elements.
export function useScrollReveal(routeKey) {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-anim]:not(.in-view)')
    if (!elements.length) return undefined

    const reveal = (el) => {
      el.classList.add('in-view')
      if (el.dataset.delay) {
        el.addEventListener('transitionend', () => (el.style.transitionDelay = ''), { once: true })
      }
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach(reveal)
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          reveal(entry.target)
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0, rootMargin: '0px 0px -60px 0px' },
    )

    elements.forEach((el) => {
      if (el.dataset.delay) el.style.transitionDelay = `${el.dataset.delay}ms`
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [routeKey])
}
