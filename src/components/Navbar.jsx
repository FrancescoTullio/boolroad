import { Link, NavLink } from "react-router-dom";

function Navbar() {

    const navlinks = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Viaggi",
            path: "/trips"
        },
    ]


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Boolroad</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {navlinks.map((curLink, index) => {
                                return <li key={index} className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to={curLink.path}>{curLink.title}</NavLink>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;