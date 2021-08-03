import React from 'react';
import '../assets/css/card.css';

const CardBook = ({
    name,
    img,
    id
}) => {
    return (
        <div className="card">
            <p>{name}</p>
            <img
                src={img}
                alt={name}
                width="100px"
            />
        </div>
    )
}

export default CardBook;