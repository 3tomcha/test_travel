import React from 'react';
import { Card, FormControl, FormGroup, InputGroup } from 'react-bootstrap';
import DatePicker from 'react-date-picker';


const Searchform = () => {
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
                        <DatePicker/>
                    </Card.Body>
                    <Card.Header>
                        チェックアウト日
                    </Card.Header>
                    <Card.Body>
                        <DatePicker/>
                    </Card.Body>
                </form>
            </Card>
        </div>
    );
};

export default Searchform;