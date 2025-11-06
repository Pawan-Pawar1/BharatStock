import React from 'react';
import { Link } from "react-router-dom";


function Hero(){
    return (
        <div className='container p-5'>
            <div className='row text-center'>
                <img src='/media/images/homeHero.png' alt='hero img' className='mb-5'></img>
                <h1 className='mt-5'>Invest in everything</h1>
                <p>online platform to invest in stocks,derivatives,mutual fund and more</p>
                <Link className='p-2 btn btn-primary fs-5 mb-5'  style={{width:"20%", margin:"0 auto"}} 
                 to="/Signup">signUp Now</Link>
            </div>
        </div>
    )
}
export default Hero;