import React, { useState } from 'react';
import { Card, FormControl, FormGroup, InputGroup } from 'react-bootstrap';
import DatePicker from 'react-date-picker';


const Searchform = () => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const [startDate, setStartDate] = useState<Date | Date[]>(today);
    const [endDate, setEndDate] = useState<Date | Date[]>(tomorrow);
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
                        <DatePicker value={startDate} onChange={(date: Date | Date[]) => setStartDate(date)}/>
                    </Card.Body>
                    <Card.Header>
                        チェックアウト日
                    </Card.Header>
                    <Card.Body>
                        <DatePicker value={endDate} onChange={(date: Date | Date[]) => setEndDate(date)}/>
                    </Card.Body>
                </form>
            </Card>
        </div>
    );
};

export default Searchform;