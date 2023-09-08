import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout;