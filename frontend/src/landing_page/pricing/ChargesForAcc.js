import React from 'react';

function ChargesForAcc() {
    return ( 
        <div className='container  mt-5 text-center  '>
            <h3 className='fs-4 mb-5'>Charges for account Opening</h3>
            <div className='row '>
                <div className='col-lg-8 col-md-6'>
                      <p>Type of account</p>
                      <p>Online account</p>
                      <p>Offline account</p>
                      <p>NRI account (offline only)</p>
                      <p>Partnership, LLP, HUF, or Corporate accounts (offline only)</p>
                </div>
                <div className='col-lg-4 col-md-3'>
                    <p>Charges</p>
                    <p>	free</p>
                    <p>	free</p>
                    <p>	₹ 500</p>
                    <p>	₹ 500</p>
                </div>
            </div>
        </div>
     );
}

export default ChargesForAcc;