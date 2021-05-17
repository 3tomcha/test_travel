import React, { useEffect, useState } from 'react';
import Hotel from './Hotel';

type HotelProps = {
    hotelsJson: any
}
const Hotels = (props: HotelProps) => {
    try {  
        if (!props.hotelsJson) {
            return 'ホテルが見つかりませんでした';
        }
        return props.hotelsJson.map((hotels: any, index: number) => 
            <Hotel name={hotels.hotel[0].hotelBasicInfo.hotelName}
                special={hotels.hotel[0].hotelBasicInfo.hotelSpecial}
                minCharge={hotels.hotel[0].hotelBasicInfo.hotelMinCharge}
                reviewAverage={hotels.hotel[0].hotelBasicInfo.reviewAverage}
                key={index}/> 
        );   
    } catch (error) {
        console.log(error);
        return error.message;
    }
};

export default Hotels;