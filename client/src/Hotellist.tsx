import React, { useEffect, useState } from 'react';
var applicationID = process.env.applicationID;
var url = `https://app.rakuten.co.jp/services/api/Travel/VacantHotelSearch/20170426?applicationId=${applicationID}&format=json&largeClassCode=japan&middleClassCode=akita&smallClassCode=tazawa&checkinDate=2021-12-01&checkoutDate=2021-12-02&adultNum=2`;

const HotelList = () => {
    const [hotelName, setHotelName] = useState('');
    useEffect(() => {
        const f = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                const hotelss: any = await json.hotels;
                hotelss.map((hotels: any) => {
                    setHotelName(hotels.hotel[0].hotelBasicInfo.hotelName);
                });
            } catch (error) {
                console.log(error);
            }
        };
        f();
    });

    return (
        <div>
            {hotelName}
        </div>
    );
};

export default HotelList;