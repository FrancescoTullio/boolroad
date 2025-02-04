import trips from "../../data/data"
import TripCard from "../components/TripCard";
import { Link } from "react-router-dom";

function TripsPage() {
    return (
        <>
            <section className="pb-3">
                <div className="d-flex justify-content-end">
                    <Link className="btn btn-xs" to="/trips/create" style={{color: "#102829"}}>Aggiungi viaggio</Link>
                </div>
                <h2>Viaggi in corso: </h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-2">
                    {trips.map((curTrip) => {
                        return (
                            <div className='col p-4' key={curTrip.id}>
                                <div className="h-100 d-flex">
                                    <TripCard trip={curTrip} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    );
};

export default TripsPage;