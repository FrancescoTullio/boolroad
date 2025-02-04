function CarouselCard({ trip }) {
    const patImg = import.meta.env.VITE_SOURCE_PATH;

    return (
        <div className="card text-bg-dark">
            <img 
                src={`${patImg}${trip.cover}`} 
                className="card-img"
                alt={trip.title} 
            />
            <div className="card-img-overlay">
                <h5 className="card-title fs-1">{trip.title}</h5>
                <p className="card-text fs-2">{trip.description}</p>
            </div>
        </div>
    );
};

export default CarouselCard;