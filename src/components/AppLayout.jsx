import { Outlet } from "react-router-dom"
import Navbar from "../"

function AppLayout() {

    return (
        <>
            <header>
                <div className="container">
                    <h1 className="my-4" >Boolroad!</h1>
                </div>
            </header>

            <main>
                <Outlet />
            </main>

            <footer></footer>
        </>
    )
};

export default AppLayout;