import React, { useState } from 'react';
import { Card, FormControl, FormGroup, InputGroup } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker-cssmodules.min.css";

const Searchform = () => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const [startDate, setStartDate] = useState<Date | null>(today);
    const [endDate, setEndDate] = useState<Date | null>(tomorrow);
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
                </form>
            </Card>
        </div>
    );
};

export default Searchform;