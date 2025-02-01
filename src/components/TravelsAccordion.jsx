import React from 'react';

const TravelersAccordion = ({ user, parentId }) => {
    //Id univoco per ogni user
    const accordionId = `accordion-${user.id}`;
    const collapseId = `collapse-${user.id}`;

    return (
        <div className="accordion" id={accordionId}>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button 
                    className="accordion-button" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target={`#${collapseId}`}
                    aria-expanded="false" 
                    aria-controls={collapseId}>
                        {user.firstName} {user.lastName}
                    </button>
                </h2>
                <div id={collapseId} className="accordion-collapse collapse" data-bs-parent={`#${parentId}`}>
                    <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelersAccordion;