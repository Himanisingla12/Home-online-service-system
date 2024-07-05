
import React from 'react'
import { FaBars } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import NavBar from '../components/NavBar';
import './AdminHome.css';
const AdminHome = () => {
    const menuItem = [
        {
            path: '/adminusers',
            name: "Manage Users",
            icon: ''
        },
        {
            path: '/admincategory',
            name: "Manage Categories",
            icon: ''
        },
        {
            path: '/adminservice',
            name: "Manage Services",
            icon: ''
        },
        {
            path: '/adminbooks',
            name: "Manage Bookings",
            icon: ''
        }
    ]
    return (
        <>
            <NavBar />
            <div className='container'>
                <div className='sidebar'>

                    {
                        menuItem.map((item, index) => (
                            <NavLink to={item.path} key={index} className='adminlink' activeclassName='active' >
                                <div className='itemicon'>{item.icon}</div>
                                <div className='itemname'>{item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>
                <div className='line'></div>

            </div>

        </>
    )
}

export default AdminHome
