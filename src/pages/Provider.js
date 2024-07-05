import React, { useState } from 'react';
import { Form, Input, Select, Button, DatePicker, message } from 'antd';
import axios from 'axios';
import './Provider.css';
import NavBar from '../components/NavBar';
import CustomFooter from '../components/CustomFooter';
const { Option } = Select;
const { TextArea } = Input;

const Provider = () => {
    const [form] = Form.useForm();

    const handleFinish = async (values) => {
        try {
            console.log('Form Submitted:', values);
            const resp = await axios.post('/api/v1/admin/notifyAdmin', values);
            if (resp.data.success) {
                console.log('Response from server:', resp.data.message);
                message.success('Your Application saved for review');
            } else {
                message.error('Failed to save your application');
            }
        } catch (error) {
            console.log('Error:', error);
            message.error('Application not saved');
        }
    };

    return (
        <>
            <NavBar />
            <Form
                form={form}
                layout="vertical"
                onFinish={handleFinish}
            >
                <Form.Item
                    name="name"
                    label="Service Name"
                    rules={[{ required: true, message: 'Please enter the service name' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[{ required: true, message: 'Please enter the service name' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="category"
                    label="Service Category"
                    rules={[{ required: true, message: 'Please select service category' }]}
                >
                    <Select>
                        <Option value="electrician">electrician</Option>
                        <Option value="plumber">plumber</Option>
                        <Option value="repair">repair</Option>
                        <Option value="cook">cook</Option>
                        <Option value="car care">car Care</Option>
                        <Option value="baby care">baby Care</Option>
                        <Option value="carpenter">carpenter</Option>
                        <Option value="hd cleaning">hd cleaning</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="description"
                    label="Description"
                    rules={[{ required: true, message: 'Please enter a description' }]}
                >
                    <TextArea rows={2} />
                </Form.Item>

                <Form.Item
                    name="availableTime"
                    label="Available Time"
                    rules={[{ required: true, message: 'Please select available time slots' }]}
                >
                    <DatePicker.RangePicker showTime />
                </Form.Item>

                <Form.Item
                    name="experience"
                    label="Work Experience/Skills"
                    rules={[{ required: true, message: 'Please enter your work experience or skills' }]}
                >
                    <TextArea rows={1} />
                </Form.Item>
                <Form.Item
                    name="price"
                    label="Salary"
                    rules={[{ required: true, message: 'Please enter your Salary' }]}
                >
                    <TextArea rows={1} />
                </Form.Item>

                <Form.Item
                    name="additionalInfo"
                    label="Additional Information"
                >
                    <TextArea rows={2} />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit for Review
                    </Button>
                </Form.Item>
            </Form>
            <CustomFooter />
        </>

    );
};

export default Provider;
