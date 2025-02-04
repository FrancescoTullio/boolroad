import React from "react";

// Dati dei partecipanti
const participants = [
    {
        id: 1,
        name: "Aurelio Festa",
        role: "CEO",
        description: "Aurelio è il fondatore dell'agenzia e ha una vasta esperienza nel settore dei viaggi.",
    },
    {
        id: 2,
        name: "Erika Cetera",
        role: "Marketing Manager",
        description: "Erika è esperta di marketing e si occupa delle strategie per attrarre nuovi clienti.",
    },
    {
        id: 3,
        name: "Daniele Battistelli",
        role: "Travel Specialist",
        description: "Daniele è un esperto di destinazioni turistiche e si occupa della pianificazione dei viaggi.",
    },
    {
        id: 4,
        name: "Luca Conigliaro",
        role: "Customer Support",
        description: "Luca è sempre pronto ad aiutare i clienti, risolvendo qualsiasi tipo di problema.",
    },
    {
        id: 5,
        name: "Niccolò Di Domenico",
        role: "Travel Designer",
        description: "Niccolò crea esperienze su misura per i clienti e si assicura che ogni viaggio sia perfetto.",
    },
    {
        id: 6,
        name: "Francesco Tullio",
        role: "Operations Manager",
        description: "Francesco gestisce la logistica e assicura che ogni viaggio si svolga senza intoppi.",
    },
];

function AboutUsPage() {
    return (
        <div className="container py-5">
            <h2 className="text-center mb-4" style={{ color: "#12A6DB" }}>Il Nostro Team</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {participants.map((participant) => (
                    <div className="col" key={participant.id}>
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title" style={{ fontSize: "1.25rem", color: "#333" }}>
                                    {participant.name}
                                </h5>
                                <h6 className="card-subtitle mb-2 text-muted">{participant.role}</h6>
                                <p className="card-text">{participant.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutUsPage;
