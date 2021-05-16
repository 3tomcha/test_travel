import React, { useDebugValue } from 'react';
const applicationID = process.env.applicationID;
const url = `https://app.rakuten.co.jp/services/api/Travel/VacantHotelSearch/20170426?applicationId=${applicationID}&format=json&largeClassCode=japan&middleClassCode=akita&smallClassCode=tazawa&checkinDate=2021-12-01&checkoutDate=2021-12-02&adultNum=2`;

type Hotels = {
    pagingInfo: Object,
    hotels: Hotel[]
}

type Hotel = {
    hotel: HotelBasic[]
}

type HotelBasic = {
    hotelBasicInfo: HotelBasicInfo,
    roomInfo: RoomInfo,
}

type HotelBasicInfo = {
    [key: string]: Number | String
}
type RoomInfo = {
    [key: string]: Number | String
}


let hotelData: Hotels[] = [];


const HotelList = () => {
    const HotelInfo = () => {
        return (
            <div>aaa</div>
        );
    }
    // const hotelInfo = () => fetch(url).then(data => {
    //     const temp: any = data.json();
    //     hotelData = temp.hotels; // `data.json()` の呼び出しで解釈された JSON データ
    //     console.log(hotelData);
    //     return hotelData.map(hotels => {
    //         useDebugValue(hotels);
    //         return 'aaa';
    //         // hotels.hotels.map(hotel => {
    //         //     hotel.hotel.map((key, value) => {
    //         //         console.log(value);
    //         //         {key}{value}
    //         //     })  
    //         // });
    //     });
    // });
                        
    return (
        <div><HotelInfo/></div>
    );
};

export default HotelList;