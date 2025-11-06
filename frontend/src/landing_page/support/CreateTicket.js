import React from 'react';
function CreateTicket() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12'>
                    <h5 className=' p-2 '><i class="fa fa-plus" aria-hidden="true"></i>
                    Account opening</h5>
                    <select class="form-select" aria-label="Default select example">
                          <a href=''><option selected>Minor</option></a>
                          <a href=''><option value="resident individual">Resident individual</option></a>
                          <a href=''><option value="NRI">NRI</option></a>
                          <a href=''><option value="Company,partenership and HUF and LLP">
                            Company,partenership and HUF and LLP</option></a>
                          <a href=''><option value="Glossary">Glossary</option></a>
                        </select>

                        <h5 className=' mt-5 p-2  '><i class="fa fa-user" aria-hidden="true"></i>
                         Your Zerodha 
                        Account</h5>
                    <select class="form-select" aria-label="Default select example">
                          <a href=''><option selected value="Account Modification">Account Modification</option></a>
                          <a href=''><option value="Client master report and depository participant">
                            Client master report and depository participant</option></a>
                          <a href=''><option value="Nomination">Nomination</option></a>
                          <a href=''><option value="Transfer and conversion of Securities">
                            Transfer and conversion of Securities</option></a>
                          
                        </select>

                        <h5 className='mt-5 p-2 '><i class="fa fa-sitemap" aria-hidden="true"></i>
                        Kite</h5>
                    <select class="form-select" aria-label="Default select example">
                          <a href=''><option selected value="IPO">IPO</option></a>
                          <a href=''><option value="Trading FAQs">Trading FAQs</option></a>
                          <a href=''><option value="Margin Trading Facility (MTF) and Margins">
                            Margin Trading Facility (MTF) and Margins</option></a>
                          <a href=''><option value="Charts and orders">
                            Charts and orders</option></a>
                          <a href=''><option value="Alerts and Nudges">Alerts and Nudges</option></a>
                          <a href=''><option value="General">General</option></a>
                        </select>

                        <h5 className=' p-2 mt-5'><i class="fa fa-inr" aria-hidden="true"></i>
                        Funds</h5>
                    <select class="form-select" aria-label="Default select example">
                          <a href=''><option selected value="Add money">Add money</option></a>
                          <a href=''><option value="withdraw money">withdraw money</option></a>
                          <a href=''><option value="add bank account">add bank account</option></a>
                          
                          <a href=''><option value="eMandates">eMandates</option></a>
                        </select>

                        <h5 className='mt-5 p-2 '><i class="fa fa-circle-thin" aria-hidden="true"></i>Console</h5>
                    <select class="form-select" aria-label="Default select example">
                          <a href=''><option selected value="Portfolio">Portfolio</option></a>
                          <a href=''><option value="corporate action">corporate action</option></a>
                          <a href=''><option value="Funds statement">Funds statement</option></a>
                          <a href=''><option value="Reports">
                            Reports</option></a>
                          <a href=''><option value="Profile">Profile</option></a>
                          <a href=''><option value="Segments">Segments</option></a>
                        </select>

                        <h5 className='mt-5 p-2 '><i class="fa fa-adjust" aria-hidden="true"></i>Coin</h5>
                    <select class="form-select" aria-label="Default select example">
                          <a href=''><option selected value="Mutual funds">Mutual funds</option></a>
                          <a href=''><option value="National Pension Scheme (NPS)">National Pension Scheme (NPS)</option></a>
                          <a href=''><option value="Fixed Deposit (FD)">Fixed Deposit (FD)</option></a>
                          <a href=''><option value="Features on Coin">
                            Features on Coin</option></a>
                          <a href=''><option value="Payments and Orders">Payments and Orders</option></a>
                          <a href=''><option value="General">General</option></a>
                        </select>
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;