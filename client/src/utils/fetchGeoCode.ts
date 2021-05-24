// var appID = process.env.appID;
import fetch from 'node-fetch';
require('dotenv').config();

export const fetchGeoCode = async(address: string) => {
    var appID = process.env.appID;
    try {
        const url = new URL(`https://map.yahooapis.jp/geocode/V1/geoCoder?appid=${appID}&query=${address}&output=json&datum=wgs`);
        const response = await fetch(url.toString());
        const json = await response.json();
        return json;   
    } catch (error) {
        console.error(error);
    }
};

export const getlongitudeFromJSON = (json: any): String[] => {
    return json.Feature[0].Geometry.Coordinates.split(',')[1];
};

export const getlatitudeFromJSON = (json: any): String[] => {
    return json.Feature[0].Geometry.Coordinates.split(',')[0];
};

