import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/navbar.component";
import ClerkWrapper from "../clerk-layout/clerk-layout";

const MainLayout = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64">
     <ClerkWrapper>
     <Navbar />
     <Outlet/>
     </ClerkWrapper>
    </div>
  );
};

export default MainLayout;
