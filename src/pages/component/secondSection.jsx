import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SecondSection() {
  const personalProjects = [
    {
      title: "Chatify",
      desc:
        "Real-time chat application with authentication and message storage using Socket.IO, built with a scalable backend architecture.",
      tech: ["React", "Node.js", "MongoDB", "Socket.IO", "JWT"],
      github: "https://github.com/Nik26sal/chatify",
    },
    {
      title: "SocialX",
      desc:
        "Blogging platform allowing users to create, edit, and manage posts with optimized REST APIs.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/Nik26sal/SocialX",
      live: "https://social-x-phi.vercel.app/",
    },
    {
      title: "Photo Vault",
      desc:
        "Secure photo storage app with encrypted authentication and cloud image uploads.",
      tech: ["React", "Node.js", "MongoDB", "Cloudinary"],
      github: "https://github.com/Nik26sal/photoVault",
      live: "https://photo-vault-six.vercel.app/",
    },
  ];

  const teamProjects = [
    {
      title: "Sand – Video Streaming Platform",
      role: "Backend Developer",
      desc:
        "MERN-based video streaming platform developed in a team of four. I handled backend APIs, authentication, video management, and database design while coordinating with frontend members.",
      tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    },
    {
      title: "BookMate – Book Collection Platform",
      role: "Backend Developer",
      desc:
        "Group project focused on managing and organizing books. I worked on backend APIs and authentication with a teammate while collaborating with an entirely new team.",
      tech: ["Node.js", "Express", "MongoDB", "JWT"],
    },
    {
      title: "Blockchain + MERN Voting System",
      role: "Backend Developer (Ongoing)",
      desc:
        "An ongoing project combining Blockchain and MERN stack to build a secure voting system. I work on backend logic, API integration, and coordination with blockchain components.",
      tech: ["MERN Stack", "Blockchain", "Smart Contracts"],
    },
  ];

  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const ProjectCard = ({ project, index, isTeam }) => (
    <div
      ref={(el) => (cardsRef.current[index] = el)}
      className="bg-black border border-slate-800 rounded-2xl p-6 hover:border-indigo-500 transition"
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        {isTeam && (
          <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400">
            {project.role}
          </span>
        )}
      </div>

      <p className="text-slate-400 text-sm mb-4">{project.desc}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t, i) => (
          <span
            key={i}
            className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300"
          >
            {t}
          </span>
        ))}
      </div>

      {!isTeam && (
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
      )}
    </div>
  );

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6 space-y-20">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Personal Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {personalProjects.map((p, i) => (
              <ProjectCard key={i} project={p} index={i} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Team & Group Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamProjects.map((p, i) => (
              <ProjectCard
                key={i}
                project={p}
                index={i + personalProjects.length}
                isTeam
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
