function FirstSection() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center">
      <section className="max-w-6xl mx-auto px-6">
        <p className="text-sm text-slate-400 mb-4">
          Hi, I’m
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Nikhil Bansal
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6">
          Full Stack Developer & CS Undergraduate
        </h2>
        <p className="max-w-2xl text-slate-400 mb-8">
          Computer Science undergraduate experienced in building full-stack
          applications using React, Node.js, MongoDB, and Java.
          Solved 500+ DSA problems on LeetCode and actively preparing
          for software development roles.
        </p>
        <div className="flex flex-wrap gap-4">
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
      </section>
    </main>
  );
}

export default FirstSection;
