import { Button, Card, Divider, Form, Input } from 'antd';
import React, { useState } from 'react';
import { romanNumerals } from './utility';

function RomanToDecimalConverter() {
    let [decimalOutput, setDecimalOutput] = useState(0);
    let [romanInput, setRomanInputInput] = useState('');
    const { fromRoman, romanNumbersMap } = romanNumerals;

    let convertToRoman = () => {
        let result = fromRoman(romanInput.toUpperCase());
        setDecimalOutput(result);
    }

    return <div style={{ width: '1000px' }}>
        <Card title="Convert Roman to Decimal Number" >
            <Form
                name="basic"
                layout="inline"
                onFinish={convertToRoman}
            >
                <Form.Item
                    label="Roman Number"
                    name="roman_number"
                    rules={[{ required: true, message: 'Field is required' }]}
                >
                    <Input value={romanInput} onChange={(e) => setRomanInputInput(e.target.value)} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 4, span: 2 }}>
                    <Button type="primary" htmlType="submit">
                        Convert
                    </Button>
                </Form.Item>
            </Form>
            <div className="roman-number-info">
                <p><strong>Note:</strong> Enter bar values using following format:
                    <span className="overline">V</span>: _V 
                    <span className="overline">X</span>: _X
                    <span className="overline">L</span>: _L
                    <span className="overline">C</span>: _C
                    <span className="overline">D</span>: _D
                    <span className="overline">M</span>: _M
                </p>
            </div>
            {!!decimalOutput && <div className="output-wrapper">
                <Divider orientation="left">Result</Divider>
                <div className="output">
                    {decimalOutput < 0 ? 'Please enter valid roman number' : decimalOutput}
                </div>
            </div>}
        </Card>
    </div>
}

export default RomanToDecimalConverter