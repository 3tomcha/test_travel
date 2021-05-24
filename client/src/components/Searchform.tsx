import React, { useState, FormEvent, ChangeEventHandler } from 'react';
import { Card, FormControl, FormGroup, InputGroup } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker-cssmodules.min.css";
import { fetchGeoCode, getlatitudeFromJSON, getlongitudeFromJSON } from '../utils/fetchGeoCode'; 


type Props = {
    checkinDate: Date | null,
    checkoutDate: Date | null,
    handleCheckinDateChange: Function,
    handleCheckoutDateChange: Function,
    handleAddressChange: Function
};

export const formatDate = (date: Date | null): string => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    if (!date) {
        date = today;
    }
    // APIで使う2021-12-01といった形で返す
    const year: string = date.getFullYear().toString();
    const month: string = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

const Searchform = (props: Props) => {
    const startDate = props.checkinDate;
    const endDate = props.checkoutDate;
    const handleStartDateChange = props.handleCheckinDateChange;
    const handleEndDateChange = props.handleCheckoutDateChange;

    // state自体は親にセットするが、細かい処理は子に書いてみる
    // form上の住所を変えるたびに座標がセットされる
    const handleAddressChange = async(e: any) => {
        const address = e.target.value;
        // 住所を緯度経度に変更する
        const json = await fetchGeoCode(address);
        const latitude = getlatitudeFromJSON(json);
        const longitude = getlongitudeFromJSON(json);
        // 親の関数を使って、親のstateを更新
        props.handleAddressChange({latitude: latitude, longitude: longitude});
    }

    return (
        <div>
            <Card>
                <form>
                    <Card.Header>
                        地名
                    </Card.Header>
                    <Card.Body>
                        <InputGroup>
                            <FormControl placeholder="東京都千代田区丸の内1丁目" onChange={(e) => handleAddressChange(e)}></FormControl>
                        </InputGroup>
                    </Card.Body>
                    <Card.Header>
                        チェックイン日
                    </Card.Header>
                    <Card.Body>
                        <DatePicker selected={startDate} onChange={(date: Date | null) => handleStartDateChange(date)}/>
                    </Card.Body>
                    <Card.Header>
                        チェックアウト日
                    </Card.Header>
                    <Card.Body>
                        <DatePicker selected={endDate} onChange={(date: Date | null) => handleEndDateChange(date)}/>
                    </Card.Body>
                </form>
            </Card>
        </div>
    );
};

export default Searchform;