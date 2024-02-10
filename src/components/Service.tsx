import React from 'react'
import "./style.css"
const Service = () => {
    return (
        <div className="bg-[#ffff]  " >
        <div className='flex justify-center'>
            <span className='text-[#c76a1a] text-[15px] bg-[#c2fcf0] m-2 p-[15px]'>What We Do</span>
            <h2 className='text-[#181c28] font-sans text-[36px] m-[15px] p-[30px]'>Our <span className='text-[#c76a1a] font-sans text-[36px]'>Services</span></h2>
            <p className='text-[#181c28] font-sans text-[16px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        <div className='m-o p-0 flex justify-center align-items-center h-[100vh] bg-[#1111] '>
            <div className='crd'>
                <div className='ovrlay'>
                    <h1 className='font-sans text-[#181c28] text-[24px] m-[12px]'>Digital Branding</h1>
                    <p className='font-sans text-[#181c28] text-[16px]'>This is Photoshop version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin.</p>
                    <a href="#" className='btn'>Get Started</a>
                </div>
            </div>
            <div className='crd'>
                <div className='ovrlay'>
                    <h1 className='font-sans text-[#181c28] text-[24px] m-[12px]'>Seo Optimization</h1>
                    <p className='font-sans text-[#181c28] text-[16px]'>This is Photoshop version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin.</p>
                    <a href="#" className='btn'>Get Started</a>
                </div>
            </div>
            <div className='crd'>
                <div className='ovrlay'>
                    <h1 className='font-sans text-[#181c28] text-[24px] m-[12px]'>Wireframe Design</h1>
                    <p className='font-sans text-[#181c28] text-[16px]'>This is Photoshop version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin.</p>
                    <a href="#" className='btn'>Get Started</a>
                </div>
            </div>
        </div>
    </div>
        
      
    )
}

export default Service