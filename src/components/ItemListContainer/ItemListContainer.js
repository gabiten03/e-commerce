import React from 'react'
import { Row } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import './ItemListContainer.css'

const ItemListContainer = () => {
    return (
        <div className="item-list-container">
            <Row >
                <ItemCount name="Comida" stock="10" inicial="2" url="https://hcti.io/v1/image/15fe7644a0dfdd967285007e97d5a55f14ad6f57f2976573c1bc8a26287dbd8c" />
                <ItemCount stock="5" inicial="0" url="https://hcti.io/v1/image/b7da049123c03cc463b88a76492ef63cd50079f51c3e2578f0121db994e85bc0" />
                <ItemCount stock="3" inicial="1" url="https://hcti.io/v1/image/15fe7644a0dfdd967285007e97d5a55f14ad6f57f2976573c1bc8a26287dbd8c" />
                <ItemCount stock="3" inicial="1" url="https://hcti.io/v1/image/b7da049123c03cc463b88a76492ef63cd50079f51c3e2578f0121db994e85bc0" />
                <ItemCount stock="3" inicial="1" url="https://hcti.io/v1/image/15fe7644a0dfdd967285007e97d5a55f14ad6f57f2976573c1bc8a26287dbd8c" />
                <ItemCount stock="3" inicial="1" url="https://hcti.io/v1/image/b7da049123c03cc463b88a76492ef63cd50079f51c3e2578f0121db994e85bc0" />
                <ItemCount stock="3" inicial="1" url="https://hcti.io/v1/image/15fe7644a0dfdd967285007e97d5a55f14ad6f57f2976573c1bc8a26287dbd8c" />
            </Row>
        </div>
    )
}

export default ItemListContainer
