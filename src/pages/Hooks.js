import React, { useState } from 'react';
import '../assets/css/Hooks.css';

const Hooks = () => {
    const [isNama, setIsNama] = useState(true); // jennie adalah initialState (state permulaan/ awal)
    const [isSelected, setIsSetelected] = useState(true);
    
    const ubahNama = () => {
        // setIsNama(!isNama);
        if(isNama) {
            setIsNama(false)
        } else {
            setIsNama(true)
        }

        setIsSetelected(!isSelected);
    };

    console.log('isNama =>', isNama);

    return (
        <>
            <p>Hooks Pertama</p>
            {/* kode di bawah, namanya ternary operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator?retiredLocale=id */}
            <p className={isSelected ? 'red' : 'green'}>Namaku adalah {isNama ? 'Jennie': 'Rose'}</p>
            <button onClick={ubahNama}>Ubah Nama!</button>
        </>
    );
};

export default Hooks;