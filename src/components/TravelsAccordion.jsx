import React from 'react';

const TravelersAccordion = ({ user, parentId }) => {
    const { id, firstName, lastName, email } = user;
    const collapseId = `collapse-${id}`;

    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${collapseId}`}
                    aria-expanded="false"
                    aria-controls={collapseId}>
                        {user.firstName} {user.lastName}    
                </button>
            </h2>
            <div id={collapseId}
                className="accordion-collapse collapse"
                data-bs-parent={`#${parentId}`}>
                <div className="accordion-body">
                    <strong>Nome:</strong> {firstName} <br />
                    <strong>Cognome:</strong> {lastName} <br />
                    <strong>Email:</strong> {email}
                </div>
            </div>
        </div>
    );
};

export default TravelersAccordion;