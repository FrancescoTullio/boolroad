import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import trips from "../../data/data";

function AddTripPage() {
    const defaultFormValue = {
        title: "",
        destination: "",
        description: "",
        departureDate: "",
        arrivalDate: "",
        cover: ""
    }

    const [formValue, setFormValue] = useState(defaultFormValue);
    const navigation = useNavigate();


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
        console.log(formValue);
    };

    const handleSubmit = (event) =>{
        event.preventDefault();

        const newFormData = {
            ...formValue,
            id: Date.now()
        }
        trips.push(newFormData)
        setFormValue(defaultFormValue)
        navigation(-1)
    }

    return (
        <>
            <button className="btn" onClick={() => navigation(-1)}>Torna ai viaggi</button>
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

                <button type="submit" className="btn btn-success">Aggiungi</button>
            </form>
        </>
    );
}

export default AddTripPage;