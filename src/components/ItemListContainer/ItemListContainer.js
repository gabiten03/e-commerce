import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import './ItemListContainer.css'

import DataJSON from '../../assets/equipos.json'
import ItemList from '../ItemList/ItemList'



function ItemListContainer(match) {


    const [ListItems, setListItems] = useState(0);

    useEffect(() => {
        const dataEquipment = new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve(DataJSON)
            }, 2000);
        });

        dataEquipment.then((response) => {
            setListItems(response);
        });

    }, []);

    return (
        < >
            <Row className="item-list-container" >
                <Col className="d-flex justify-content-center">
                    <ItemList items={ListItems} />

                </Col>
            </Row>
        </>
    )
}

export default ItemListContainer;


