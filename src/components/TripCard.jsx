import { Link } from "react-router-dom";

function TripCard({ trip }) {
    const patImg = import.meta.env.VITE_SOURCE_PATH;

    return (
        <>
            <div className="card" style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }} >
                <img className="card-img-top" src={trip.cover ? `${patImg}${trip.cover}` : `${patImg}newplaceholder.jpeg`} alt={trip.title} />
                <div className="card-body">
                    <h5 className="card-title mb-2">{trip.title}</h5>
                    <h6 className="card-subtitle mb-3 text-body-secondary">{trip.destination}</h6>
                    <p className="card-text mb-1">Descrizione: {trip.description}</p>
                    <p className="card-text mb-1">Partenza: {trip.departureDate}</p>
                    <p className="card-text">Rientro: {trip.arrivalDate}</p>
                    <div className="row justify-content-center">
                        <Link className="btn btn-primary w-50" style={{background: "#549063"}} to={`/trips/${trip.id}`}>Dettagli</Link>
                    </div>
                </div>
            </div>
         </>
    );
};

export default TripCard;