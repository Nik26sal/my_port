import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FifthSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      }
    )
      .fromTo(
        paraRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .fromTo(
        linksRef.current.children,
        { opacity: 0, y: 20, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.2"
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-black text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2
          ref={headingRef}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Get In Touch
        </h2>
        <p
          ref={paraRef}
          className="text-slate-400 mb-10 max-w-2xl"
        >
          I’m currently open to internship and software development opportunities.
          Feel free to reach out if you’d like to connect or collaborate.
        </p>
        <div ref={linksRef} className="flex flex-wrap gap-6">
          <a
            href="mailto:bansalnikhil750@gmail.com"
            className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition"
          >
            Email Me
          </a>

          <a
            href="https://linkedin.com/in/nikhil-bansal-434745250"
            target="_blank"
            className="px-6 py-3 rounded-xl border border-slate-600 hover:border-slate-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Nik26sal"
            target="_blank"
            className="px-6 py-3 rounded-xl border border-slate-600 hover:border-slate-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://leetcode.com/u/Nik26sal/"
            target="_blank"
            className="px-6 py-3 rounded-xl border border-slate-600 hover:border-slate-400 transition"
          >
            LeetCode
          </a>
        </div>
      </div>
    </section>
  );
}

export default FifthSection;
