import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import trips from "../../data/data"
import TravelersAccordion from "../components/TravelsAccordion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ShowSingleTrip() {
    const { id } = useParams();

    // console.log(parseFloat(id))

    let user = []

    trips.forEach(curElem => {
        if (curElem.id === parseFloat(id)) {
            // console.log(id, curElem.participants)
            user = [...curElem.participants]
        }
    })
    console.log(user)

    const navigation = useNavigate()

    const [accordion, setAccordion] = useState(null)

    return (
        <>
            <section>
                <button className="btn btn-primary" onClick={() => { navigation(-1) }}>torna alla pagina dei viaggi</button>

                <h1>Dettagli del viaggio {id}</h1>
                {
                    user.map((curElem) => (
                        <TravelersAccordion
                            user={curElem}
                            key={curElem.id}
                            index={curElem.id} />
                    ))
                }
            </section>
        </>
    )
}

export default ShowSingleTrip;