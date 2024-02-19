'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header';
import Pelanggan from '@/components/Pelanggan';
import Footer from '@/components/Footer';
const Costumer = () => {
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = (event: any) => {
            setScrollTop(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            <Navbar scrollTop={scrollTop} />
            <Header title="Pelanggan"/>
            <Pelanggan />
            <Footer />
        </div>
    )
}

export default Costumer