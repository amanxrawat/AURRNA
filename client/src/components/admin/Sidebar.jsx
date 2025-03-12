import React, { useState } from 'react'
import clsx from 'clsx';
import { useNavigate, useLocation } from 'react-router-dom';

import { MdLocalShipping as OrdersIcon } from "react-icons/md";
import { FaUsers as UsersIcon } from "react-icons/fa";
import { IoBagAdd as CreateProductIcon } from "react-icons/io5";
import { IoSettingsSharp as ManageProductIcon } from "react-icons/io5";

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <header className='m-3 '>
            <div className='ml-3 text-dark text-5xl font-Corm font-bold'>AURRNA</div>
            <div className='ml-3 text-dark text-xl font-BeViet'>ADMIN PANEL</div>
            <div className="relative">
                <div
                    className="bg-yellow-800 h-screen w-[4rem] flex flex-col items-center justify-between  fixed left-0 top-0 transition-all z-10 cursor-pointer"
                />
                <div className="absolute left-0 top-4 flex flex-col gap-4 z-20 items-center w-full">
                    <SidebarItem
                        icon={<OrdersIcon size={24} />}
                        text="Orders"
                        isActive={location.pathname === "/admin/orders"}
                        onClick={() => navigate("/admin/orders")}
                    />
                    <SidebarItem
                        icon={<UsersIcon size={24} />}
                        text="Users"
                        isActive={location.pathname === "/admin/users"}
                        onClick={() => navigate("/admin/users")}
                    />
                    <SidebarItem
                        icon={<CreateProductIcon size={24} />}
                        text="Create Product"
                        isActive={location.pathname === "/admin/create-product"}
                        onClick={() => navigate("/admin/create-product")}
                    />
                    <SidebarItem
                        icon={<ManageProductIcon size={24} />}
                        text="Mange Products"
                        isActive={location.pathname === "/admin/manage-products"}
                        onClick={() => navigate("/admin/manage-products")}
                    />
                </div>
            </div>
        </header>
    );
};

// Sidebar Item Component
const SidebarItem = ({ icon, text, isActive, onClick }) => {
    return (
        <div className={clsx("group w-full cursor-pointer p-2", isActive ? "bg-dark text-white rounded-lg" : "")} onClick={onClick}>
            <div className="flex items-center group-hover:bg-yellow-950 group-hover:rounded-r-md">
                <div className="w-12 h-12 bg-yellow-950 flex items-center justify-center hover:scale-110 group-hover:border-4 group-hover:border-orange-400 translate-x-[0.5rem] rounded-full transition-all">
                    {icon}
                </div>
                <div className='px-4'><span>{text}</span></div>
            </div>
        </div>
    );
};



export default Sidebar