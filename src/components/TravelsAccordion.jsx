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
                    <p><i className="fa-solid fa-calendar-days"></i> {user.birthDate}</p>
                    <p><i className="fa-solid fa-envelope"></i> <a href="">{user.email}</a></p> 
                    <p><i className="fa-solid fa-phone"></i> {user.phone}</p>
                    <p><i className="fa-solid fa-user"></i> {user.taxCode}</p>
                </div>
            </div>
        </div>
    );
};

export default TravelersAccordion;