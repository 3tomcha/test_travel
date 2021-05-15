import React from 'react';
const applicationID = process.env.applicationID;
const url = `https://app.rakuten.co.jp/services/api/Travel/VacantHotelSearch/20170426?applicationId=${applicationID}&format=xml&largeClassCode=japan&middleClassCode=akita&smallClassCode=tazawa&checkinDate=2021-12-01&checkoutDate=2021-12-02&adultNum=2`;

const HotelList = () => {
    return (
        <div>{url}</div>
    );
};

export default HotelList;