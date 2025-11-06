import React from 'react';

function Hero() {
    return (
        <div className='container mt-5 '>
            <div className='row p-5 mt-5 border-bottom text-center'>
                <h3>Charges</h3>
                < h4 className='text-muted fs-4 mt-3'>List of all charges and taxes</h4>
            </div>
              <div className='row p-5 mt-5 text-center'>
                
                <div className='col-lg-4 col-md-12 p-4 mt-3'>
                    <img src='/media/images/pricingEquity.svg' />
                    <h1 className='fs-3'>Free equity delivery</h1>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-lg-4 col-md-12 p-4 mt-3'>
                    <img src='/media/images/intradayTrades.svg' />
                    <h1 className='fs-3'>Intraday and F&O trades</h1>
                    <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower)
                         per executed order on intraday trades across equity,
                         currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-lg-4 col-md-12 p-4 mt-3'>
                    <img src='/media/images/pricingEquity.svg' />
                    <h1 className='fs-3'>Free direct MF</h1>
                    <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
              </div>
        </div>
      );
}

export default Hero;