import React from 'react'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Project from './Project'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
function Body() {
    const currentYear = new Date().getFullYear();

    return (
        <div className='w-full min-h-screen border overflow-x-hidden border-purple-600'>
            <Hero />
            <About />
            <Skills />
            <Project />

            {/* Quote Section */}
            {/* <div className='w-[80%] min-h-20 border m-auto text-center  p-2'>
                <h2 className='text-4xl'> My Learning so far...</h2>

                <h3 className='px-60 py-10 text-2xl italic'>
                    It's never too late to start, because the world usually sees your achievements not your whole journey...
                    <br />
                    <br />
                    So don't think too much and just implement what you learn in your jouney as you grow gradually...
                </h3>
            </div> */}

            {/* Footer Section */}
            {/* <div className='w-[80%] min-h-20 border m-auto flex items-center justify-around p-2'>
                <div className='w-[40%] text-center text-sm font-semibold border'>
                    <p>© 2026 Shivam Singh</p>
                    <p>Built with React & Tailwind CSS</p>
                </div>

                <div className='w-[40%] flex justify-end gap-10 border'>
                    <div className='p-2 border rounded-full'>
                        <SiGmail className='w-5 h-5' />
                    </div>
                    <div className='p-2 border rounded-full'>
                        <FaLinkedin className='w-5 h-5' />
                    </div>
                    <div className='p-2 border rounded-full'>
                        <FaGithub className='w-5 h-5' />
                    </div>
                </div>
            </div> */}

            {/* Quote Section */}
            <section className="w-[85%] max-md:w-[95%] mx-auto my-6 md:my-10 rounded-2xl overflow-hidden border-l border-r border-purple-500 shadow-lg shadow-fuchsia-500/60">
                <div className="bg-gradient-to-r from-slate-900/40 via-slate-900/20 to-slate-900/40 backdrop-blur-sm p-6 md:p-10">
                    <p className="text-sm sm:text-base tracking-wide uppercase text-white/80 italic font-semibold text-center">
                        My Learning so far...
                    </p>

                    <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-white">
                        Build, learn, repeat.
                    </h2>

                    <p className="mt-5 text-base sm:text-lg md:text-2xl text-white/90 text-center italic leading-relaxed mx-auto max-w-3xl">
                        “Progress isn’t about doing everything at once — it's about shipping small, learning from feedbacks, and improving with every iteration.”
                    </p>

                    <div className="mt-6 flex flex-col sm:flex-row justify-center text-center gap-3">
                        <span className="px-4 py-2 rounded-full border border-white/15 bg-white/5 text-white/90 text-sm font-semibold hover:border-purple-600">
                            Consistency &gt; perfection
                        </span>
                        <span className="px-4 py-2 rounded-full border border-white/15 bg-white/5 text-white/90 text-sm font-semibold hover:border-purple-600">
                            Learn by implementing
                        </span>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer id="socials" className="w-[85%] max-md:w-[95%] mx-auto mb-6 md:mb-10 rounded-2xl overflow-hidden border-l border-r border-purple-500 shadow-lg shadow-fuchsia-500/60">
                <div className="bg-white/5 backdrop-blur-sm p-5 md:p-6">
                    <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-4">
                        <div className="text-center md:text-left">
                            <p className="text-sm font-semibold">© {currentYear} Shivam Singh</p>
                            <p className="text-sm text-white/80">Built with React & Tailwind CSS</p>
                        </div>

                        <div className="flex gap-4">
                            <a
                                href="mailto:gangolashivamsingh@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 border border-white/15 rounded-full bg-white/5 hover:border-purple-600 transition"
                                aria-label="Email"
                            >
                                <SiGmail className="w-5 h-5 text-white/90" />
                            </a>

                            <a
                                href="http://www.linkedin.com/in/shivamsinghgangola"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 border border-white/15 rounded-full bg-white/5 hover:border-purple-600 transition"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin className="w-5 h-5 text-white/90" />
                            </a>

                            <a
                                href="https://github.com/CrshIVam16"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 border border-white/15 rounded-full bg-white/5 hover:border-purple-600 transition"
                                aria-label="GitHub"
                            >
                                <FaGithub className="w-5 h-5 text-white/90" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Body