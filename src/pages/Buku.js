import React, { useState } from 'react';
import { connect } from 'react-redux';
import imgBook from '../assets/images/book.jpg';
import CardBook from '../components/CardBook';
import { Container, Row, Col } from 'reactstrap';

const Buku = (props) => {
    const [data, setData] = useState([]);

    const handleAdd = () => {
        const newData = {
            id: data.length + 1,
            name: `Buku ${data.length + 1}`,
            img: imgBook,
        }
        const newArr = [...data];
        // const result = newArr.concat(newData); // using es5
        const result = [...newArr, newData]; // using es6

        // const result = data.push(newData);
        setData(result);
    };

    const handleRemove = () => {
        const newArr = [...data];
        const result = newArr.slice(0, -1);
        // const result = newArr.pop();
        setData(result);
    }

    // console.log('data =>', data);

    console.log('props buku =>', props);

    return (
        <>
            <p>Buku</p>
            <p>Counter: <span style={{ fontWeight: '900' }}>{props.count}</span></p>
            <button onClick={handleAdd}>Add Book</button>
            <button onClick={handleRemove}>Remove Book</button>
            <Container>
                <Row>
                    {data.map((list, index) => (
                        <>
                            <Col>
                                <CardBook
                                    name={list.name}
                                    // id={list.id}
                                    img={list.img}
                                />
                            </Col>
                        </>
                    ))}
                </Row>
            </Container>
        </>
    )
}

const mapStateToProps = (globalState) => {
    return {
      count: globalState.count,
    };
};

export default connect(mapStateToProps)(Buku);