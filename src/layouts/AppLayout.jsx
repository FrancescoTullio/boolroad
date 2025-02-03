import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

function AppLayout() {

    return (
        <>
            <header className='mb-5'>
                <Navbar />
            </header >

            <main className="container my-4">
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
};

export default AppLayout;