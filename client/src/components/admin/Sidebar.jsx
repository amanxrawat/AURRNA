import React, { useState } from 'react'
import { useRef } from 'react';
import { FaUser, FaUserPlus, FaTrashAlt, FaHome } from 'react-icons/fa';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate();
    const sidebarRef = useRef()
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleHover = () => {

        const tl = gsap.timeline()
        tl.to(sidebarRef.current, {
            width: isCollapsed ? "15rem" : "4rem",
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
     

        <header>
            <div>
                <div className='relative max-w-[16rem] ' 
                // onMouseLeave={handleHover}
                 >
                    <div
                        ref={sidebarRef}
                        onClick={handleHover}
                        // onMouseEnter={handleHover}
                        // onMouseLeave={handleHover}
                        className="sidebar bg-yellow-800 h-screen w-[4rem] flex flex-col items-center justify-between py-10 absolute left-0 top-0 z-[1]"
                    >
                    </div>


                    <div className='sideBarIcons absolute left-0 top-8 flex flex-col gap-4 z-[2] items-center '>

                        <div className=' group w-full  ' onClick={() => navigate("/home")}>
                            <div className='   flex  items-center group-hover:bg-yellow-950 group-hover:rounded-r-md  '>
                                <div className='w-12 h-12 bg-yellow-950 flex items-center justify-center  hover:scale-125  group-hover:border-4 group-hover:border-orange-400 translate-x-[0.5rem] rounded-full transition-all'>
                                    < FaHome className='' size={24}></FaHome>
                                </div>
                                <div className='innerText'>
                                    {!isCollapsed && <span className=" ml-8 font-bold text-white">Home</span>}
                                </div>
                            </div>
                        </div>
                        <div className=' group w-full' onClick={() => navigate("/user-management")}>
                            <div className='flex items-center  group-hover:bg-yellow-950 group-hover:rounded-r-md  '>
                                <div className='w-12 h-12 bg-yellow-950 flex items-center justify-center hover:scale-125  group-hover:border-4 group-hover:border-orange-400 translate-x-[0.5rem] rounded-full transition-all'>
                                    < FaUserPlus size={24}></FaUserPlus>
                                </div>
                                <div className='innerText'>
                                    {!isCollapsed && <span className=" ml-8  font-bold text-white">Create User</span>}
                                </div>
                            </div>
                        </div>
                        <div className=' group w-full' onClick={() => navigate("/update-user")}>
                            <div className='flex items-center  group-hover:bg-yellow-950 group-hover:rounded-r-md  '>
                                <div className='w-12 h-12 bg-yellow-950  flex items-center justify-center hover:scale-125  group-hover:border-4 group-hover:border-orange-400 translate-x-[0.5rem] rounded-full transition-all'>
                                    < FaUser size={24}></FaUser>
                                </div>
                                <div className='innerText'>
                                    {!isCollapsed && <span className=" ml-8 mr-10 font-bold text-white">Update User</span>}
                                </div>
                            </div>
                        </div>
                        <div className=' group w-full'
                        onClick={() => navigate("/delete-user")}>
                            <div className='flex items-center  group-hover:bg-yellow-950 group-hover:rounded-r-md  '>
                                <div className='w-12 h-12 bg-yellow-950  flex items-center justify-center hover:scale-125  group-hover:border-4 group-hover:border-orange-400 translate-x-[0.5rem] rounded-full transition-all'>
                                    < FaTrashAlt size={24}></FaTrashAlt>
                                </div>
                                <div className='innerText'>
                                    {!isCollapsed && <span className=" ml-8 mr-16 font-bold text-white">Delete User</span>}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </header>



    )
}

export default Sidebar