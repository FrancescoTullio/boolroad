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
        {
            title: "Contattaci",
            path: "/aboutus"
        },
    ]

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-lights">
                <div className="container-fluid">
                    <div>
                        <Link className="navbar-brand " to={navlinks[0].path}><span>Bool</span><img src="../../image/logo-boolroad.jpeg" alt="logo" height="50" />
                            <span>Road</span></Link>
                    </div>
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