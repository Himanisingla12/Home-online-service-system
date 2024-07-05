import React, { useState } from 'react';
import { Table, message } from 'antd';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import CustomFooter from '../components/CustomFooter';
import NavBar from '../components/NavBar';

const Notifications = () => {
    const location = useLocation();
    const { notificationData, role } = location.state || {};

    // Ensure each item has a unique key
    const [notificationItems, setItems] = useState(
        (notificationData || []).map((item, index) => ({ ...item, key: item.key || index }))
    );

    console.log(`Notification data is ${JSON.stringify(notificationData)} and role is ${role}`);

    const handleAction = async (record) => {
        try {
            const resp = await axios.post('/api/v1/user/mailProvider', record);
            if (resp.data.success) {
                message.success('Mail sent successfully');
            } else {
                message.error('Failed to send mail to provider');
            }
        } catch (error) {
            message.error('Error in sending mail to provider');
        }
    };

    const handleDelete = async (key) => {
        try {
            const response = await axios.delete(`/api/v1/admin/notifications/${key}`);
            if (response.data.success) {
                const updatedData = notificationItems.filter((item) => item.key !== key);
                setItems(updatedData);
                message.success('Notification deleted successfully');
            } else {
                message.error('Failed to delete notification');
            }
        } catch (error) {
            message.error('Error in deleting notification');
        }
    };

    const getColumns = (role) => {
        let columns = [];
        switch (role) {
            case 'admin':
                columns = [
                    {
                        title: 'Service Name',
                        dataIndex: 'serviceName',
                        width: 100,
                        key: 'serviceName',
                    },
                    {
                        title: 'Category',
                        dataIndex: 'serviceCategory',
                        width: 100,
                        key: 'serviceCategory',
                    },
                    {
                        title: 'Skills',
                        dataIndex: 'skills',
                        width: 100,
                        key: 'skills'
                    },
                    {
                        title: 'Description',
                        dataIndex: 'description',
                        width: 150,
                        key: 'description'
                    },
                    {
                        title: 'Available slot',
                        dataIndex: 'time',
                        width: 100,
                        key: 'time'
                    },
                    {
                        title: 'Price',
                        dataIndex: 'price',
                        width: 100,
                        key: 'price'
                    },
                    {
                        title: 'Action',
                        width: 250,
                        key: 'action',
                        render: (text, record) => (
                            <>
                                <button
                                    className="btn btn-success"
                                    style={{ marginRight: 8 }}
                                    onClick={() => handleAction(record)}
                                >
                                    Accept
                                </button>
                                <button
                                    className='btn btn-danger'
                                    onClick={() => handleDelete(record.key)}
                                >
                                    Reject
                                </button>
                            </>
                        ),
                    }
                ];
                break;
            default:
                columns = [];
        }
        return columns;
    };

    const columns = getColumns(role);

    return (
        <>
            <NavBar />
            <Table
                columns={columns}
                dataSource={notificationItems}
                style={{
                    marginTop: '70px',
                    width: "70%",
                    margin: "auto",
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    caretColor: "transparent",
                }}
            />
            <CustomFooter />
        </>
    );
};

export default Notifications;
