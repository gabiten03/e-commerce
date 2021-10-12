import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router';


import DataJSON from '../../assets/equipos.json'
import ItemDetail from '../ItemDetail/ItemDetail';


let flag;
function ItemDetailContainer() {
    const { id } = useParams()

    const [ListItem, setListItem] = useState(0);

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


                    {ListItem[id - 1] ? <ItemDetail items={ListItem[id - 1]} /> : null}


                </Col>
            </Row>

        </>
    )
}


export default ItemDetailContainer

