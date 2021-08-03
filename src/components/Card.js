import React from "react";

// const Card = ({ nama }) => {
const Card = (props) => {
    const { nama } = props;
    return (
        <div>
            <p>Ini Kartu</p>
            <p>{nama}</p>
            {/* <p>{props.nama}</p> */}
        </div>
    )
};

export default Card;