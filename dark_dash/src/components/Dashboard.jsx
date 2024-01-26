import React from 'react';
import { LineGraph } from './LineGraph';
import Piechart from './Piechart';
import RegionTable from './RegionTable';
import Table from './ranked';
import UnpaidTable from './LeastRanked';
import ProgressBar from './ProgressBar';
import { useState } from 'react';
import ContextualExample from './ProgressBar';
import { DoughnutComponent } from './doughnut';



async function fetchDataAndPopulateCards() {
  try {
    const response = await fetch('http://localhost:8080/maps/markers');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    const totalWaterTax = data.reduce((total, entry) => total + entry.Water_Tax, 0);
    const totalGarbageTax = data.reduce((total, entry) => total + entry.Garbage_Tax, 0);
    const totalPropertyTax = data.reduce((total, entry) => total + entry.Property_Tax, 0);
    const totalRevenue = totalGarbageTax+totalPropertyTax+totalWaterTax;

    document.getElementById('totalRevenueValue').innerText = `INR ${totalRevenue}`;
    document.getElementById('waterTaxValue').innerText = `INR ${totalWaterTax}`;
    document.getElementById('garbageTaxValue').innerText = `INR ${totalGarbageTax}`;
    document.getElementById('propertyTaxValue').innerText = `INR ${totalPropertyTax}`;

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchDataAndPopulateCards();



const Dashboard = () => {

  const [SelectedType, setSelectedType] = useState()

  const handlebuttonclick=(taxtype)=>{
    setSelectedType(taxtype)
  }

  return (
    <div>
        <div class="main-panel">
          <div class="content-wrapper">
            <div class="row">
              <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                {/* card 1 */}
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-9">
                        <div class="d-flex align-items-center align-self-start">
                          <h3 class="mb-0" id='totalRevenueValue'>Loading...</h3>
                          <p class="text-success ms-2 mb-0 font-weight-medium">+3.5%</p>
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="icon icon-box-success ">
                          <span class="mdi mdi-arrow-top-right icon-item"></span>
                        </div>
                      </div>
                    </div>
                    <h6 class="text-muted font-weight-normal">Total Revenue</h6>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                {/* card 2 */}
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-9">
                        <div class="d-flex align-items-center align-self-start">
                          <h3 class="mb-0" id='waterTaxValue'>Loading...</h3>
                          <p class="text-success ms-2 mb-0 font-weight-medium">+11%</p>
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="icon icon-box-success">
                          <span class="mdi mdi-arrow-top-right icon-item"></span>
                        </div>
                      </div>
                    </div>
                    <h6 class="text-muted font-weight-normal">Water Tax</h6>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                {/* card 3 */}
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-9">
                        <div class="d-flex align-items-center align-self-start">
                          <h3 class="mb-0" id='propertyTaxValue'>Loading...</h3>
                          <p class="text-danger ms-2 mb-0 font-weight-medium">-2.4%</p>
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="icon icon-box-danger">
                          <span class="mdi mdi-arrow-bottom-left icon-item"></span>
                        </div>
                      </div>
                    </div>
                    <h6 class="text-muted font-weight-normal">Property Tax</h6>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                {/* card 4 */}
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-9">
                        <div class="d-flex align-items-center align-self-start">
                          <h3 class="mb-0" id='garbageTaxValue'>Loading...</h3>
                          <p class="text-success ms-2 mb-0 font-weight-medium">+3.5%</p>
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="icon icon-box-success ">
                          <span class="mdi mdi-arrow-top-right icon-item"></span>
                        </div>
                      </div>
                    </div>
                    <h6 class="text-muted font-weight-normal">Garbage Tax</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              {/* ward table */}
              <div class="col-md-4 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    {/* <h4 class="card-title">Ward List</h4> */}
                    {/* <canvas id="transaction-history" class="transaction-chart"></canvas> */}
                    {/* <div class="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                      <div class="text-md-center text-xl-left">
                        <h6 class="mb-1">Transfer to Paypal</h6>
                        <p class="text-muted mb-0">07 Jan 2019, 09:12AM</p>
                      </div>
                      <div class="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                        <h6 class="font-weight-bold mb-0">$236</h6>
                      </div>
                    </div> */}
                    {/* <div class="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                      <div class="text-md-center text-xl-left">
                        <h6 class="mb-1">Tranfer to Stripe</h6>
                        <p class="text-muted mb-0">07 Jan 2019, 09:12AM</p>
                      </div>
                      <div class="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                        <h6 class="font-weight-bold mb-0">$593</h6>
                      </div>
                    </div> */}
                    <RegionTable/>
                  </div>
                </div>
              </div>
              {/* map card */}
              <div class="col-md-8 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    
                   <h1>Zone Map</h1>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
                {/* progess chart */}
              <div class="col-sm-6 grid-margin">
                <div class="card">
                  <div class="card-body">
                    <ContextualExample/>
                  </div>
                </div>
              </div>
               {/* pie chart */}
              <div class="col-sm-6 grid-margin">
                <div class="card">
                  
                  <div class="card-body">
                   <Piechart/>
                  </div>
                </div>
              </div>
            
             
            </div>
            {/* line chart */}
            <div className="row ">
              <div className="col-8 grid-margin">
                <div className="card">

                <div style={{width:"100%",height:"50vh"} }>
                  <LineGraph/>
                  </div>
                </div>
              </div>
              {/* bar graph */}
              <div className="col-4 grid-margin">
                <div className="card">
                <button type="button" class="btn btn-success" onClick={()=>{handlebuttonclick('Paid')}} >Paid</button>
                <button type="button" class="btn btn-success" onClick={()=>{handlebuttonclick('UnPaid')}} >UnPaid</button>
   
                    <DoughnutComponent SetType={SelectedType}/>
                  
                </div>
              </div>
            </div>
            
              
            
            {/* table ranking  */}
            <div class="row">
              <div class="col-md-6 col-xl-4 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <Table/>
                    
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-xl-4 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    
                    
                    <UnpaidTable/>
                    
                  </div>
                </div>
              </div>
              <div class="col-md-12 col-xl-4 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Ward Map</h4>
                    
                  </div>
                </div>
              </div>
            </div>
            
          </div>
         
        </div>
    </div>
  );
}

export default Dashboard