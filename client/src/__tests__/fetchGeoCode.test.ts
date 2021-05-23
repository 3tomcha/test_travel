import { fetchGeoCode, getlongitudeFromJSON, getlatitudeFromJSON } from '../utils/fetchGeoCode';
import fetch from 'node-fetch';

test('適切に取得できるか', async() => {
    const geoCode = await fetchGeoCode('東京都新宿区荒木町');
    const statusCode = geoCode.ResultInfo.Status;
    expect(statusCode).toBe(200);
});

test('JSONから緯度が取得できるか', async() => {
    const geoCode = await fetchGeoCode('東京都新宿区荒木町');
    const coordinates = getlongitudeFromJSON(geoCode);
    expect(coordinates).toStrictEqual("139.72353351");
});

test('JSONから緯度が取得できるか', async() => {
    const geoCode = await fetchGeoCode('東京都新宿区荒木町');
    const coordinates = getlatitudeFromJSON(geoCode);
    expect(coordinates).toStrictEqual("35.68985755");
});