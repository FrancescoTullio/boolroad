import trips from "../../data/data"
import TripCard from "../components/TripCard";
import { Link } from "react-router-dom";

function TripsPage() {
    return (
        <>
            <section className="pb-3">
                <h2 className="my-3">Viaggi in corso in questo momento: </h2>
                <div className="d-flex justify-content-end py-3">
                    <Link className="btn" to="/trips/create">Aggiungi viaggio</Link>
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-4">
                    {trips.map((curTrip) => {
                        return (
                            <div className='col' key={curTrip.id}>
                                <TripCard
                                    trip={curTrip}
                                />
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default TripsPage;