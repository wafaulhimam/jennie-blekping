import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';

// buat action types
const HANDLE_ADD = 'HANDLE_ADD';
const HANDLE_MINUS = 'HANDLE_MINUS';

// const Counter = ({ count, handleAdd, handleMinus }) => {
const Counter = (props) => {
    const { count, handleAdd, handleMinus } = props;
    const [click, setClick] = useState(100);
    const [nama, setNama] = useState('Bambang');

    const klikGan = () => {
      alert('tes yuk yuk yuk');
    };

    console.log('props =>', props);

    return (
        <div className="App">
            <div className="judul">Tes 123</div>
            <button onClick={klikGan}>Yuk Klik</button>

            <div>--Counter App Menggunakan State Biasa (useState)--</div>
            <p>Anda ngeklik {click} kali</p>
            <Button className="button-counter" color="primary" onClick={() => setClick(click + 2)}>Klik +</Button>
            <Button color="secondary" onClick={() => setClick(click - 2)}>Klik -</Button>


            <div>------------------</div>
            {/* <Card nama={nama} /> */}
            <p>Ini Kartu</p>
            <p>{nama}</p>
            <button onClick={() => setNama('mas Rahadian')}>Ubah nama!</button>

            <br />
            <br />
            <div>-- Counter App Menggunakan Redux --</div>
            <p>Kamu ngeklik sebanyak {count} kali</p>
            <Button onClick={handleMinus} style={{ marginRight: '20px' }} color="danger">-</Button>
            <Button onClick={handleAdd} color="primary">+</Button>
            {/* <p>Kamu ngeklik sebanyak {props.count} kali</p> */}
            {/* <Button onClick={props.handleMinus} style={{ marginRight: '20px' }} color="danger">-</Button> */}
            {/* <Button onClick={props.handleAdd} color="primary">+</Button> */}
        </div>
    )
}

const mapStateToProps = (globalState) => {
  return {
    count: globalState.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAdd: () => dispatch({ type: HANDLE_ADD }),
    handleMinus: () => dispatch({ type: HANDLE_MINUS }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);