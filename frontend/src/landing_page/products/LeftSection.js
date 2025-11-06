import React from 'react';

function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
        }) {
    return (
        <div className='container mt-5 border-top'>
              <div className='row'>
                <div className='col-lg-7 col-md-12'>
                    <img src={imageURL}></img>
                </div>
                <div className='col-lg-5 col-md-12 p-5 mt-3'>
                    <h2>{productName}</h2>
                    <p>{productDescription}</p>
                    <div>
                    <a href={tryDemo}   style={{textDecoration:"none",marginRight:"50px"}}>try demo</a> 
                    <a href={learnMore}   style={{textDecoration:"none",marginLeft:"70px"}}>learn more</a>
                    </div>
                    <div className='mt-3'>
                    <a href={googlePlay} style={{marginRight:"50px"}}> <img src='\media\images\googlePlayBadge.svg'/> </a>
                    <a href={appStore}> <img src='\media\images\appstoreBadge.svg'/> </a>
                    </div>
                </div>
              </div>
        </div>
    )
}

export default LeftSection;