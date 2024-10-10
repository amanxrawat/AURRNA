import React, { useState } from 'react'
import { useRef } from 'react';
import { FaTachometerAlt, FaBoxOpen, FaCartPlus, FaClipboardList } from 'react-icons/fa';
import gsap from 'gsap';

function Sidebar() {
    const sidebarRef = useRef()
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleHover = () => {

        const tl = gsap.timeline()
        tl.to(sidebarRef.current, {
            width: isCollapsed ? "16rem" : "4rem",
            duration: 0.5,
            ease: "power3.out",
        });

        // tl.to(".barIcon", {
        //     x: isCollapsed ? -60 : 1,
        //     delay: isCollapsed ? 0.1 : 0.2,
        //     scale:isCollapsed? 0.9 : 1,
        //     duration: 0.3,
        // })

        // tl.to(".innerText",{
        //     x:10,
        //     scale:isCollapsed?1:0,
        //     duration:0.2,
        //     delay:isCollapsed?0.3:0
        // })

        // gsap.to(".innerText",{
        //     x:60,
        //     // scale:isCollapsed?5:1,
        //     duration:0.5,
        //     delay:0.5,
        // })
        setIsCollapsed(!isCollapsed);
    };



    return (
     

        <>
            <div>
                <div className='relative max-w-[16rem] ' 
                // onMouseLeave={handleHover}
                 >
                    <div
                        ref={sidebarRef}
                        onClick={handleHover}
                        // onMouseEnter={handleHover}
                        // onMouseLeave={handleHover}
                        className="sidebar bg-purple-500 h-screen w-[4rem] flex flex-col items-center justify-between py-10 absolute left-0 top-0 z-[1]"
                    >
                    </div>


                    <div className='sideBarIcons absolute left-0 top-8 flex flex-col gap-4 z-[2] items-center '>

                        <div className=' group w-full  '>
                            <div className='   flex  items-center group-hover:bg-purple-800 group-hover:rounded-r-md  '>
                                <div className='w-12 h-12 bg-slate-800 flex items-center justify-center hover:scale-125  group-hover:border-4 group-hover:border-orange-400 translate-x-[0.5rem] rounded-full transition-all'>
                                    < FaTachometerAlt size={24}></FaTachometerAlt>
                                </div>
                                <div className='innerText'>
                                    {!isCollapsed && <span className=" ml-8 font-bold text-white">Dashboard</span>}
                                </div>
                            </div>
                        </div>
                        <div className=' group w-full'>
                            <div className='flex items-center  group-hover:bg-purple-800 group-hover:rounded-r-md  '>
                                <div className='w-12 h-12 bg-slate-800 flex items-center justify-center hover:scale-125  group-hover:border-4 group-hover:border-orange-400 translate-x-[0.5rem] rounded-full transition-all'>
                                    < FaBoxOpen size={24}></FaBoxOpen>
                                </div>
                                <div className='innerText'>
                                    {!isCollapsed && <span className=" ml-8  font-bold text-white">Add Product</span>}
                                </div>
                            </div>
                        </div>
                        <div className=' group w-full'>
                            <div className='flex items-center  group-hover:bg-purple-800 group-hover:rounded-r-md  '>
                                <div className='w-12 h-12 bg-slate-800 flex items-center justify-center hover:scale-125  group-hover:border-4 group-hover:border-orange-400 translate-x-[0.5rem] rounded-full transition-all'>
                                    < FaClipboardList size={24}></FaClipboardList>
                                </div>
                                <div className='innerText'>
                                    {!isCollapsed && <span className=" ml-8 mr-10 font-bold text-white">View Products</span>}
                                </div>
                            </div>
                        </div>
                        <div className=' group w-full'>
                            <div className='flex items-center  group-hover:bg-purple-800 group-hover:rounded-r-md  '>
                                <div className='w-12 h-12 bg-slate-800 flex items-center justify-center hover:scale-125  group-hover:border-4 group-hover:border-orange-400 translate-x-[0.5rem] rounded-full transition-all'>
                                    < FaCartPlus size={24}></FaCartPlus>
                                </div>
                                <div className='innerText'>
                                    {!isCollapsed && <span className=" ml-8 mr-24 font-bold text-white">All Orders</span>}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>



    )
}

export default Sidebar