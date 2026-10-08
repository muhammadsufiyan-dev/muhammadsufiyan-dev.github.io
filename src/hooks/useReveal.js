import { useEffect, useRef } from 'react'

/**
 * Attaches a one-time fade-up reveal to an element when it scrolls into
 * view. Lightweight (IntersectionObserver, no GSAP) so it's cheap to use
 * on many elements across a page. Respects prefers-reduced-motion.
 *
 * Usage: const ref = useReveal(); <div ref={ref} className="reveal-init">
 */
export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px', ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

/**
 * Same as useReveal but returns an array of refs for staggered children —
 * each one reveals independently as it individually enters the viewport
 * (visual stagger comes from each card's own scroll position, plus a small
 * CSS transition-delay per index via the d1..d5 helper classes).
 *
 * `depsKey` is an optional extra value (e.g. an active filter name) to
 * re-run observation when the set of rendered items changes shape but the
 * count stays the same — e.g. flipping between two single-item filter
 * categories swaps the DOM node without changing `count`, which would
 * otherwise leave the new node un-observed and stuck invisible.
 */
export function useRevealGroup(count, depsKey) {
  const refs = useRef([])
  refs.current = Array.from({ length: count }, (_, i) => refs.current[i] || { current: null })

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const observers = refs.current.map((r) => {
      const el = r.current
      if (!el) return null

      if (reduced) {
        el.classList.add('is-visible')
        return null
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            observer.unobserve(el)
          }
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
      )
      observer.observe(el)
      return observer
    })

    return () => observers.forEach((o) => o && o.disconnect())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, depsKey])

  return refs.current
}
