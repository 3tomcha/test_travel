import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Header from './Header';
import HotelList, { Coordinates } from './Hotellist';
import Searchform from './Searchform';


const Home = () => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const [startDate, setStartDate] = useState<Date | null>(today);
    const [endDate, setEndDate] = useState<Date | null>(tomorrow);
    const [coordinates, setCoordinates] = useState<Coordinates>({latitude: 35.68985755, longitude: 139.72353351});

    const handleStartDateChange: Function = (date: Date | null) => {
        setStartDate(date);
    }
    const handleEndDateChange: Function = (date: Date | null) => {
        setEndDate(date);
    }
    const handleAddressChange: Function = (coordinates: Coordinates) => {
        setCoordinates(coordinates);
    }

    return (
        <div>
            <Row>
                <Col><Header/></Col>
            </Row>
            <Row>
                <Col>
                    <Searchform 
                        checkinDate={startDate}
                        checkoutDate={endDate}
                        handleCheckinDateChange={handleStartDateChange}
                        handleCheckoutDateChange={handleEndDateChange}
                        handleAddressChange={handleAddressChange}/>
                </Col>
                <Col>
                    <HotelList
                        coordinates={coordinates}
                        checkinDate={startDate}
                        checkoutDate={endDate}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default Home;