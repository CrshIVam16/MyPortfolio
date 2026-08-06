import React from 'react'
import { Code, Database, Server, Spanner, Translate } from '@boxicons/react'

// function Skills() {
//     return (
//         <>
//             <div className='w-[80%] min-h-100 border m-auto flex flex-col items-center justify-center p-2'>
//                 <h2 className='p-3'>Skills</h2>
//                 <h2 className='text-2xl text-center px-12'> My Tool Box<br />What I usually work with...</h2>

//                 <div className='grid grid-cols-3 gap-10 border p-5'>

//                     <div className='border w-70 px-4 py-2 flex flex-col justify-start gap-2 rounded-xl'>
//                         <Code className="text-red-500 h-10 w-10 border rounded-xl " />
//                         <span className=' p-1'>Frontend</span>
//                         <div className='flex flex-wrap gap-3 p-1 border text-sm rounded-xl'>
//                             <span className='border px-4  py-2 text-xs rounded-xl'>HTML</span>
//                             <span className='border px-4  py-2 text-xs  rounded-xl'>CSS</span>
//                             <span className='border px-4  py-2 text-xs  rounded-xl'>Tailwind CSS</span>
//                             <span className='border px-4  py-2 text-xs rounded-xl'>React</span>
//                         </div>
//                     </div>


//                     <div className='border w-70 px-4 py-2 flex flex-col justify-start gap-2 rounded-xl'>
//                         <Server className="text-red-500 h-10 w-10 border rounded-xl " />
//                         <span className=' p-1'>Backend</span>
//                         <div className='flex flex-wrap gap-3 p-1 text-xs border rounded-xl'>
//                             <span className='border px-4  py-2 text-xs rounded-xl'>Node.js</span>
//                             <span className='border px-4  py-2 text-xs  rounded-xl'>Express</span>
//                         </div>
//                     </div>

//                     <div className='border w-70 px-4 py-2 flex flex-col justify-start gap-2 rounded-xl'>
//                         <Database className="text-red-500 h-10 w-10 border rounded-xl " />
//                         <span className=' p-1'>Database</span>
//                         <div className='flex flex-wrap gap-3 p-1 border text-xs rounded-xl'>
//                             <span className='border px-4  py-2 text-xs rounded-xl'>MongoDB</span>
//                         </div>
//                     </div>

//                     <div className='border w-70 px-4 py-2 flex flex-col justify-start gap-2 rounded-xl'>
//                         <Spanner className="text-red-500 h-10 w-10 border rounded-xl " />
//                         <span className=' p-1'>Tools</span>
//                         <div className='flex flex-wrap gap-3 p-1 border text-xs rounded-xl'>
//                             <span className='border px-4  py-2 text-xs rounded-xl'>Git</span>
//                             <span className='border px-4  py-2 text-xs  rounded-xl'>Postman</span>
//                         </div>
//                     </div>


//                 </div>

//             </div>
//         </>
//     )
// }

// export default Skills


function Skills() {
    const skills = [
        {
            title: "Frontend",
            icon: <Code className="w-8 h-8 text-red-400" />,
            items: ["HTML", "CSS", "Tailwind CSS", "React"],
        },
        {
            title: "Backend",
            icon: <Server className="w-8 h-8 text-red-400" />,
            items: ["Node.js", "Express"],
        },
        {
            title: "Database",
            icon: <Database className="w-8 h-8 text-red-400" />,
            items: ["MongoDB"],
        },
        {
            title: "Tools",
            icon: <Spanner className="w-8 h-8 text-red-400" />,
            items: ["Git", "Github", "Postman"],
        },
        {
            title: "Languages",
            icon: <Translate className="w-8 h-8 text-red-400" />,
            items: ["C", "Java", "Python", "JavaScript"],
        },
    ];

    return (
        <section id="skills" className="w-[85%] max-md:w-[95%] mx-auto my-6 md:my-10">
            <div className="rounded-2xl border-l border-r overflow-hidden p-4 sm:p-6 md:p-10 border-purple-500 shadow-lg shadow-fuchsia-500/60">
                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-sm sm:text-base tracking-wide uppercase text-white/80 italic font-semibold">
                        Skills
                    </p>
                    <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white">
                        My Tool Box
                    </h2>
                    <p className="mt-3 text-sm sm:text-base md:text-lg text-white/90">
                        What I usually work with...
                    </p>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {skills.map((s) => (
                        <div
                            key={s.title}
                            className="border border-white/15 rounded-2xl p-3 bg-white/5 hover:border-purple-600"
                        >
                            <div className="flex items-start gap-3">
                                <div className="p-1 rounded-xl border border-white/15 bg-black/10">
                                    {s.icon}
                                </div>
                                <div>
                                    <h3 className="text-base md:text-lg font-semibold text-white">{s.title}</h3>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {s.items.map((item) => (
                                            <span
                                                key={item}
                                                className="px-4 py-2 rounded-xl border border-white/15 text-xs text-white/90 bg-black/10"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
