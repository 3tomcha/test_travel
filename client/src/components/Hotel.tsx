import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import styles from '../css/hotel.css';

type HotelProps = {
    name: string
    special: string
    minCharge: string
    reviewAverage: string
    image: string
}
const Hotel = (props: HotelProps) => {
    return (
        <Card className={styles.hotel}>
            <Card.Img src={props.image}/>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.special}</Card.Text>
                <Card.Text>{props.minCharge}</Card.Text>
                <Card.Text>{props.reviewAverage}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Hotel;