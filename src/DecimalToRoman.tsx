import { Button, Card, Divider, Form, Input } from 'antd';
import React, { useState } from 'react';
import { romanNumerals } from './utility';

function DecimalToRomanConverter() {
    let [decimalInput, setDecimalInput] = useState(0);
    let [romanOutput, setRomanOutput] = useState('');

    let convertToRoman = () => {
        romanNumerals.resetRomanNumber();
        let result = romanNumerals.toRoman(decimalInput);
        setRomanOutput(result);
    }

    return <div style={{ width: '1000px' }}>
        <Card title="Convert Decimal to Roman Number" >
            <Form
                name="basic"
                layout="inline"
                onFinish={convertToRoman}
            >
                <Form.Item
                    label="Decimal Number"
                    name="decimal_number"
                    rules={[{ required: true, message: 'Field is required' }]}
                    help="max value allowed is 1000000"
                >
                    <Input
                        value={decimalInput}
                        onChange={(e) => setDecimalInput(parseInt(e.target.value))}
                        type="number"

                    />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 4, span: 2 }}>
                    <Button
                        type="primary"
                        htmlType="submit">
                        Convert
                    </Button>
                </Form.Item>
            </Form>
            {romanOutput && <div className="output-wrapper ">
                <Divider orientation="left"> Result </Divider>
                <div className="output">
                    {romanOutput}
                </div>
            </div>}
        </Card>
    </div>
}

export default DecimalToRomanConverter