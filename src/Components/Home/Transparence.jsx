import React from 'react';

const Transparence = () => {
    return (
        <>
        {/* transparen section */}
        <div className='text-center space-y-3 py-8'>
          <h1 className='text-6xl font-bold'>Simple, Transparent Pricing</h1>
          <p className='opacity-80'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>
        <div id="card-container" className='grid md:grid-cols-2 lg:grid-cols-3'>
 <div className="card bg-base-100  shadow-sm">
  
  <div className="card-body">
    <h2 className="card-title">Starter</h2>
    <p>Perfect for getting started</p>
    <p>$0/month</p>
    <p>Access to 10 free tools</p>
    <p>Basic templates</p>
    <p>Community support</p>
    <p>1 project per month</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary w-full">Get Started Free</button>
    </div>
  </div>
</div>
     {/* card 2 */}
     <div className="card bg-base-100 w-96 shadow-sm bg-blue-800 text-white">
  
  <div className="card-body">
    <h2 className="card-title">Starter</h2>
    <p>Perfect for getting started</p>
    <p>$0/month</p>
    <p>Access to 10 free tools</p>
    <p>Basic templates</p>
    <p>Community support</p>
    <p>1 project per month</p>
    <div className="card-actions justify-end">
      <button className="btn w-full bg-white">Start Pro Trial</button>
    </div>
  </div>
</div>
            {/* card 3 */}
            <div className="card bg-base-100 w-96 shadow-sm">
  
  <div className="card-body">
    <h2 className="card-title">Starter</h2>
    <p>Perfect for getting started</p>
    <p>$0/month</p>
    <p>Access to 10 free tools</p>
    <p>Basic templates</p>
    <p>Community support</p>
    <p>1 project per month</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary w-full">Contact Sales</button>
    </div>
  </div>
</div>
        </div>
        </>
    );
};

export default Transparence;