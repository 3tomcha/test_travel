import React, { useState, FormEvent } from 'react';
import { Card, FormControl, FormGroup, InputGroup } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker-cssmodules.min.css";
var applicationID = process.env.applicationID;
// var url = `https://app.rakuten.co.jp/services/api/Travel/VacantHotelSearch/20170426?applicationId=${applicationID}&format=json&largeClassCode=japan&middleClassCode=akita&smallClassCode=tazawa&checkinDate=2021-12-01&checkoutDate=2021-12-02&adultNum=2`;

const Searchform = () => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const [startDate, setStartDate] = useState<Date | null>(today);
    const [endDate, setEndDate] = useState<Date | null>(tomorrow);

    const search = (e: FormEvent) => {
        e.preventDefault();
        let url = new URL('https://app.rakuten.co.jp/services/api/Travel/VacantHotelSearch/20170426');
        let searchParams = new URLSearchParams();
        // 基本的にはapplicationIdは入っていると考える。必要に応じてエラー処理を加える
        searchParams.append('applicationId', applicationID || '112111');
        searchParams.append('checkinDate', formatDate(startDate));
        searchParams.append('checkoutDate', formatDate(endDate));
        url.search = searchParams.toString();
        console.log(url.href);
    };

    const formatDate = (date: Date | null): string => {
        if (!date) {
            date = today;
        }
        // APIで使う2021-12-01といった形で返す
        const year: string = date.getFullYear().toString();
        const month: string = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
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
                            <FormControl placeholder="東京都千代田区丸の内1丁目"></FormControl>
                        </InputGroup>
                    </Card.Body>
                    <Card.Header>
                        チェックイン日
                    </Card.Header>
                    <Card.Body>
                        <DatePicker selected={startDate} onChange={(date: Date | null) => setStartDate(date)}/>
                    </Card.Body>
                    <Card.Header>
                        チェックアウト日
                    </Card.Header>
                    <Card.Body>
                        <DatePicker selected={endDate} onChange={(date: Date | null) => setEndDate(date)}/>
                    </Card.Body>
                    <button onClick={(e) => search(e)}>
                        検索する
                    </button>
                </form>
            </Card>
        </div>
    );
};

export default Searchform;