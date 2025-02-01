import React from 'react';

const TravelersAccordion = ({ user, index }) => {
    //Id univoco per ogni user
    const collapseId = `collapse${index}`;
    const headerId = `heading${index}`;

    return (
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id={headerId}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${collapseId}`} aria-expanded="false" aria-controls={collapseId}>
                        {user.firstName} {user.lastName}
                    </button>
                </h2>
                <div id={collapseId} className="accordion-collapse collapse" aria-labelledby={headerId} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p>{user.phone}</p>
                        <p>{user.taxCode}</p>
                        <a href={user.email}>{user.email}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default TravelersAccordion;