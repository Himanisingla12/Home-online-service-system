import React from 'react'
import NavBar from '../components/NavBar';
import { Form, Input, message } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import CustomFooter from '../components/CustomFooter';
const Login = () => {
    const navigate = useNavigate();
    const finishHandler = async (values) => {
        try {
            const resp = await axios.post('/api/v1/user/login', values);
            if (resp.data.success) {
                message.success("logged in successfully")
                localStorage.setItem("token", resp.data.token)
                navigate('/');
            }
        } catch (error) {
            console.log(error);
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
                        <Form.Item label="UserEmail" name='email'>
                            <Input type="email" placeholder="Enter your Email" required />
                        </Form.Item>
                        <Form.Item label="UserPassword" name='password'>
                            <Input type="password" placeholder="Enter your Password" required />
                        </Form.Item>
                        <div className='not-a-user'>
                            <Link to='/register'>Not a user? Register here</Link>
                            <button type='submit' className='btn btn-primary ms-5' style={{ padding: "5px 15px" }}>Login</button></div>
                    </Form>
                </div>
            </div>
            <div className='footers'>
                <CustomFooter />

            </div>
        </>
    )
}
export default Login
