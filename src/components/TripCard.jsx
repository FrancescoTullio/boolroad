function TripCard({ trip }) {
    
    return (
        <>
            <div className='card p-1 h-100'>
                <div className="card-body">
                    <h4 className="my-2"> {trip.title}</h4>
                    <p>partenza: {trip.departureDate}</p>
                    <p>rientro: {trip.arrivalDate}</p>
                </div>
            </div>
        </>
    )
};

export default TripCard;