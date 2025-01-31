import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar";

function AppLayout() {

    return (
        <>
            <header>
                <Navbar />
            </header>

            <main>
                <Outlet />
            </main>

            <footer></footer>
        </>
    )
};

export default AppLayout;