import trips from"../../data/data"

function HomePage() {


const patImg = import.meta.env.VITE_SOURCE_PATH;

    return (
        <>
            <h1 className="text-center">Benvenuti</h1>
            {/* inizio carosello */}
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {/* elementi del carosello */}
                    {
                        trips.map((curElem, index) => (
                            <div className="carousel-item active" key={index}>
                        <img src={`${patImg}${curElem.cover}`} className="d-block w-100" alt="..."/>
                    </div>
                        ))
                    }
                </div>
                {/* bottoni carosello */}
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
};

export default HomePage;