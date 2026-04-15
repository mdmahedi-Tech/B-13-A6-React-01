import React from 'react';
import image from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className='container mx-auto grid md:grid-cols-2 items-center py-10'>
            <div className='descriptin space-y-4'>
            <p>New: AI-Powered Tools Available</p>
            <h1 className='font-semibold text-4xl pt-4'>Supercharge Your <br /> Digital Workflow</h1>
            <p className='opacity-80'>Access premium AI tools, design assets, templates, and productivity
             software—all in one place. Start creating faster today.

            Explore Products
            </p>
            <div className='gap-4'>
                <button className='btn btn-ghost bg-blue-700 text-white'>explore products</button>
                <button className='btn btn-ghost btn-outline ml-4'>explore demu</button>
            </div>
            </div>
            <div>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Banner;