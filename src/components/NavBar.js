import React, { useState, useEffect } from 'react';
import { Input, Badge, Dropdown, Menu, message, Layout, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-scroll';
import { BellOutlined } from '@ant-design/icons';
import { ShoppingCartOutlined, DownOutlined } from '@ant-design/icons';

const NavBar = () => {
    const { Header } = Layout;
    const navigate = useNavigate();
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    message.error('Please log in first');
                    return;
                }
                const resp = await axios.get("/api/v1/user/current-user", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
                if (resp.data.success) {
                    setUser(resp.data.data);
                    console.log("User details fetched:", resp.data.data);
                } else {
                    message.error('Failed to fetch user details');
                }
            } catch (error) {
                message.error('Error fetching user details');
                console.log(`Error fetching user details: ${error}`);
            }
        };
        fetchDetails();
    }, []);

    const handleNotification = (notifications, role) => {
        navigate('/notifications', { state: { notificationData: notifications, role } });
    };

    const handleCartClick = (cartItems) => {
        navigate('/cart', { state: { cartItems } });
    };

    const categoryMenu = (
        <Menu>
            <Menu.Item key="1"><a href="/service/6684073258d3527cf6263dc7" style={{ textDecoration: "none" }}>Electrician</a></Menu.Item>
            <Menu.Item key="2"><a href="/service/6684070458d3527cf6263dc6" style={{ textDecoration: "none" }}>Plumber</a></Menu.Item>
            <Menu.Item key="3"><a href="/service/66840a2d58d3527cf6263dd8" style={{ textDecoration: "none" }}>Carpenter</a></Menu.Item>
            <Menu.Item key="4"><a href="/service/668407a058d3527cf6263dc8" style={{ textDecoration: "none" }}>Chef-A-Home</a></Menu.Item>
            <Menu.Item key="5"><a href="/service/6684082558d3527cf6263dc9" style={{ textDecoration: "none" }}>Car Care</a></Menu.Item>
            <Menu.Item key="6"><a href="/service/6684084f58d3527cf6263dca" style={{ textDecoration: "none" }}>Baby Care</a></Menu.Item>
            <Menu.Item key="7"><a href="/service/6684b88044c765f6b8ecc7e4" style={{ textDecoration: "none" }}>Repair</a></Menu.Item>
            <Menu.Item key="8"><a href="/service/66840a5a58d3527cf6263dd9" style={{ textDecoration: "none" }}>HD Cleaning</a></Menu.Item>
        </Menu>
    );
    const handleLogOut = () => {
        try {
            localStorage.removeItem('token');
            message.success('log out Successfully');
            window.location.reload();

        }
        catch (error) {
            message.error('please log in first');
        }

    }
    const handleProvider = () => {
        navigate('/provider');
    }
    const userMenu = (
        <Menu>
            <Menu.Item key="1" onClick={handleProvider}><p>Apply for Service</p></Menu.Item>
            <Menu.Item key="2"><p>History</p></Menu.Item>
            <Menu.Item key="3" onClick={handleLogOut}><p>Log Out</p></Menu.Item>
        </Menu>

    )

    return (
        <Header className='navbar-container'>
            <Row gutter={[200, 200]} justify='space-between' align='middle'>
                <Col md={5} sm={5} xs={24} className='navbar-section'>
                    <div className='logo'>
                        <img src={process.env.PUBLIC_URL + '/images/v.png'} alt="Logo" />
                    </div>
                </Col>
                <Col md={14} sm={14} xs={24} className='navbar-section'>
                    <Dropdown overlay={categoryMenu} placement="bottomRight">
                        <div className='categories' >
                            <p style={{ marginRight: "30px", marginTop: "15px", fontSize: "22px" }}>Categories</p>
                            <DownOutlined className='dropdown-icon' s />
                        </div>
                    </Dropdown>
                    <Link to="hero" className='links' spy={true} smooth={true} offset={-100} duration={500} >Home</Link>
                    <Link to="aboutus" className='links' spy={true} smooth={true} offset={-100} duration={500}>About Us</Link>
                    <Link to="ourServices" className='links' spy={true} smooth={true} offset={-100} duration={500} >Services</Link>
                    <Link to="contactus" className='links' spy={true} smooth={true} offset={-100} duration={500} >Contact Us</Link>
                </Col>
                <Col md={5} sm={5} xs={24} className='navbar-section' style={{ marginRight: "0px" }}>

                    <div className='navbar-icons'>

                        {
                            user.name ? (
                                <Dropdown overlay={userMenu} placement="bottomRight">
                                    <div>
                                        <div className='user-profile'  >
                                            <p >{user.name.charAt(0).toUpperCase()}</p>
                                        </div>
                                    </div>
                                </Dropdown>

                            ) : (
                                <button className='btn btn-primary' onClick={navigate('/login')}>Log in</button>
                            )
                        }
                        <Badge count={user.notifications ? user.notifications.length : 0} style={{ caretColor: "transparent" }} ><BellOutlined className='navbar-icon' onClick={() => handleNotification(user.notifications, user.role)} style={{ fontSize: "28px" }} />
                        </Badge>
                        <Badge count={user.cart ? user.cart.length : 0}>
                            <ShoppingCartOutlined className='navbar-icon' onClick={() => handleCartClick(user.cart)} />
                        </Badge>
                    </div>
                </Col>
            </Row>
        </Header>
    );
};

export default NavBar;
