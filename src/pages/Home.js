import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Carasol from '../components/Carasol';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Testimonials from '../components/Testimonials';
import CustomFooter from '../components/CustomFooter';

const Home = () => {
    const [categories, setCategory] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const resp = await axios.get('/api/v1/category/getCategory');
                if (resp.data.success) {
                    setCategory(resp.data.data);
                    console.log(resp.data.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchDetails();
    }, []);

    const handleClick = (id) => {
        navigate(`/service/${id}`);
    };

    return (
        <>
            <NavBar />
            <div className='main-box'>
                <Carasol />
            </div>
            <div className='title' style={{ marginTop: "70px" }}>
                <h1 style={{ color: "#0a4066", textAlign: "center" }}>What We Offer</h1>
            </div>
            <div className="categories-container" id='ourServices'>
                {categories.map((val, ind) => (
                    <div className="category-card" key={ind} onClick={() => handleClick(val._id)}>
                        <div className='img-front'><img src={val.image} alt={val.title} style={{ width: "100%", height: "250px", margin: "10px " }} /></div>
                        <div className='img-back'> <button className='btn btn-primary'>View Details</button> </div>
                    </div>
                ))}
            </div>
            <div >
                <h1 style={{ color: "#0a4066", textAlign: "center", margin: "30px" }}>Testimonials</h1>
                <Testimonials />
            </div>
            <div>
                <CustomFooter />
            </div>
        </>
    );
};

export default Home;
