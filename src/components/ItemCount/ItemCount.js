import { React, useState, useEffect } from 'react';
import { Col, Button, Card, Modal } from 'react-bootstrap';
import './ItemCount.css'

function ItemCount(props) {

    const { title, pictureUrl, stock, description, initial } = props.props;
    const [counter, setCounter] = useState(0);


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const Increment = () => {

        if ((counter + parseInt(initial) < parseInt(stock))) {
            setCounter(counter + 1);
        }
    };

    const Decrement = () => {
        if ((counter + parseInt(initial) > parseInt(initial))) {
            setCounter(counter - 1);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            console.log("Gettin' Data");

        }, 2000);
    }, []);

    return (
        <>
            <Col><Card
                className="card-container"
                text='dark'
                style={{ width: '18rem' }}
            >
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={pictureUrl} className="img-product" />
                    <Card.Text>{description}
                    </Card.Text>
                    <Card.Text>Stock: {stock}</Card.Text>
                    <Card.Text>Stock Inicial: {initial}</Card.Text>

                    <div className="btn-counter">

                        <Button variant="primary" className="btn-counter-add" onClick={Increment}>+</Button>
                        <Card.Text className="number-counter">{counter + parseInt(initial)}</Card.Text>
                        <Button variant="primary" className="btn-counter-add" onClick={Decrement}>-</Button>
                    </div>
                    <Button onClick={handleShow}>Agregar a Carrito</Button>
                </Card.Body>
            </Card></Col>
            <Modal className="modal-container" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cantidad Seleccionada {title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{counter + parseInt(initial)}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>

                </Modal.Footer>
            </Modal>

        </>





    );
}



export default ItemCount;