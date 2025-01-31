import trips from "../../data/data"
import TripCard from "../components/TripCard";

function TripsPage() {

    
    return (
        <>
            <section className="container">
                <h2 className="my-5">Viaggi in corso in questo momento: </h2>
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 gy-4">
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