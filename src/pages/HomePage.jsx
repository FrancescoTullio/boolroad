import CarouselCard from "../components/CarouselCard";
import trips from "../../data/data";

function HomePage() {
    return (
        <>
            <h1 className="text-center py-3">Prepara lo zaino!</h1>

            {/* Carosello */}
            <section>
                <div className="d-flex justify-content-center">
                    <div id="carouselExampleAutoplaying" className="carousel slide w-100" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {trips.map((curElem, index) => (
                                <div className={`w-100 carousel-item ${index === 0 ? "active" : ""}`} key={curElem.id}>
                                    {/* Card del carosello */}
                                    <CarouselCard trip={curElem} />
                                </div>
                            ))}
                        </div>

                        {/* Recensioni */}
                        <section className="py-3">
                            <div className="review-section text-center mt-4">
                                <h3 style={{ color: "#FFD700" }}>Recensioni dei Viaggiatori</h3>
                                <div className="d-flex justify-content-center">
                                    {/* Stelle TripAdvisor */}
                                    <span style={{ color: "#FFD700", fontSize: "1.5rem" }}>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </span>
                                </div>
                                <p className="text-muted">"Un viaggio indimenticabile, tutto perfetto! Esperienza fantastica e servizi eccellenti."</p>
                                <small>- Cliente Felice</small>
                            </div>
                        </section>

                        {/* Bottoni carosello */}
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>
        </>


    );
}

export default HomePage;
