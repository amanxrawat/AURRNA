import React from "react";
import { useEffect } from 'react';

import Sidebar from "../admin/Sidebar";

import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const AdminLayout = ({ children }) => {

  const { isAdmin } = useSelector((state) => state.auth);
  
    const navigate = useNavigate();
  
      useEffect(() => {
          const isAdminStored = localStorage.getItem("isAdmin");
          
          if (isAdminStored !== "true" || isAdmin !== true) {
              navigate("/admin");
          }
      }, [navigate]);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-3 h-screen">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="lg:col-span-4 sm:col-span-1 md:col-span-2">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
