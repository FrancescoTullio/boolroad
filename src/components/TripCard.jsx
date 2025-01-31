import { Link } from "react-router-dom";
function TripCard({ trip }) {

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{trip.title}</h5>
                    <h6 className="card-subtitle mb-3 text-body-secondary">{trip.destination}</h6>
                    <p className="card-text">Partenza: {trip.departureDate}</p>
                    <p className="card-text">Rientro: {trip.arrivalDate}</p>
                    <div className="row justify-content-center">
                    <Link className="btn btn-primary" to={`/trips/${trip.id}`}>Dettagli</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TripCard;