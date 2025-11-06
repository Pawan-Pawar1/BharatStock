import React from 'react';
import Hero from './Hero'
import Brockerage from './Brockerage';
import Equity from './Equity';
import ChargesForAcc from './ChargesForAcc';


function PricingPage() {
    return (  
        <>
        <Hero />
        
        <Equity />
        <ChargesForAcc />
        <Brockerage />
        </>
    );
}

export default PricingPage;