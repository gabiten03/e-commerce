import React from 'react'
import { Spinner } from 'react-bootstrap'
/* import Item from '../Item/Item' */
import ItemCount from '../ItemCount/ItemCount'

function ItemList({ items }) {

    return (
        <>
            {Object.keys(items).length ? (
                /*  items.map((elements, idx) =>  <Item props={elements} key={idx} /> )) : (<Spinner animation="border" role="status"> </Spinner>) */
                items.map((elements, idx) => <ItemCount props={elements} key={idx} />)) : (<Spinner animation="border" role="status"> </Spinner>)

            }
        </>

    );
}

export default ItemList


