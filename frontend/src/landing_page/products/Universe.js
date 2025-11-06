import React from 'react';

function Universe() {
    return (
        <div className='container mt-5 '>
              <div className='row text-center' >
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                
                <div className='col-lg-4 col-md-6 p-3 mt-5'>
                    <img src="\media\images\smallcaseLogo.png" style={{height:"67%",width:"70%"}}></img>
                    <p className='text-sm text-muted'>Thematic investing platform.
</p>
                </div>
                <div className='col-lg-4 col-md-6 p-3 mt-5'  >
                    <img src="\media\images\goldenpiLogo.png" style={{height:"67%",width:"70%"}}></img>
                    <p className='text-small text-muted'>
                        Bonds Trading platform.
                    </p>
                </div>
                <div className='col-lg-4 col-md-6 p-3 mt-5' >
                    <img style={{height:"55%",width:"70%"}} src="\media\images\dittoLogo.png"></img>
                    <p className='text-small text-muted'> Personalized advice on life and health insurance. 
                    </p>
                </div>
                <div className='col-lg-4 col-md-6 p-3 mt-5' >
                    <img src="\media\images\zerodhaFundhouse.png" style={{height:"67%",width:"70%"}}></img>
                    <p className='text-small text-muted'>
                        Assest management
                    </p>
                </div>
                <div className='col-lg-4 col-md-6 p-3 mt-5' >
                    <img src="\media\images\streakLogo.png" style={{height:"67%",width:"70%"}}></img>
                    <p className='text-small text-muted'>
                        Algo & stratagy platform.
                    </p>
                </div>

                <div className='col-lg-4 col-md-6 p-3 mt-5' >
                    <img src="\media\images\sensibullLogo.svg" style={{height:"67%",width:"70%"}}></img>
                    <p className='text-small text-muted'>
                   Options trading platform.

                    </p>
                </div>
<button className='p-2 btn btn-primary fs-5 mb-5'  style={{width:"20%", margin:"0 auto"}}>signUp Now</button>
              </div>
        </div>
      );
}

export default Universe;