import { useParams, useNavigate } from "react-router-dom";
import trips from "../../data/data"
import TravelersAccordion from "../components/TravelsAccordion";
import { useState } from "react";

function ShowSingleTrip() {
    const { id } = useParams();
    const navigation = useNavigate();
    const [searchValue, setSearchValue] = useState("");
    const parentAccordionId = "travelersAccordion";

    //Funzione per prelevare i partecipanti di un singolo viaggio tramite id
    const getUsersByTripId = (trips, id) => {
        let users = [];
        trips.forEach(curElem => {
            if (curElem.id === parseFloat(id)) {
                users = [...curElem.partecipants];
            }
        });
        return users;
    };

    //Funzione per filtrare i partecipanti  tramite nome e cognome di un singolo viaggio
    const getFilterUsers = (users, searchValue) => {
        const searchValueLower = searchValue.toLowerCase();
        return users.filter((curElem) =>
            curElem.firstName.toLowerCase().includes(searchValueLower) ||
            curElem.lastName.toLowerCase().includes(searchValueLower)
        );
    };

    //Invoca le funzioni
    const users = getUsersByTripId(trips, id);
    const filterUsers = getFilterUsers(users, searchValue);

    const singleTrip = trips.find((curTrip) => curTrip.id == id)

    return (
        <>
            <section>
                <div className="d-flex justify-content-end">
                    <button className="btn" onClick={() => { navigation(-1) }} style={{ color: "#102829" }}>Torna indietro</button>
                </div>
                <h1>{singleTrip.title}</h1>

                {/* Barra di ricerca */}
                <div className="pb-4">
                    <label className="form-label" htmlFor="searchUser"></label>
                    <input className="form-control"
                        id="searchUser"
                        type="text"
                        name="search"
                        value={searchValue}
                        placeholder='Cerca i partecipanti...'
                        onChange={(event) => { setSearchValue(event.target.value) }} />
                </div>
                
                {/* Rubrica partecipanti */}
                {
                    <div className="accordion" id={parentAccordionId}>
                        {(filterUsers.length > 0 ? filterUsers : users).map((curElem) => (
                            <TravelersAccordion
                                user={curElem}
                                key={curElem.id}
                                parentId={parentAccordionId}
                            />
                        ))}
                    </div>
                }
            </section >
        </>
    );
};

export default ShowSingleTrip;