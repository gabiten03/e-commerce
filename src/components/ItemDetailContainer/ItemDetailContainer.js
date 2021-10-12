import React, { useState, useEffect } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { useParams } from 'react-router';


import DataJSON from '../../assets/equipos.json'
import ItemDetail from '../ItemDetail/ItemDetail';


function ItemDetailContainer(match) {
    console.log(match.match.params)
    const { id } = match.match.params
    const [ListItem, setListItem] = useState([]);

    useEffect(() => {
        const dataEquipment = new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve(DataJSON)
            }, 2000);
        });

        dataEquipment.then((response) => {
            setListItem(response);

        });

    }, []);

    return (


        < >

            < Row className="item-list-container" >
                <Col className="d-flex justify-content-center">
                    {ListItem.filter(product => product.id == id).map((filteredP) => (


                        <Card
                            className="card-container"
                            text='dark'
                            style={{ width: '18rem' }}
                        >
                            <Card.Body>

                                <Card.Title>{filteredP.title}</Card.Title>
                                <Card.Img variant="top" src={filteredP.pictureUrl} className="img-product" />
                                <Card.Text>{filteredP.description}
                                </Card.Text>
                                <Card.Text>Stock: {filteredP.stock}</Card.Text>
                                <Card.Text>Stock Inicial: {filteredP.initial}</Card.Text>


                            </Card.Body>
                        </Card>

                    ))}



                </Col>
            </Row>

        </>
    )
}


export default ItemDetailContainer

