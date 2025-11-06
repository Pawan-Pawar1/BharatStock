import React from 'react';
import { Link } from "react-router-dom";
function OpenAccount(){
    return (
        <div className='container p-5'>
            <div className='row text-center'>
                <img src='/media/images/homeHero.png' alt='hero img' className='mb-5'></img>'
                <h1 className='mt-5'>Open a Zerodha account</h1>
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <Link className='p-2 btn btn-primary fs-5 mb-5'
                  style={{width:"20%", margin:"0 auto"}}
                  to="/SignUp">signUp Now</Link>
            </div>
        </div>
    )
}
export default OpenAccount;