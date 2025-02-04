import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

function AppLayout() {
    return (
        <>
            <header className='mb-3'>
                <Navbar />
            </header >

            <main className="container py-4">
                <Outlet />
            </main>

            <Footer />
        </>
    );
};

export default AppLayout;