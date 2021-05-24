import { fetchHotelsJson } from './../utils/fetchHotelsJson';

test('ホテル情報が取得できる', async() => {

    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const hotelListProps = {
        coordinates: {
            latitude: 35.68985755,
            longitude: 139.72353351  
        },
        checkinDate: today,
        checkoutDate: tomorrow
    }

    const hotelsJson = await fetchHotelsJson(hotelListProps);

    expect(hotelsJson[0].hotel).not.toBeUndefined();

});