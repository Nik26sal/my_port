import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FourthSection() {
  const sectionRef = useRef(null);
  const mainHeadingRef = useRef(null);
  const columnHeadingsRef = useRef([]);
  const cardsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
    tl.fromTo(
      mainHeadingRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      }
    )
      .fromTo(
        columnHeadingsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .fromTo(
        cardsRef.current,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.25,
          ease: "power2.out",
        },
        "-=0.2"
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2
          ref={mainHeadingRef}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Education & Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3
              ref={(el) => (columnHeadingsRef.current[0] = el)}
              className="text-xl font-semibold mb-6"
            >
              Education
            </h3>

            <div
              ref={(el) => (cardsRef.current[0] = el)}
              className="border border-slate-800 rounded-2xl p-6 bg-black"
            >
              <h4 className="font-semibold text-lg">
                Bachelor of Technology – Computer Science
              </h4>

              <p className="text-slate-400 mt-1">
                GLA University, Mathura
              </p>

              <p className="text-slate-500 text-sm mt-2">
                CGPA: 8.38 · Expected Graduation: July 2026
              </p>
            </div>
          </div>
          <div>
            <h3
              ref={(el) => (columnHeadingsRef.current[1] = el)}
              className="text-xl font-semibold mb-6"
            >
              Training & Experience
            </h3>

            <div
              ref={(el) => (cardsRef.current[1] = el)}
              className="border border-slate-800 rounded-2xl p-6 bg-black"
            >
              <h4 className="font-semibold text-lg">
                Job-Oriented Programming Training (Java)
              </h4>

              <p className="text-slate-400 mt-1">
                GLA University
              </p>

              <p className="text-slate-400 text-sm mt-4">
                • Practiced Data Structures & Algorithms including recursion,
                dynamic programming, and graphs.
              </p>

              <p className="text-slate-400 text-sm mt-2">
                • Solved competitive programming problems on LeetCode using Java.
              </p>

              <p className="text-slate-500 text-sm mt-2">
                June 2024 – July 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FourthSection;
