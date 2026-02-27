import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OverlayContent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // We animate each card as it enters the viewport
    const sections = gsap.utils.toArray('.gsap-section');

    // 1. Hero Animation — clean two-part approach
    const heroElements = gsap.utils.toArray('.hero-animate');
    if (heroElements.length > 0) {
      // Set invisible initially
      gsap.set(heroElements, { y: 20, opacity: 0 });

      // Part A: Fade IN immediately on load (not tied to scroll at all)
      // This ensures the text is always visible at the top regardless of scroll position
      gsap.to(heroElements, {
        y: 0,
        opacity: 1,
        stagger: 0.25,
        ease: "expo.out",
        duration: 1.4,
        delay: 0.4,
      });

      // Part B: Fade OUT as section leaves the screen top — toggleActions "reverse" restores
      // opacity to 1 when the user scrolls BACK UP, because GSAP re-plays the tween in reverse
      gsap.to(heroElements, {
        y: -30,
        opacity: 0,
        stagger: 0.08,
        ease: "power2.in",
        scrollTrigger: {
          trigger: '.hero-gsap',
          start: "top 10%",   // Hero top must be 10% from the viewport top
          end: "top -10%",    // Hero top must exit 10% past the viewport top
          // toggleActions: "onEnter onLeave onEnterBack onLeaveBack"
          // "reverse" on LeaveBack: when scrolling BACK down into section, tween plays backward → opacity goes to 1
          toggleActions: "play none none reverse",
        }
      });
    }

    sections.forEach((section) => {
      const texts = section.querySelectorAll('.animate-text');

      if (texts.length > 0) {
        // Set initial state
        gsap.set(texts, { y: 40, opacity: 0 });

        // Create a scrubbed timeline for each section
        gsap.to(texts, {
          y: 0,
          opacity: 1,
          stagger: 0.15, // Elements enter slightly offset
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 55%", // Start fading in firmly when entering the visual center
            end: "top 35%",   // Fully visible quickly
            scrub: 1,         // Tie directly to scroll with 1s smoothing
          }
        });

        // Fade out as it leaves the top
        gsap.to(texts, {
          y: -40,
          opacity: 0,
          stagger: 0.1,
          ease: "power2.in",
          scrollTrigger: {
            trigger: section,
            start: "top 15%",  // Hold visibility longer before fading
            end: "top -5%",    // Fade out completely as it crosses the top boundary 
            scrub: 1,
          }
        });
      }
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div className="overlay-container" ref={containerRef}>
      
      {/* 1. Hero Section (Init frame - closed box on minimal background) */}
      <section className="gsap-section hero-gsap" style={{ alignItems: 'center' }}>
        <h1 className="hero-title hero-animate">
          <span className="gold-text">Choco</span>Hub
        </h1>
        <p className="hero-subtitle hero-animate">An Unforgettable Unboxing</p>
        
        <div className="scroll-mouse hero-animate" style={{ marginTop: '3rem' }}>
          <div className="scroll-wheel"></div>
        </div>
      </section>

      {/* 2. Opening the box revealing the bouquet (Right Focus) */}
      <section className="gsap-section align-right">
        <div className="vision-card">
          <div className="vision-label animate-text">Signature Collection</div>
          <h2 className="vision-heading animate-text">The Perfect Gift</h2>
          <p className="vision-body animate-text">
            Where artisanal craftsmanship meets the ultimate expression of affection. 
            Experience the finest assortment of premium chocolates gracefully arranged 
            in a stunning, hand-tied bouquet.
          </p>
        </div>
      </section>

      {/* 3. Deep dive into bouquet details (Left Focus) */}
      <section className="gsap-section align-left">
        <div className="vision-card">
          <div className="vision-label animate-text">Tailored Experience</div>
          <h2 className="vision-heading animate-text">Bespoke Options</h2>
          <p className="vision-body animate-text">
            Every ribbon, every truffle, tailored exclusively for the one who holds 
            your heart. Select your favorite varieties and include a personalized, 
            hand-written love letter.
          </p>
          <button className="premium-btn animate-text ghost-btn">Explore Options</button>
        </div>
      </section>

      {/* 4. Feature highlight (Right Focus) */}
      <section className="gsap-section align-right">
        <div className="vision-card">
          <div className="vision-label animate-text">The Grand Finale</div>
          <h2 className="vision-heading animate-text">Beyond Chocolate</h2>
          <p className="vision-body animate-text">
            Elevate your gesture. An unforgettable unboxing experience that echoes 
            in eternity. Add plush companions or preserved luxury roses to complete 
            your perfect moment.
          </p>
          <button className="premium-btn animate-text ghost-btn">View Collection</button>
        </div>
      </section>

      {/* 5. Footer CTA (Centered, end of video timeline) */}
      <section className="gsap-section footer-gsap align-center">
        <div className="vision-card">
          <div className="vision-label animate-text">Send a Surprise</div>
          <h2 className="vision-heading animate-text" style={{ fontSize: '4rem' }}>Make Their Day</h2>
          <p className="vision-body animate-text" style={{ fontSize: '1.2rem', maxWidth: '600px' }}>
            Send a sweet, premium surprise directly to their door. Hand-delivered 
            with white-glove care.
          </p>
          <button className="premium-btn animate-text" style={{ padding: '1.2rem 3rem', marginTop: '1rem', border: 'none', background: 'var(--color-gold)', color: 'var(--color-dark)' }}>
            Let's send Love.....
          </button>
        </div>
      </section>

    </div>
  );
};

export default OverlayContent;
