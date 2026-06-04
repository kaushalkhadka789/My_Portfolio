import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable custom cursor on touch/mobile devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const dot = dotRef.current;
    const ring = ringRef.current;

    // Set initial positions
    gsap.set(dot, { xPercent: -50, yPercent: -50 });
    gsap.set(ring, { xPercent: -50, yPercent: -50 });

    // GSAP quickTo for smooth cursor lag
    const xTo = gsap.quickTo(ring, "x", { duration: 0.3, ease: "power3.out" });
    const yTo = gsap.quickTo(ring, "y", { duration: 0.3, ease: "power3.out" });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      
      // Move dot instantly
      gsap.set(dot, { x: clientX, y: clientY });
      
      // Move ring with lag
      xTo(clientX);
      yTo(clientY);
    };

    const handleMouseOver = (e) => {
      // Scale up if hovering links, buttons, or clickable elements
      const target = e.target;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.classList.contains('clickable') ||
        target.closest('.clickable');

      if (isClickable) {
        document.body.classList.add('cursor-hover');
      } else {
        document.body.classList.remove('cursor-hover');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.classList.remove('cursor-hover');
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </>
  );
};

export default CustomCursor;
