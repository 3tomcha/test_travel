import React, { useEffect, useState } from 'react';
import { fetchHotelsJson } from '../utils/fetchHotelsJson';
import Hotels from './Hotels';

export type Props = {
    coordinates: Coordinates,
    checkinDate: Date | null,
    checkoutDate: Date | null
};

export type Coordinates = {
    latitude: number, 
    longitude: number,
}

type Hotel = {
    hotel: object[]
}

// 緯度経度を元に、ホテル情報を検索し、結果を表示する
const HotelList = (props: Props) => {
    const [hotelsJson, setHotelsJson] = useState({});

    (async() => {
        const hotelsJson: Hotel[] = await fetchHotelsJson(props);
        setHotelsJson(hotelsJson);
    })();
    
    return <Hotels hotelsJson={hotelsJson}/>;
};

export default HotelList;