import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ThirdSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const blocksRef = useRef([]);

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
        blocksRef.current,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.2"
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2
          ref={headingRef}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Skills & Technologies
        </h2>
        <p
          ref={paraRef}
          className="text-slate-400 mb-12 max-w-2xl"
        >
          Technologies and tools I’ve worked with while building projects and
          solving real-world problems.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Languages",
              items: ["Java", "JavaScript"],
            },
            {
              title: "Frontend",
              items: ["React.js", "Tailwind CSS", "HTML & CSS"],
            },
            {
              title: "Backend & Databases",
              items: ["Node.js", "Express.js", "MongoDB", "SQL"],
            },
            {
              title: "Tools & Platforms",
              items: [
                "Git & GitHub",
                "REST APIs",
                "Socket.IO",
                "Cloudinary",
                "Vercel",
              ],
            },
            {
              title: "Core CS Concepts",
              items: [
                "Data Structures & Algorithms",
                "Operating Systems",
                "DBMS",
              ],
            },
            {
              title: "Problem Solving",
              items: [
                "500+ DSA problems solved (LeetCode)",
                "LeetCode & Codeforces contests",
              ],
            },
          ].map((block, index) => (
            <div
              key={index}
              ref={(el) => (blocksRef.current[index] = el)}
            >
              <h3 className="text-xl font-semibold mb-4">
                {block.title}
              </h3>
              <ul className="space-y-2 text-slate-400">
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ThirdSection;
