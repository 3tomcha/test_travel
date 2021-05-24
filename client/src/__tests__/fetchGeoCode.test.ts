import { fetchGeoCode, getlongitudeFromJSON, getlatitudeFromJSON } from '../utils/fetchGeoCode';
import fetch from 'node-fetch';

test('適切に取得できるか', async() => {
    const geoCode = await fetchGeoCode('東京都新宿区荒木町');
    const statusCode = geoCode.ResultInfo.Status;
    expect(statusCode).toBe(200);
});

test('JSONから緯度が取得できるか', async() => {
    const geoCode = await fetchGeoCode('東京都新宿区荒木町');
    const latitude = getlatitudeFromJSON(geoCode);
    expect(latitude).toStrictEqual("35.68985755");
});

test('JSONから経度が取得できるか', async() => {
    const geoCode = await fetchGeoCode('東京都新宿区荒木町');
    const longitude = getlongitudeFromJSON(geoCode);
    expect(longitude).toStrictEqual("139.72353351");
});