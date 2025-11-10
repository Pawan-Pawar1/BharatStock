import React from 'react';


function Hero() {
  return (
    <section className='container-fluid' id='supportHero'>
      <div className='mt-5 p-5' id='supportWraper'>
        <h4>Support Portal</h4>
        <span className='fake-link'>Track Tickets</span>
      </div>

      <div className='row p-5 mt-5'>
        <div className='col-lg-6 col-md-12 p-5 mt-5'>
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>

          <input placeholder="Eg. how do I activate F&O" />
          <br />

          <span className='fake-link'>Track account opening</span>&nbsp;&nbsp;
          <span className='fake-link'>Track segment activation</span>&nbsp;&nbsp;
          <span className='fake-link'>Intraday margins</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <span className='fake-link'>Kite user manual</span>&nbsp;&nbsp;
        </div>

        <div className='col-lg-6 col-md-12 p-5 mt-5'>
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <span className='fake-link'>Current Takeovers and Delisting - January 2024</span>
            </li>
            <li>
              <span className='fake-link'>Latest Intraday leverages - MIS & CO</span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
