import { React, useState, useEffect } from 'react';
import { Col, Button, Card } from 'react-bootstrap';
import './ItemCount.css'

function ItemCount(props) {

    const [counter, setCounter] = useState(0);


    const Increment = () => {

        if ((counter + parseInt(props.inicial)) < parseInt(props.stock)) {
            setCounter(counter + 1);
        }
    };

    const Decrement = () => {
        if ((counter + parseInt(props.inicial)) > parseInt(props.inicial)) {
            setCounter(counter - 1);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            console.log("Gettin' Data");

        }, 2000);
    }, []);

    return (

        <Col><Card
            className="card-container"
            text='dark'
            style={{ width: '18rem' }}
        >


            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Img variant="top" src={props.url} className="img-product" />
                <Card.Text>{props.description}
                </Card.Text>
                <Card.Text>Stock: {props.stock}</Card.Text>
                <Card.Text>Stock Inicial: {props.inicial}</Card.Text>

                <div className="btn-counter">

                    <Button variant="primary" className="btn-counter-add" onClick={Increment}>+</Button>
                    <Card.Text className="number-counter">{counter + parseInt(props.inicial)}</Card.Text>
                    <Button variant="primary" className="btn-counter-add" onClick={Decrement}>-</Button>
                </div>
                <Button onClick={Decrement}>Agregar a Carrito</Button>
            </Card.Body>
        </Card></Col>







    );
}

export default ItemCount;