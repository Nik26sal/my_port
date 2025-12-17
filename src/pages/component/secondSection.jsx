import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SecondSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
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
        cardsRef.current,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.2"
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2
          ref={headingRef}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Projects
        </h2>
        <p
          ref={paraRef}
          className="text-slate-400 mb-12 max-w-2xl"
        >
          Here are some of the projects I’ve built while learning full-stack
          development using React, Node.js, MongoDB, and JavaScript.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[ 
            {
              title: "Chatify",
              desc:
                "Real-time chat application with authentication and message storage using Socket.IO, React, Node.js, and MongoDB.",
              tech: "React · Node.js · MongoDB · Socket.IO · JWT",
              github: "https://github.com/Nik26sal/chatify",
            },
            {
              title: "SocialX",
              desc:
                "Blogging platform where users can create, edit, and delete posts. Focused on reusable components and optimized database queries.",
              tech: "React · Node.js · Express · MongoDB",
              github: "https://github.com/Nik26sal/SocialX",
            },
            {
              title: "Photo Vault",
              desc:
                "Secure photo storage app with encrypted authentication and cloud image upload using Cloudinary.",
              tech: "React · Node.js · MongoDB · Cloudinary",
              github: "https://github.com/Nik26sal/photoVault",
              live: "https://photo-vault-six.vercel.app/",
            },
          ].map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="border border-slate-800 rounded-2xl p-6 bg-black hover:border-slate-600 transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-slate-400 text-sm mb-4">
                {project.desc}
              </p>

              <p className="text-xs text-slate-500 mb-6">
                {project.tech}
              </p>

              <div className="flex gap-4 text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-indigo-400 hover:underline"
                >
                  GitHub
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-indigo-400 hover:underline"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
