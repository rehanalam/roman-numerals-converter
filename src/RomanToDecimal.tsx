import { Button, Card, Divider, Form, Input } from 'antd';
import React, { useState } from 'react';
import { RomanNumerals } from './utility';

function RomanToDecimalConverter() {
    let [decimalOutput, setDecimalOutput] = useState(0);
    let [romanInput, setRomanInputInput] = useState('');

    let convertToRoman = () => {
        let result = RomanNumerals.fromRoman(romanInput.toUpperCase());
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
            <div className="output-wrapper">
                <Divider orientation="left">Result</Divider>
                <div className="output">

                    {decimalOutput === 0 ? 'Please enter valid Roman number' : decimalOutput}
                </div>
            </div>
        </Card>
    </div>
}

export default RomanToDecimalConverter