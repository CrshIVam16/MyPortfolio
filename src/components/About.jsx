import React from 'react'
import { FaSuitcase, FaUserGraduate } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";

// function About() {
//     return (
//         <>
//             <div className='w-[80%] h-100 border m-auto flex flex-col items-center justify-center p-2'>
//                 <h2 className='p-3'>About</h2>
//                 <h2 className='text-2xl text-justify px-12'> A little about my journey, <br></br>won't take too much long...</h2>
//                 <h3 className='px-50 py-10'>
//                     I'm a BCA Graduate, currently learning and building MERN stack projects. I enjoy turning ideas into clean, functional web apps — from REST APIs and databases to responsive React interfaces. I'm actively looking for an internship or entry-level role where I can learn from experienced developers and contribute to real products.
//                 </h3>
//                 <div className='flex gap-10 text-center'>
//                     <div className='border px-5 py-3 rounded-l-full rounded-r-full'>Lucknow, Uttar Pradesh,<br />India</div>
//                     <div className='border px-5 py-3  rounded-l-full rounded-r-full'>BCA<br />Graduate</div>
//                     <div className='border px-5 py-3 rounded-l-full rounded-r-full'>Open to Internships &<br />Entry-Level Roles</div>
//                 </div>

//             </div>
//         </>
//     )
// }

// export default About

function About() {
    return (
        <section
            id="about"
            className="w-[85%] max-md:w-[95%] mx-auto my-6 md:my-10 rounded-2xl overflow-hidden border-l border-r border-purple-500 shadow-lg shadow-fuchsia-500/60"
        >
            {/* subtle banner feel like Hero */}
            <div className="bg-linear-to-r from-slate-900/70 via-slate-900/40 to-slate-900/70 backdrop-blur-sm">
                <div className="px-4 py-10 md:px-10 md:py-14">
                    <div className="max-w-5xl mx-auto text-center text-white">
                        <p className="text-sm sm:text-base md:text-lg tracking-wide uppercase text-white/80 italic font-semibold">
                            About Me
                        </p>

                        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                            A little about my journey
                            <br />
                            <span className="font-semibold mt-4 text-base sm:text-lg md:text-xl text-justify mx-auto max-w-3xl text-white/90">won't take too much long...</span>
                        </h2>

                        {/* <p className="mt-4 text-base sm:text-lg md:text-xl text-justify mx-auto max-w-3xl text-white/90">
              A little about my journey, <span className="font-semibold">won't take too much long...</span>
            </p> */}

                        <p className="mt-6 text-sm sm:text-base md:text-lg text-justify leading-relaxed mx-auto max-w-4xl text-white/90">
                            I'm a BCA Graduate, currently learning and building MERN stack projects. I enjoy
                            turning ideas into clean, functional web apps — from REST APIs and databases to
                            responsive React interfaces. I'm actively looking for an internship or entry-level
                            role where I can learn from experienced developers and contribute to real products.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center ">
                            <div className="border flex justify-center gap-2 border-white/20 bg-white/5 p-3 rounded-full max-md:text-sm hover:border-purple-600">
                                <FaLocationDot className='w-5 h-5' />
                                Lucknow, Uttar Pradesh, India
                            </div>

                            <div className="border flex justify-center gap-2 border-white/20 bg-white/5 p-4 rounded-full max-md:text-sm hover:border-purple-600">
                                <FaUserGraduate className='w-5 h-5' />
                                BCA Graduate
                            </div>

                            <div className="border flex justify-center gap-2 border-white/20 bg-white/5 p-4 rounded-full max-md:text-sm hover:border-purple-600">
                                <FaSuitcase className='w-5 h-5' />
                                Open to Internships & Entry-Level Roles
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
