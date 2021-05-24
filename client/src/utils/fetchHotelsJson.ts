import fetch from 'node-fetch';
require('dotenv').config();
import { Props as HotelListProps } from '../components/Hotellist';
import { formatDate } from '../components/Searchform';

type Hotel = {
    hotel: object[]
}

// 緯度・経度・チェックイン日・チェックアウト日からホテルの情報を取得する
// 日付をDate型からStringへ変換
export const fetchHotelsJson = async(hotelListProps: HotelListProps): Promise<Hotel[]> => {
    const applicationID = process.env.applicationID;
    const latitude: number = hotelListProps.coordinates.latitude;
    const longitude: number = hotelListProps.coordinates.longitude;

    const checkInDate = formatDate(hotelListProps.checkinDate);
    const checkOutDate = formatDate(hotelListProps.checkoutDate);
    const url = new URL(`https://app.rakuten.co.jp/services/api/Travel/VacantHotelSearch/20170426?format=json&checkinDate=${checkInDate}&checkoutDate=${checkOutDate}&latitude=${latitude}&longitude=${longitude}&datumType=1&searchRadius=3&applicationId=${applicationID}`);
    const response = await fetch(url);
    const json: any = await response.json();

    return json.hotels;
}