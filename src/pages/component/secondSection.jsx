function SecondSection() {
    return (
            <section
                id="projects"
                className="bg-slate-950 text-white py-24"
            >
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Projects
                    </h2>

                    <p className="text-slate-400 mb-12 max-w-2xl">
                        Here are some of the projects I’ve built while learning full-stack
                        development using React, Node.js, MongoDB, and JavaScript.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="border border-slate-800 rounded-2xl p-6 bg-black hover:border-slate-600 transition">
                            <h3 className="text-xl font-semibold mb-2">
                                Chatify
                            </h3>

                            <p className="text-slate-400 text-sm mb-4">
                                Real-time chat application with authentication and message storage
                                using Socket.IO, React, Node.js, and MongoDB.
                            </p>

                            <p className="text-xs text-slate-500 mb-6">
                                React · Node.js · MongoDB · Socket.IO · JWT
                            </p>

                            <div className="flex gap-4 text-sm">
                                <a
                                    href="https://github.com/Nik26sal/chatify"
                                    target="_blank"
                                    className="text-indigo-400 hover:underline"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                        <div className="border border-slate-800 rounded-2xl p-6 bg-black hover:border-slate-600 transition">
                            <h3 className="text-xl font-semibold mb-2">
                                SocialX
                            </h3>

                            <p className="text-slate-400 text-sm mb-4">
                                Blogging platform where users can create, edit, and delete posts.
                                Focused on reusable components and optimized database queries.
                            </p>

                            <p className="text-xs text-slate-500 mb-6">
                                React · Node.js · Express · MongoDB
                            </p>

                            <div className="flex gap-4 text-sm">
                                <a
                                    href="https://github.com/Nik26sal/SocialX"
                                    target="_blank"
                                    className="text-indigo-400 hover:underline"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                        <div className="border border-slate-800 rounded-2xl p-6 bg-black hover:border-slate-600 transition">
                            <h3 className="text-xl font-semibold mb-2">
                                Photo Vault
                            </h3>

                            <p className="text-slate-400 text-sm mb-4">
                                Secure photo storage app with encrypted authentication and cloud
                                image upload using Cloudinary.
                            </p>

                            <p className="text-xs text-slate-500 mb-6">
                                React · Node.js · MongoDB · Cloudinary
                            </p>

                            <div className="flex gap-4 text-sm">
                                <a
                                    href="https://github.com/Nik26sal/photoVault"
                                    target="_blank"
                                    className="text-indigo-400 hover:underline"
                                >
                                    GitHub
                                </a>

                                <a
                                    href="https://photo-vault-six.vercel.app/"
                                    target="_blank"
                                    className="text-indigo-400 hover:underline"
                                >
                                    Live
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
    )
}

export default SecondSection