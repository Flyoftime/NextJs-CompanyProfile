import Image from 'next/image'
import React from 'react'

const Header = () => {
    const title =[
        {
            title: 'History',
            tile2: 'Visi Misi'
        }
    ]
    return (
        <div className=''>
            <div className="hero h-full ">
            <img className='w-[100vw] h-[50vh]' src='/assets/bg.jpg'></img>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content pt-20">
                    <div className="max-w-md pt-2">
                        <h1 className="text-5xl font-bold text-white pt-2 pb-4">History</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header