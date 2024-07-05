import React from 'react';
import NavBar from '../components/NavBar';
import { Form, Input, Button, DatePicker, TimePicker, Select, Card, message } from 'antd';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
const { Option } = Select;

const BookingForm = ({ finishHandler }) => {
    return (
        <>
            <NavBar />
            <Card title="Booking Form" style={{ maxWidth: '600px', margin: '0 auto' }}>
                <Form layout='vertical' onFinish={finishHandler}>

                    <Form.Item label="Payment Method" name='payment' rules={[{ required: true, message: 'Please select a payment method' }]}>
                        <Select placeholder="Select a payment method">
                            <Option value="credit_card">Credit Card</Option>
                            <Option value="debit_card">Debit Card</Option>
                            <Option value="paypal">PayPal</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Card Number" name='card_number' rules={[{ required: true, message: 'Please enter your card number' }]}>
                        <Input placeholder="Enter your Card Number" />
                    </Form.Item>
                    <Form.Item label="Card Expiry Date" name='expiry_date' rules={[{ required: true, message: 'Please enter your card expiry date' }]}>
                        <DatePicker picker="month" style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item label="CVV" name='cvv' rules={[{ required: true, message: 'Please enter your CVV' }]}>
                        <Input placeholder="Enter your CVV" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" onClick={handlePay}>
                            Book Now
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </>
    );
};

export default BookingForm;

