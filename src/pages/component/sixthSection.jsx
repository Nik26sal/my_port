import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SixthSection() {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-slate-950 text-slate-500 py-6 text-center text-sm"
    >
      © {new Date().getFullYear()} Nikhil Bansal. Built with Next.js & Tailwind CSS.
    </footer>
  );
}

export default SixthSection;
