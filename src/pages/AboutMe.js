import React from 'react';
import imgEifel from '../assets/images/eifel.jpg';

const AboutMe = () => {
    console.log('ini halaman about me');

    return (
        <div>
            <p>Ini halaman about me</p>
            <p>Tes</p>
            <img style={{ width: '100px' }} src={imgEifel} alt="Gambar eifel" />
        </div>
    );
};


export default AboutMe;