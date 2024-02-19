import React from 'react'
import "./style.css"
const Service = () => {
    return (
        <div className="bg-[#ffff]  " >
        <div className='p-8 row flex flex-wrap items-center w-full'>
        <div className='col-lg-6 col-start-12 mx-auto mb-5 text-center p-8'>
            <span className='text-[#c76a1a] text-[15px] bg-[#c2fcf0] m-2 p-[15px] font-bold'>What We Do</span>
            <h2 className='text-[#181c28] font-sans text-[36px] m-[15px] p-[30px]'>Our <span className='text-[#c76a1a] font-sans text-[36px]'>Services</span></h2>
            <p className='text-[#181c28] font-sans text-[16px]'>This is Photoshop version of Lorem Ipsum. </p>
            <p className='text-[#181c28] font-sans text-[16px]'> Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin.</p>
            </div>
        </div>
        <div className='m-o flex justify-center align-items-center h-[100vh] bg-[#1111] p-8 '>
            <div className='w-80 h-96 relative mx-4 bg-white rounded-2xl'>
                <div className='form-control justify-center items-center object-cover absolute w-full h-full duration-300 text-black hover:text-white'>
                    <h1 className='font-sans text-[24px] m-[12px] '>Digital Branding</h1>
                    <p className='font-sans text-[16px]'>This is Photoshop version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin.</p>
                    <a href="#" className='btn'>Get Started</a>
                </div>
                <img className='rounded-2xl opacity-100 h-full hover:opacity-0' src='/assets/bg.jpg'></img>
            </div>
            <div className='crd rounded-2xl'>
                <div className='ovrlay'>
                    <h1 className='font-sans text-[24px] m-[12px]'>Seo Optimization</h1>
                    <p className='font-sans text-[16px]'>This is Photoshop version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin.</p>
                    <a href="#" className='btn'>Get Started</a>
                </div>
                <img className='image' src='/assets/bg.jpg'></img>
            </div>
            <div className='crd rounded-2xl'>
                <div className='ovrlay'>
                    <h1 className='font-sans text-[24px] m-[12px]'>Wireframe Design</h1>
                    <p className='font-sans text-[16px]'>This is Photoshop version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin.</p>
                    <a href="#" className='btn'>Get Started</a>
                </div>
                <img className='image' src='/assets/bg.jpg'></img>
            </div>
        </div>
    </div>
        
      
    )
}

export default Service