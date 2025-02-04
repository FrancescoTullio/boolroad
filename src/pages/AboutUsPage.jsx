import React from "react";
import participants from  "../../data/participants-array";

function AboutUsPage() {
    return (
        <div className="container py-3">
            <h2 className="text-center mb-4" style={{ color: "#12A6DB" }}>Il Nostro Team</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {participants.map((participant) => (
                    <div className="col" key={participant.id}>
                        <div className="card h-100" style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)" }}>
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
};

export default AboutUsPage;
