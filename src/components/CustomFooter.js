import React from 'react';
import { Layout, Row, Col } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Link } from 'react-scroll';
const { Footer } = Layout;

const CustomFooter = () => {
    return (
        <Footer className="footer-container" id='contactus' style={{ marginTop: "100px" }}>
            <Row justify="space-between">
                <Col xs={24} sm={12} md={6} className="footer-section">
                    <h3>Contact Us</h3>
                    <p>1234 Main Street, Mansa</p>
                    <p>Email: support@homeonlineservice.com</p>
                    <p>Phone: +123 456 7890</p>
                </Col>
                <Col xs={24} sm={12} md={6} className="footer-section">
                    <h3>Quick Links</h3>
                    <ul >
                        <li > <Link to="hero" className='links' spy={true} smooth={true} offset={-100} duration={500} style={{ textDecoration: "none" }}>Home</Link></li>
                        <li >
                            <Link to="aboutus" className='links' spy={true} smooth={true} offset={-100} duration={500} style={{ textDecoration: "none" }}>About Us</Link>
                        </li>
                        <li> <Link to="ourServices" className='links' spy={true} smooth={true} offset={-100} duration={500} style={{ textDecoration: "none" }} >Services</Link></li>
                        <li>    <Link to="contactus" className='links' spy={true} smooth={true} offset={-100} duration={500} style={{ textDecoration: "none" }}>Contact Us</Link></li>

                    </ul>
                </Col>
                <Col xs={24} sm={12} md={6} className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <FacebookOutlined />
                        <TwitterOutlined />
                        <InstagramOutlined />
                        <LinkedinOutlined />
                    </div>
                </Col>

            </Row>
            <div className="footer-bottom">
                <p>&copy; 2024 Home Online Service. All rights reserved.</p>
            </div>
        </Footer>
    );
};

export default CustomFooter;
