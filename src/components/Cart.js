import React, { useState } from 'react';
import { Table } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import './Cart.css';
import NavBar from './NavBar';
import { DeleteOutlined } from '@ant-design/icons';
import CustomFooter from './CustomFooter';

const Cart = () => {
    const location = useLocation();
    const [cartItems, setCartItems] = useState(location.state.cartItems || []);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/book');
    };

    const handleDelete = (key) => {
        console.log(`key is ${key}`)
        const updatedCartItems = cartItems.filter((item) => item.key !== key);
        setCartItems(updatedCartItems);
    };

    const columns = [
        {
            title: 'Service',
            dataIndex: 'name',
        },
        {
            title: 'Contact-details',
            dataIndex: 'contact',
        },
        {
            title: 'Address',
            dataIndex: 'location',
        },
        {
            title: 'Price',
            dataIndex: 'price',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div className="action-buttons">
                    <button className='btn btn-success' style={{ marginRight: 8 }} onClick={handleClick}>
                        Check out
                    </button>
                    <DeleteOutlined
                        style={{ fontSize: "20px", marginLeft: "10px", color: "red" }}
                        onClick={() => handleDelete(record.key)}
                    />
                </div>
            ),
        },
    ];

    return (
        <>
            <NavBar />
            <div className="cart-container">
                <div className="table-container">
                    <Table
                        columns={columns}
                        dataSource={cartItems}
                        style={{
                            marginTop: '24px',
                            width: "60%",
                            margin: "auto",
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            caretColor: "transparent",
                        }}
                    />
                </div>
                <div>
                    <CustomFooter />
                </div>
            </div>
        </>
    );
};

export default Cart;
