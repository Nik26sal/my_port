function FifthSection(){
    return(
        <section
  id="contact"
  className="bg-black text-white py-24"
>
  <div className="max-w-6xl mx-auto px-6">

    {/* Title */}
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Get In Touch
    </h2>

    <p className="text-slate-400 mb-10 max-w-2xl">
      I’m currently open to internship and software development opportunities.
      Feel free to reach out if you’d like to connect or collaborate.
    </p>

    {/* Contact Links */}
    <div className="flex flex-wrap gap-6">

      <a
        href="mailto:nikhil.bansal1_cs22@gla.ac.in"
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

    )
}

export default FifthSection