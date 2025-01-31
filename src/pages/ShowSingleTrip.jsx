import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import trips from "../../data/data"
import TravelersAccordion from "../components/TravelsAccordion";

function ShowSingleTrip() {
    const { id } = useParams();
    

    
    return (
        <>
            <section>
                <h1>Dettagli del viaggio {id}</h1>
            </section>
        </>
    )
}

export default ShowSingleTrip;