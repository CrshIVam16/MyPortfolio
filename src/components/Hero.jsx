import React from 'react'
import banner from "../assets/image.png"
import { FaCode } from 'react-icons/fa'

// function Hero() {
//     return (
//         <>
//             <div className='w-[80%] h-150 border m-auto flex items-center p-2'>
//                 <div className='w-[50%] border'>
//                     <img className='rounded-full opacity-50' src={myLogo} alt="" />
//                 </div>
//                 <div className='w-[50%] border text-center flex justify-evenly p-2'>
//                     <h2 className='text-8xl'>WHO AM I?</h2>
//                     <h3 className='text-2xl text-justify px-12'> A full Stack Developer, who loves building web applications and try to learn concepts by implemeting them . . .</h3>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Hero

function Hero() {
    return (
        <section
         id="top"
            className="w-[85%] max-md:w-[95%] mx-auto my-6 rounded-2xl overflow-hidden border-l border-r border-purple-500 shadow-lg shadow-fuchsia-500/60"
            style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay */}
            <div className="bg-black/45 backdrop-blur-sm">
                <div className="w-full px-4 py-10 md:px-10 md:py-14 min-h-[150px] md:min-h-[220px] flex items-center">
                    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

                        {/* Icon */}
                        <div className="md:col-span-5 flex justify-center">
                            <div className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] flex items-center justify-center rounded-full bg-white/5 border border-white/10">
                                <FaCode className="w-20 h-20 md:w-28 md:h-28 opacity-25" />
                            </div>
                        </div>


                        {/* Text */}
                        <div className="md:col-span-7 text-white">

                            <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold leading-tight">
                                WHO AM I?
                            </h1>

                            <p className="mt-4 text-sm sm:text-base md:text-lg tracking-wide uppercase text-white/80 italic font-semibold">
                                A Full Stack Developer
                            </p>

                            <p className="mt-4 text-base sm:text-lg md:text-2xl text-white/90">
                                I love building web applications and learning concepts by implementing them—one feature at a time.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
