import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FirstSection() {
  const name = "Nikhil Bansal";
  const sectionRef = useRef(null);

  const lettersRef = useRef([]);
  const imgRef = useRef(null);
  const subtitleRef = useRef(null);
  const paraRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
    tl.fromTo(
      imgRef.current,
      { opacity: 0, scale: 0.8, x: -50 },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
      }
    )
      .fromTo(
        lettersRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.12,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.2"
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
        buttonsRef.current.children,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.2"
      );
  }, []);

  return (
    <main
      ref={sectionRef}
      className="min-h-screen bg-black text-white flex items-center"
    >
      <section className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        
        <div className="flex-shrink-0">
          <img
            ref={imgRef}
            src="https://avatars.githubusercontent.com/u/114744576?s=400&u=d74b08e6234eea386a7df7562b4f172895e23b44&v=4"
            alt="Profile"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-indigo-500 object-cover"
          />
        </div>

        <div>
          <p className="text-sm text-slate-400 mb-4">
            Hi, I’m
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {name.split("").map((letter, index) => (
              <span
                key={index}
                ref={(el) => (lettersRef.current[index] = el)}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h1>
          <h2
            ref={subtitleRef}
            className="text-3xl md:text-5xl font-bold text-slate-400 mb-6"
          >
            Full Stack Developer & CS Undergraduate
          </h2>
          <p
            ref={paraRef}
            className="max-w-2xl text-slate-400 mb-8"
          >
            Computer Science undergraduate experienced in building full-stack
            applications using React, Node.js, MongoDB, and Java. Solved 500+ DSA
            problems on LeetCode and actively preparing for software development
            roles.
          </p>
          <div ref={buttonsRef} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition"
            >
              View Projects
            </a>
            <a
              href="https://github.com/Nik26sal"
              target="_blank"
              className="px-6 py-3 rounded-xl border border-slate-600 hover:border-slate-400 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default FirstSection;
