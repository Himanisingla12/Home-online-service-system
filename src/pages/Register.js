import React from 'react';
import './Register.css'
// import NavBar from '../components/NavBar';
import { Form, Input, message } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/NavBar';
import CustomFooter from '../components/CustomFooter';
const Register = () => {
    const navigate = useNavigate();
    const finishHandler = async (values) => {
        try {
            const resp = await axios.post('/api/v1/user/register', values);
            if (resp.data.success) {
                message.success("registered successfully")
                navigate('/login');
            }
        } catch (error) {
            message.error("something went wrong")
        }
    }
    return (
        <>
            <NavBar />
            <div className='nav-form'>
            </div>
            <div className='form-conatiner'>
                <div className='form-items' style={{ width: "350px" }}>
                    <Form layout='vertical' onFinish={finishHandler}>
                        <Form.Item label="UserName" name='name'>
                            <Input type="name" placeholder="Enter your name" required />
                        </Form.Item>
                        <Form.Item label="UserEmail" name='email'>
                            <Input type="email" placeholder="Enter your Email" required />
                        </Form.Item>
                        <Form.Item label="UserPassword" name='password'>
                            <Input type="password" placeholder="Enter your Password" required />
                        </Form.Item>
                        <div className='not-a-user'>
                            <Link to='/login'>Already Registered? login </Link>
                            <button type='submit' className='btn btn-primary ms-5'>Register</button></div>
                    </Form>
                </div>
            </div>
            <div className='footers'>
                <CustomFooter />

            </div>

        </>
    )
}
export default Register
