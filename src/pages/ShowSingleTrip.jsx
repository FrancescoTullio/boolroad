import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import trips from "../../data/data"
import TravelersAccordion from "../components/TravelsAccordion";
import { useState } from "react";

function ShowSingleTrip() {
    const { id } = useParams();
    const navigation = useNavigate()
    const [searchValue, setSearchValue] = useState("");

    const getUsersByTripId = (trips, id) => {
        let users = [];
        trips.forEach(curElem => {
            if (curElem.id === parseFloat(id)) {
                users = [...curElem.participants];
            }
        });
        return users;
    };

    const getFilterUsers = (users, searchValue) => {
        const searchValueLower = searchValue.toLowerCase();
        return users.filter((curElem) =>
            curElem.firstName.toLowerCase().includes(searchValueLower) || 
            curElem.lastName.toLowerCase().includes(searchValueLower)
        );
    };

    const users = getUsersByTripId(trips, id);
    const filterUsers = getFilterUsers(users, searchValue);

    console.log(filterUsers)


    return (
        <>
            <section className="container">
                <button className="btn btn-primary" onClick={() => { navigation(-1) }}>torna alla pagina dei viaggi</button>
                <h1>Dettagli del viaggio {id}</h1>
                <div className="py-3">
                    <label className="form-label" htmlFor="searchUser">Cerca i viaggiatori:</label>
                    <input className="form-control"
                        id="searchUser"
                        type="text"
                        name="search"
                        value={searchValue}
                        placeholder='Cerca i viaggiatori...'
                        onChange={(event) => { setSearchValue(event.target.value) }} />
                </div>
                {/* se l'array filtrato è maggiore di 0 mappa l'array altrimenti li mappa tutti */}
                {
                    filterUsers.length > 0
                        ? (filterUsers.map((curElem) => (
                            <TravelersAccordion
                                user={curElem}
                                key={curElem.id}
                                index={curElem.id} />
                        )))
                        : (users.map((curElem) => (
                            <TravelersAccordion
                                user={curElem}
                                key={curElem.id}
                                index={curElem.id} />
                        )))
                }
            </section>
        </>
    );
};

export default ShowSingleTrip;