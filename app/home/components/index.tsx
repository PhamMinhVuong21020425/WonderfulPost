'use client';
import * as React from "react"
import Navbar from "./NavBar"
import AboutUs from "./AboutUs"
import Search from "./Search"
import ContactUs from "./ContactUs";

export default function Home() {
    const [status, setStatus] = React.useState('magicpost')

    const handleStatus = (status: string) => {
        setStatus(status)
    }

    return (
        <div className="h-screen bg-gray-100 fixed w-screen">
            <Navbar status={status} handleStatus={handleStatus} />
            {
                status === 'magicpost' ? <AboutUs /> : status === 'search' ? <Search /> : <ContactUs />
            }
        </div>
    )
}