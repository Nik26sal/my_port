function ThirdSection(){
    return(
        <section className="bg-black text-white py-24">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Skills & Technologies
    </h2>

    <p className="text-slate-400 mb-12 max-w-2xl">
      Technologies and tools I’ve worked with while building projects and
      solving real-world problems.
    </p>
    <div className="grid md:grid-cols-3 gap-10">
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Languages
        </h3>
        <ul className="space-y-2 text-slate-400">
          <li>Java</li>
          <li>JavaScript</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Frontend
        </h3>
        <ul className="space-y-2 text-slate-400">
          <li>React.js</li>
          <li>Tailwind CSS</li>
          <li>HTML & CSS</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Backend & Databases
        </h3>
        <ul className="space-y-2 text-slate-400">
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>SQL</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Tools & Platforms
        </h3>
        <ul className="space-y-2 text-slate-400">
          <li>Git & GitHub</li>
          <li>REST APIs</li>
          <li>Socket.IO</li>
          <li>Cloudinary</li>
          <li>Vercel</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Core CS Concepts
        </h3>
        <ul className="space-y-2 text-slate-400">
          <li>Data Structures & Algorithms</li>
          <li>Operating Systems</li>
          <li>DBMS</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Problem Solving
        </h3>
        <ul className="space-y-2 text-slate-400">
          <li>500+ DSA problems solved (LeetCode)</li>
          <li>LeetCode & Codeforces contests</li>
        </ul>
      </div>

    </div>
  </div>
</section>

    )
}

export default ThirdSection;