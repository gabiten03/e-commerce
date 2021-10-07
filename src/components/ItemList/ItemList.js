import React from 'react'
import { Spinner } from 'react-bootstrap'
import Item from '../Item/Item'

function ItemList({ items }) {

    return (
        <>
            {Object.keys(items).length ? (
                items.map((elements, idx) => <Item props={elements} key={idx} />)) : (<Spinner animation="border" role="status"> </Spinner>)
            }
        </>

    );
}

export default ItemList


