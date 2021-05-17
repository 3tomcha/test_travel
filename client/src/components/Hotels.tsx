import React, { useEffect, useState } from 'react';
import Hotel from './Hotel';

type HotelProps = {
    hotelsJson: any
}
const Hotels = (props: HotelProps) => {
    return props.hotelsJson.map((hotels: any) => 
       <Hotel name={hotels.hotel[0].hotelBasicInfo.hotelName} /> 
    );
};

export default Hotels;