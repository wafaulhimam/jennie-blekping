import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Contributor = () => {
    const [users, setUsers] = useState([]); // set initialStatenya, dari bentuk data yang mau kita ambil dari BE
    const feAthon = [
        {
            nama: "Aaron",
            email: "aaron@gmail.com",
        },
        {
            nama: "Bambang",
            email: "bambang@google.com",
        },
    ];

    useEffect(() => {
        // taruh kode ngambil data (fetching Data) dari BE di sini
        // di sinilah, terjadi proses componentDidMount dan componenttDidUpdate
        const fetchData = async () => {
            const result = await axios('https://reqres.in/api/users?page=2');
            setUsers(result.data.data); // data spesifik yang kita mau tampilkan di FE, ada di sini
        };
        fetchData();
    }, []); // array kosong ini, adalah willUnmount kalau dibandingan dengan class component

    console.log('users =>', users);

    return (
        <>
            <h1>Big thanks to:</h1>

            {users.map((list, index) => (
                <ul key={index}>
                    <li>{list.email}</li>
                    <li>{list.first_name}</li>
                    <img alt="gambar" src={list.avatar} />
                </ul>
            ))};

            {feAthon.map((element, key) => {
                console.log('element =>', element);
                console.log('key =>', key);
                return (
                    <div key={key}>
                        <p>{element.nama}</p>
                    </div>
                )
            })}
        </>
    );
};

export default Contributor;