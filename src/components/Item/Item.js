import React from 'react'
import { Card } from 'react-bootstrap';
import './Item.css'


function Item(props) {
    console.log(props)
    const { title, pictureUrl, stock, description, price } = props.props;

    return (
        <div>
            <Card className="card-container">
                <Card.Title>{title} </Card.Title>
                <Card.Img className=".card-img-container" src={pictureUrl} />
                <Card.Text>Stock: {stock}</Card.Text>
                <Card.Text>Precio: ${price}</Card.Text>
                <Card.Text>Descripcion: {description}</Card.Text>
            </Card>
        </div >
    )
}

export default Item
