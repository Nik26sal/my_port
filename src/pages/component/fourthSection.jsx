function FourthSection(){
    return(
       <section className="bg-slate-950 text-white py-24">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold mb-12">
      Education & Experience
    </h2>

    <div className="grid md:grid-cols-2 gap-12">
      <div>
        <h3 className="text-xl font-semibold mb-6">
          Education
        </h3>

        <div className="border border-slate-800 rounded-2xl p-6 bg-black">
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
        <h3 className="text-xl font-semibold mb-6">
          Training & Experience
        </h3>

        <div className="border border-slate-800 rounded-2xl p-6 bg-black">
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

    )
}

export default FourthSection;