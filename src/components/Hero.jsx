import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import headshotCutout from '../assets/headshot-cutout.png'
import { projects } from '../data/projects'
import '../styles/hero.css'

const PHRASES = [
  'websites that just work.',
  'Flutter apps for iOS & Android.',
  'e-commerce platforms.',
  'admin dashboards & back-ends.',
]

export default function Hero() {
  const heroRef = useRef(null)
  const photoWrapRef = useRef(null)
  const photoRef = useRef(null)
  const eyebrowRef = useRef(null)
  const nameRef = useRef(null)
  const roleRef = useRef(null)
  const typeRowRef = useRef(null)
  const typeTextRef = useRef(null)
  const descRef = useRef(null)
  const ctaRef = useRef(null)
  const statsRef = useRef(null)

  // entrance animation — runs once on load, no scroll-linked motion
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set(photoRef.current, { opacity: 1 })
        gsap.set(nameRef.current, { y: '0%' })
        gsap.set(
          [eyebrowRef.current, roleRef.current, typeRowRef.current, descRef.current, ctaRef.current, statsRef.current],
          { opacity: 1, y: 0 }
        )
        return
      }

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.fromTo(
        photoRef.current,
        { opacity: 0, scale: 1.08, filter: 'blur(26px)' },
        { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.5 }
      )
        .fromTo(eyebrowRef.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.85')
        .to(nameRef.current, { y: '0%', duration: 0.8 }, '-=0.25')
        .fromTo(roleRef.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.35')
        .fromTo(typeRowRef.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
        .fromTo(descRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.55 }, '-=0.25')
        .fromTo(ctaRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.55 }, '-=0.28')
        .fromTo(statsRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.55 }, '-=0.28')
    })

    return () => ctx.revert()
  }, [])

  // continuous typewriter loop — plain JS, independent of GSAP's timeline so
  // it keeps running even if the entrance animation is interrupted or skipped
  useEffect(() => {
    const el = typeTextRef.current
    if (!el) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      el.textContent = PHRASES[0]
      return
    }

    let phraseIndex = 0
    let charIndex = 0
    let deleting = false
    let timer

    const tick = () => {
      const current = PHRASES[phraseIndex]

      if (!deleting) {
        charIndex++
        el.textContent = current.slice(0, charIndex)
        if (charIndex === current.length) {
          deleting = true
          timer = setTimeout(tick, 1500)
          return
        }
      } else {
        charIndex--
        el.textContent = current.slice(0, charIndex)
        if (charIndex === 0) {
          deleting = false
          phraseIndex = (phraseIndex + 1) % PHRASES.length
        }
      }
      timer = setTimeout(tick, deleting ? 28 : 48)
    }

    timer = setTimeout(tick, 600)
    return () => clearTimeout(timer)
  }, [])

  // subtle mouse-parallax tilt on the photo — desktop (fine pointer) only
  useEffect(() => {
    const hero = heroRef.current
    const wrap = photoWrapRef.current
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!hero || !wrap || !fine || reduced) return

    let raf
    const handleMove = (e) => {
      const rect = hero.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width - 0.5
      const py = (e.clientY - rect.top) / rect.height - 0.5
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        wrap.style.transform = `translate3d(${px * -16}px, ${py * -12}px, 0)`
      })
    }
    const handleLeave = () => {
      wrap.style.transform = 'translate3d(0,0,0)'
    }

    hero.addEventListener('mousemove', handleMove)
    hero.addEventListener('mouseleave', handleLeave)
    return () => {
      hero.removeEventListener('mousemove', handleMove)
      hero.removeEventListener('mouseleave', handleLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero-bg">
        <div className="hero-glow" />
        <div className="hero-photo-wrap" ref={photoWrapRef}>
          <img className="hero-photo" ref={photoRef} src={headshotCutout} alt="Muhammad Sufiyan" />
        </div>
        <div className="hero-vignette" />
      </div>

      <div className="hero-content wrap">
        <p className="eyebrow" ref={eyebrowRef}>
          👋 Hi, I'm
        </p>

        <h1 className="hero-name">
          <span className="hero-name-mask">
            <span className="hero-name-in" ref={nameRef}>
              Muhammad Sufiyan
            </span>
          </span>
        </h1>

        <p className="hero-role" ref={roleRef}>
          Web &amp; Mobile App Developer
        </p>

        <p className="hero-type-row" ref={typeRowRef}>
          <span className="hero-type-label">I build</span>{' '}
          <span className="hero-type-text" ref={typeTextRef} />
          <span className="hero-type-cursor" aria-hidden="true" />
        </p>

        <p className="hero-desc" ref={descRef}>
          I design and build web and mobile products — from the first line of code to the client's
          hands.
        </p>
        <div className="hero-cta-row" ref={ctaRef}>
          <a href="#work" className="pill-btn">
            View my work
            <span className="pill-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </span>
          </a>
          <a href="#contact" className="text-link">
            GET IN TOUCH
          </a>
        </div>
        <div className="hero-stats" ref={statsRef}>
          <div>
            <strong>{projects.length}+</strong>
            <span>Projects created</span>
          </div>
          <div>
            <strong>9+</strong>
            <span>Technologies</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Responsive builds</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>SCROLL</span>
        <span className="ln" />
      </div>
    </section>
  )
}