
import { useState } from "react";
import { FaHamburger } from "react-icons/fa";

// function Navbar() {
//     return (
//         <div className='w-full min-h-10 bg-slate-600/50 text-base font-semibold sticky top-0 '>
//             <div className='w-[80%] max-md:w-full lg:mx-auto border grid grid-cols-2 p-1'>
//                 <div className='border text-xl p-2 max-md:text-sm'>
//                     <span>shivamGangola.Dev</span>
//                 </div>
//                 <div className=' border flex justify-around p-2 max-md:text-sm'>
//                     <span>About</span>
//                     <span>Skills</span>
//                     <span>Projects</span>
//                     <span>Contact</span>
//                 </div>
//             </div>

//         </div>
//     )
// }

function Navbar() {
    const [open, setOpen] = useState(false);

    const menu = [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Socials", href: "#socials" },
    ];

    return (
        <nav className="w-full bg-gray-700/95 text-base font-semibold sticky top-0 z-50 border-b border-purple-600">
            <div  className="w-[80%] max-md:w-full mx-auto grid grid-cols-2 items-center p-1">
                <div className="w-full flex items-center gap-5 text-xl p-2 max-md:text-lg">
                    <a className="cursor-pointer" href="#top">shivamGangola.Dev</a>
                </div>

                <div className="hidden md:flex justify-around p-2">
                    {menu.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="cursor-pointer hover:text-purple-200 transition smooth"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                <div className="md:hidden flex justify-end pr-3">
                    <button onClick={() => setOpen((v) => !v)} className="p-2" aria-label="Toggle menu">
                        <FaHamburger className="h-6 w-6" />
                    </button>
                </div>

                {open && (
                    <div className="md:hidden col-span-2 border-t border-purple-500 p-2">
                        <div className="flex flex-col gap-1 p-2">
                            {menu.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="text-left px-2 py-2 rounded-lg hover:bg-slate-200/20 transition"
                                    onClick={() => setOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
