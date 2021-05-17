import React, { useEffect, useState } from 'react';
import Hotels from './Hotels';
var applicationID = process.env.applicationID;
var url = `https://app.rakuten.co.jp/services/api/Travel/VacantHotelSearch/20170426?applicationId=${applicationID}&format=json&largeClassCode=japan&middleClassCode=akita&smallClassCode=tazawa&checkinDate=2021-12-01&checkoutDate=2021-12-02&adultNum=2`;


const HotelList = () => {
    const [hotelsJson, setHotelsJson] = useState([]);

    useEffect(() => {
        const f = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                const hotelsJson = await json.hotels;
                setHotelsJson(hotelsJson);
            } catch (error) {
                console.log(error);
            }
        };
        f();
    });

    return <Hotels hotelsJson={hotelsJson}/>;
};

export default HotelList;