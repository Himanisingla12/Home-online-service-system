import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Import the CSS file
import CustomFooter from '../components/CustomFooter';
const Service = () => {

    const { categoryId } = useParams();
    const [services, setServices] = useState([]);
    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const resp = await axios.get(`/api/v1/service/getServiceByCategory/${categoryId}`);
                if (resp.data.success) {
                    console.log(resp.data.data)
                    setServices(resp.data.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchDetails();
    }, [categoryId]);

    const handleClick = async (serviceId) => {
        try {
            const token = localStorage.getItem('token');
            const resp = await axios.get(`/api/v1/user/addtocart/${serviceId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (resp.data.success) {
                console.log("Item added to cart:", resp.data.data);
            }
        } catch (error) {
            console.log("Error adding item to cart:", error);
        }
    };

    return (
        <>
            <NavBar />

            <div className='main-box1 m-5'>
                {
                    services && services.map((val, key) => (
                        <div className='book-box' key={key}>
                            <img src={val.image} alt={val.name} />
                            <div className='content' style={{ marginLeft: "30px" }} >
                                <h3>{val.name}</h3>
                                <div className='desc'>
                                    {val.description}
                                </div>
                                <div className='details'>
                                    <p><strong>Price:</strong> {val.price}</p>
                                    <p><strong>Contact:</strong> {val.contact}</p>
                                    <p><strong>Rating:</strong> {val.rating}</p>
                                    <p><strong>Experience:</strong> {val.experience}</p>
                                    <p><strong>Location:</strong> {val.location}</p>
                                    <button className='btn btn-primary' style={{ marginRight: "200px" }} onClick={() => handleClick(val._id)}>Add to cart</button>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div >

            <div>
                <CustomFooter />
            </div>
        </>
    );
};

export default Service;
