import React from 'react';
function RightSection(
    {
    imageURL,
    productName,
    productDescription,
    
    learnMore,
    }
) {
    return ( 
        <div className='container mt-5 '>
              <div className='row'>
                
                <div className='col-lg-6 col-md-12 p-5 mt-5'>
                    <h2 className=''>{productName}</h2>
                    <p>{productDescription}</p>
                    <div>
                    
                    <a href={learnMore}   style={{textDecoration:"none"}}>learn more</a>
                    </div>

                </div>
                <div className='col-lg-6 col-md-12'>
                    <img src={imageURL}></img>
                </div>
              </div>
        </div>
     );
}

export default RightSection;