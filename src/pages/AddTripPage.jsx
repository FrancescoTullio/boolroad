import { useState } from "react";
import { useNavigate } from "react-router-dom";
import trips from "../../data/data";

function AddTripPage() {
    // Valori predefiniti per il modulo del viaggio
    const defaultFormValue = {
        title: "",
        destination: "",
        description: "",
        departureDate: "",
        arrivalDate: "",
        cover: "",
        partecipants: []
    };

    // Valori predefiniti per un partecipante
    const defaultPartecipantValue = {
        firstName: "",
        lastName: "",
        birthDate: "",
        taxCode: "",
        phone: "",
        email: ""
    }

    const [formValue, setFormValue] = useState(defaultFormValue);

    const [partecipantValue, setPartecipantValue] = useState(defaultPartecipantValue)

    const navigation = useNavigate();

    // Gestisce i cambiamenti nei campi del modulo del viaggio
    const handleFormData = (event) => {
        const { name, value } = event.target;

        let newFormValue = null

        if (name === "cover") {
            newFormValue = {
                ...formValue,
                cover: event.target.files[0]
            };
            setFormValue(newFormValue);
        } else {
            newFormValue = {
                ...formValue,
                [name]: value
            };
            setFormValue(newFormValue);
        };
    };

    // Gestisce l'invio del modulo del viaggio
    const handleSubmit = (event) => {
        event.preventDefault();

        const newFormData = {
            ...formValue,
            id: Date.now()
        }
        trips.push(newFormData)
        setFormValue(defaultFormValue)
        navigation(-1)
    };

    // Gestisce i cambiamenti nei campi del modulo del partecipante
    const handleChangePartecipant = (event) => {
        const { name, value } = event.target;

        const newPartecipantValue = {
            ...partecipantValue,
            [name]: value
        }
        setPartecipantValue(newPartecipantValue)
    }

    // Aggiunge un nuovo partecipante al modulo del viaggio e gli assegna un id 
    const handleAddPartecipant = () => {

        const newPartecipant = {
            ...partecipantValue,
            id: Date.now()
        };

        setFormValue(prev => ({
            // Mantiene tutti i valori precedenti del modulo del viaggio
            ...prev,
            // Aggiorna l'array dei partecipanti aggiungendo un nuovo partecipante
            partecipants: [...prev.partecipants, newPartecipant]
        }));

        setPartecipantValue(defaultPartecipantValue);
    };

    return (
        <>
            <div className="d-flex justify-content-end">
                <button className="btn" onClick={() => { navigation(-1) }} style={{ color: "#102829" }}>Torna indietro</button>
            </div>
            <h2 className="py-3">Aggiungi un nuovo viaggio:</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Titolo</label>
                    <input name="title" type="text" className="form-control" id="title"
                        value={formValue.title} onChange={handleFormData} />
                </div>

                <div className="mb-3">
                    <label htmlFor="destination" className="form-label">Destinazione</label>
                    <input name="destination" type="text" className="form-control" id="destination"
                        value={formValue.destination} onChange={handleFormData} />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Descrizione</label>
                    <textarea name="description" className="form-control" id="description"
                        value={formValue.description} onChange={handleFormData} ></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="departureDate" className="form-label">Data di partenza</label>
                    <input name="departureDate" type="date" className="form-control" id="departureDate"
                        value={formValue.departureDate} onChange={handleFormData} />
                </div>

                <div className="mb-3">
                    <label htmlFor="arrivalDate" className="form-label">Data di arrivo</label>
                    <input name="arrivalDate" type="date" className="form-control" id="arrivalDate"
                        value={formValue.arrivalDate} onChange={handleFormData} />
                </div>

                <div className="mb-3">
                    <label htmlFor="cover" className="form-label">Poster del viaggio</label>
                    <input name="cover" type="file" className="form-control" id="cover" onChange={handleFormData} />
                </div>

                {/* PARTECIPANT FORM SECTION */}
                <h2 className="my-4" style={{ color: "#102829" }}>Aggiungi partecipanti:</h2>

                <div className="row row-cols-1 row-cols-2">
                    <div className="my-2">
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">Nome</label>
                            <input name="firstName" type="text" className="form-control" id="firstName"
                                value={partecipantValue.firstName} onChange={handleChangePartecipant} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Cognome</label>
                            <input name="lastName" type="text" className="form-control" id="lastName"
                                value={partecipantValue.lastName} onChange={handleChangePartecipant} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="taxCode" className="form-label">Codice Fiscale</label>
                            <input name="taxCode" type="text" className="form-control" id="taxCode"
                                value={partecipantValue.taxCode} onChange={handleChangePartecipant} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="birthDate" className="form-label">Data di nascita</label>
                            <input name="birthDate" type="date" className="form-control" id="birthDate"
                                value={partecipantValue.birthDate} onChange={handleChangePartecipant} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Cellulare</label>
                            <input name="phone" type="text" className="form-control" id="phone"
                                value={partecipantValue.phone} onChange={handleChangePartecipant} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input name="email" type="text" className="form-control" id="email"
                                value={partecipantValue.email} onChange={handleChangePartecipant} />
                        </div>

                        {/* Bottone aggiungi partecipante */}
                        <button type="button" className="btn btn-sm w-100 mb-3" style={{ background: "#12A6DB", color: "white" }} onClick={handleAddPartecipant}><strong>Nuovo partecipante</strong></button>
                    </div>

                    <div>
                        <h5>Lista partecipanti:</h5>
                        <ol>
                            {
                                formValue.partecipants.length > 0 && formValue.partecipants.map((curElem) => (
                                    <li key={curElem.id}>
                                        <p className="list-name">
                                            {curElem.firstName.toUpperCase()} {curElem.lastName.toUpperCase()}
                                        </p>
                                    </li>
                                ))
                            }
                        </ol>
                    </div>
                </div>

                {/* Submit del form */}
                <div className="text-center"><button type="submit" className="btn" style={{ background: "#549063", color: "white" }}>Aggiungi viaggio</button></div>

            </form>
        </>
    );
};

export default AddTripPage;