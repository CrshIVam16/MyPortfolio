import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/projects';

// function Project() {
//     return (
//         <>
//             <div className='w-[80%] min-h-100 border m-auto flex flex-col items-center justify-center p-2'>
//                 <h2 className='p-3'>Projects</h2>
//                 <h2 className='text-2xl text-center px-12'> My Treasure Box<br />Things I've built so far...</h2>

//                 <div className='grid grid-cols-3 gap-10 border p-5'>

//                     <div className='border w-90 px-4 py-2 flex flex-col justify-start gap-2 rounded-xl'>
//                         <img className='rounded-xl' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.7jux9QRUO6VSXU4nWTQ2iQHaDN%3Fpid%3DApi&f=1&ipt=583ec5eb22fbb1964888cc8676c5cd3ae39227e784c32840f29840b64964cc4d&ipo=images" alt="" />
//                         <span className='font-semibold text-xl underline p-1'>UniHub — College Academic Platform</span>
//                         <span className=' p-1'>A MERN-based platform for managing study materials, notices, and opportunities.</span>
//                         <div className='flex flex-wrap gap-3 p-1 border text-sm rounded-xl'>
//                             {/* <div className='border'> */}
//                             <ul className='list-disc list-inside'>
//                                 <li>Role-based authentication using JWT</li>
//                                 <li>File uploads for study materials</li>
//                                 <li>REST APIs for notices & opportunities</li>
//                             </ul>
//                             {/* </div> */}
//                             <div className=' w-full flex flex-wrap justify-start gap-2 border p-1'>
//                                 <span className='border px-4  py-2 rounded-2xl text-xs'>Node.js</span>
//                                 <span className='border px-4  py-2 rounded-2xl text-xs'>React</span>
//                                 <span className='border px-4  py-2 rounded-2xl text-xs'>JWT</span>
//                                 <span className='border px-4  py-2 rounded-2xl text-xs'>Express</span>
//                                 <span className='border px-4  py-2 rounded-2xl text-xs'>MongoDB</span>
//                             </div>

//                             <div className='flex flex-wrap justify-start gap-2 border p-1 w-full'>
//                                 <span className='border px-4  py-2 rounded-md text-xs'>Live Demo</span>
//                                 <span className='border px-4  py-2 rounded-md text-xs'>Source Code</span>
//                             </div>

//                         </div>
//                     </div>

//                     <div className='border w-90 px-4 py-2 flex flex-col justify-start gap-2 rounded-xl'>
//                         <img className='rounded-xl' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.7jux9QRUO6VSXU4nWTQ2iQHaDN%3Fpid%3DApi&f=1&ipt=583ec5eb22fbb1964888cc8676c5cd3ae39227e784c32840f29840b64964cc4d&ipo=images" alt="" />
//                         <span className='font-semibold text-xl underline p-1'>UniHub — College Academic Platform</span>
//                         <span className=' p-1'>A MERN-based platform for managing study materials, notices, and opportunities.</span>
//                         <div className='flex flex-wrap gap-3 p-1 border text-sm rounded-xl'>
//                             {/* <div className='border'> */}
//                             <ul className='list-disc list-inside'>
//                                 <li>Role-based authentication using JWT</li>
//                                 <li>File uploads for study materials</li>
//                                 <li>REST APIs for notices & opportunities</li>
//                             </ul>
//                             {/* </div> */}
//                             <div className=' w-full flex flex-wrap justify-start gap-2 border p-1'>
//                                 <span className='border px-4  py-2 rounded-2xl text-xs'>Node.js</span>
//                                 <span className='border px-4  py-2 rounded-2xl text-xs'>React</span>
//                                 <span className='border px-4  py-2 rounded-2xl text-xs'>JWT</span>
//                                 <span className='border px-4  py-2 rounded-2xl text-xs'>Express</span>
//                                 <span className='border px-4  py-2 rounded-2xl text-xs'>MongoDB</span>
//                             </div>

//                             <div className='flex flex-wrap justify-start gap-2 border p-1 w-full'>
//                                 <span className='border px-4  py-2 rounded-md text-xs'>Live Demo</span>
//                                 <span className='border px-4  py-2 rounded-md text-xs'>Source Code</span>
//                             </div>

//                         </div>
//                     </div>

//                     <div className='border w-90 px-4 py-2 flex flex-col justify-start gap-2 rounded-xl'>
//                         <img className='rounded-xl' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.7jux9QRUO6VSXU4nWTQ2iQHaDN%3Fpid%3DApi&f=1&ipt=583ec5eb22fbb1964888cc8676c5cd3ae39227e784c32840f29840b64964cc4d&ipo=images" alt="" />
//                         <span className='font-semibold text-xl underline p-1'>UniHub — College Academic Platform</span>
//                         <span className=' p-1'>A MERN-based platform for managing study materials, notices, and opportunities.</span>
//                         <div className='flex flex-wrap gap-3 p-1 border text-sm rounded-xl'>
//                             {/* <div className='border'> */}
//                             <ul className='list-disc list-inside'>
//                                 <li>Role-based authentication using JWT</li>
//                                 <li>File uploads for study materials</li>
//                                 <li>REST APIs for notices & opportunities</li>
//                             </ul>
//                             {/* </div> */}
//                             <div className=' w-full flex flex-wrap justify-start gap-2 border p-1'>
//                                 <span className='border px-4  py-2 rounded-2xl text-xs'>Node.js</span>
//                                 <span className='border px-4  py-2 rounded-2xl text-xs'>React</span>
//                                 <span className='border px-4  py-2 rounded-2xl text-xs'>JWT</span>
//                                 <span className='border px-4  py-2 rounded-2xl text-xs'>Express</span>
//                                 <span className='border px-4  py-2 rounded-2xl text-xs'>MongoDB</span>
//                             </div>

//                             <div className='flex flex-wrap justify-start gap-2 border p-1 w-full'>
//                                 <span className='border px-4  py-2 rounded-md text-xs'>Live Demo</span>
//                                 <span className='border px-4  py-2 rounded-md text-xs'>Source Code</span>
//                             </div>

//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </>
//     )
// }

// export default Project

function Project() {
   
    return (
        <section id="projects" className="w-[85%] max-md:w-[95%] mx-auto my-6 md:my-10">
            <div className="rounded-2xl border-l border-r overflow-hidden p-4 sm:p-6 md:p-10 border-purple-500 shadow-lg shadow-fuchsia-500/60">
                <div className="text-center text-white">
                    <p className="text-sm sm:text-base tracking-wide uppercase text-white/80 italic font-semibold">
                        Projects
                    </p>

                    <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                        My Treasure Box
                    </h2>

                    <p className="mt-2 text-sm sm:text-base md:text-lg text-white/90">
                        Things I've built so far...
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                    {projects.map((p, idx) => (
                        <article
                            key={idx}
                            className="group border  border-white/15 bg-white/5 rounded-2xl overflow-hidden hover:border-purple-600 transition"
                        >
                            <div className="md:h-40 bg-black/20">
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-300"
                                    loading="lazy"
                                />
                            </div>

                            <div className="p-4">
                                <h3 className="text-lg sm:text-xl font-semibold underline underline-offset-4 text-white">
                                    {p.title}
                                </h3>

                                <p className="mt-2 text-sm sm:text-base text-white/90">{p.desc}</p>

                                {/* <ul className="mt-4 text-sm text-white/90 list-disc list-inside space-y-1">
                                    {p.bullets.map((b) => (
                                        <li key={b}>{b}</li>
                                    ))}
                                </ul> */}

                                <div className="mt-3 flex flex-wrap gap-2">
                                    {p.tags.map((t) => (
                                        <span
                                            key={t}
                                            className="px-4 py-2 rounded-2xl border border-white/15 text-xs text-white/90 bg-black/10"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-3 flex flex-wrap gap-5">
                                    {p.links.map((item) => (
                                        <a
                                            key={item.href}
                                            href={item.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex"
                                        >
                                            <button
                                                type="button"
                                                className="flex gap-2 max-md:p-2 px-4 py-2 rounded-lg border border-white/20 text-xs lg:text-sm text-white/90 hover:border-purple-600 transition cursor-pointer"
                                            >
                                                {item.label === "Live Demo" ? <FaExternalLinkAlt /> : null}
                                                {item.label}
                                            </button>
                                        </a>
                                    ))}
                                </div>

                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Project;