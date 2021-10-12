
import { React } from 'react';
import { Card } from 'react-bootstrap';

import { Link } from 'react-router-dom'

function ItemDetail(props) {
    console.log(props)
    const { title, pictureUrl, stock, description, initial, id } = props;
    return (


        <Card
            className="card-container"
            text='dark'
            style={{ width: '18rem' }}
        >
            <Card.Body>

                <Link to={`/detail/${id}`} style={{ textDecoration: 'none' }} >
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={pictureUrl} className="img-product" />
                    <Card.Text>{description}
                    </Card.Text>
                    <Card.Text>Stock: {stock}</Card.Text>
                    <Card.Text>Stock Inicial: {initial}</Card.Text>
                </Link>

            </Card.Body>
        </Card>
    )
}

export default ItemDetail
