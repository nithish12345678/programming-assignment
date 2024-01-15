import React from 'react';

const Details = ({ details }) => {
    // Assuming 'details' is an object with the data usage details you want to display
    return (
        <div className="details-container">
            <h2>Usage Details</h2>
            {/* Render your details here */}
            <p>{details.usage} GB used</p>
        </div>
    );
};

export default Details;