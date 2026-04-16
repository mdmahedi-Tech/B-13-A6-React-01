import React from 'react';
import image from '../../assets/banner.png'
import user from '../../assets/user.png'
import pecakge from '../../assets/package.png'
import rocket from '../../assets/rocket.png'

const Banner = () => {
    return (
        <>
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
        <div className=' btn bg-gradient-to-r from-blue-950 to-blue-500
          text-white container mx-auto 
        grid md:grid-cols-2 lg:grid-cols-3
        justify-around gap-4 py-25'>
            <div className=''>
              <p className='text-4xl font-bold'>500k+</p>
              <p className='opacity-80'>Active status</p>
            </div>
            <div className=''>
              <p className='text-4xl font-bold'>200k</p>
              <p className='opacity-80'>premium tools</p>
            </div>
            <div className=''>
              <p className='text-4xl font-bold'>4.9</p>
              <p className='opacity-80'>rating</p>
            </div>
        </div>
        {/* section get started */}
        <div className='py-10 '>
            <div className='header text-center mb-5'>
                <h1 className='text-4xl font-bold'>Get Started in 3 Steps</h1>
                <p className='opacity-80'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='cardcontainer  grid md:grid-cols-2 lg:grid-cols-3'>
                <div>
                    <div className="card bg-base-100 w-96 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                        src={user}
                        alt="Shoes"
                        className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-semibold">create accoun</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions">
                        
                        </div>
                    </div>
                    </div>
                </div>
                <div>
                    <div className="card bg-base-100 w-96 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                        src={pecakge}
                        alt="Shoes"
                        className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">create accoun</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions">
                        
                        </div>
                    </div>
                    </div>
                </div>
                <div>
                    <div className="card bg-base-100 w-96 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                        src={rocket}
                        alt="Shoes"
                        className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">create accoun</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions">
                        
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    
    );
};

export default Banner;