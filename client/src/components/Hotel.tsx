import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import '../css/hotel.css';

type HotelProps = {
    name: string
    special: string
    minCharge: string
    reviewAverage: string
}
const Hotel = (props: HotelProps) => {
    return (
        <div>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.special}</Card.Text>
                <Card.Text>{props.minCharge}</Card.Text>
                <Card.Text>{props.reviewAverage}</Card.Text>
            </Card.Body>
        </div>
    )
}

export default Hotel;