import React, { useEffect } from "react";
import { LineGraph } from "./LineGraph";
import Piechart from "./Piechart";
import RegionTable from "./RegionTable";
import Table from "./ranked";
import UnpaidTable from "./LeastRanked";
import ProgressBar from "./ProgressBar";
import { useState } from "react";
import ContextualExample from "./ProgressBar";
import { DoughnutComponent } from "./doughnut";
import Speedometer from "./Speedometer";
import MapComponent from "./MapContainer";
import WardMapComponent from "./wardMap";
import Card from "./Card";

import IndividualWard from "./IndividualWard";
import IndividualWardTable from "./IndividualWardTable";

const Dashboard = () => {
  const [SelectedType, setSelectedType] = useState();
  const [speedbtn, setspeedbtn] = useState(null);

  const [wardNumber, setwardNumber] = useState(null);
  const [datas, setDatas] = useState(null);

  
  

  


  useEffect(() => {
    async function fetchDataAndPopulateCards() {
      try {
        const response = await fetch("http://localhost:8080/maps/markers");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        
        setDatas(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchDataAndPopulateCards()
  }, []);

  let totalWaterTax = datas?.reduce(
    (total, entry) => total + entry.Water_Tax,0
    
  );
  let totalGarbageTax = datas?.reduce(
    (total, entry) => total + (entry.Garbage_Tax),0
    
  );
  let totalPropertyTax = datas?.reduce(
    (total, entry) => total + entry.Property_Tax,0
    
  );

  const totalRevenue = totalGarbageTax + totalPropertyTax + totalWaterTax;

 console.log("The garbage tax is",totalGarbageTax)
 console.log("TP",totalPropertyTax)
 console.log("TW",totalWaterTax)
 console.log("TR",totalRevenue)
 console.log(datas);
  return (
    <div style={{ cursor: "pointer", userSelect: "none" }}>
      <div class="main-panel">
        <div class="content-wrapper">
          {console.log(totalGarbageTax)}
          <Card  TG={totalGarbageTax} TW={totalWaterTax} TP={totalPropertyTax}/>
          <div class="row">
            <RegionTable/>
             <MapComponent />
            {/* <div class="col-md-3 grid-margin stretch-card">
              <div class="card ">
                <div class="card-body">
                  <div class="md-3">
                    <h3 class="text-white font-weight-normal">
                      {" "}
                      {`ward ${wardNumber}`}
                    </h3>
                    <IndividualWard TaxName="Garbage_Tax" wardNumber="2" data={datas}/>
                    <IndividualWard TaxName="Property_Tax" wardNumber="2" data={datas}/>
                    <IndividualWard TaxName="Water_Tax" wardNumber="2" data={datas}/>

                   
                  </div>
                </div>
              </div>
            </div> */}
            <IndividualWardTable datas={datas} wardNumber="2"/>
          </div>

          <div class="row">

                  <ContextualExample />
             
            {/* speedo meter */}
            
                  <Speedometer TaxSelected={speedbtn} wardNumber={wardNumber} />
                 {" "}
          </div>
          {/* line chart */}
          {/* line chart */}
          <div className="row ">
            <div className="col-8 grid-margin">
              <div className="card" style={{ height: "71vh" }}>
                <div style={{ width: "100%", height: "50vh", margin: "auto" }}>
                  <LineGraph />
                </div>
              </div>
            </div>
            {/* pie graph */}
            <div className="col-4 grid-margin">
              <div className="card">
                <div
                  class="row"
                  style={{
                    justifyContent: "center",
                    gap: "8px",
                    marginBottom: "8px",
                    marginTop: "8px",
                  }}
                >
                  <button
                    type="button"
                    class="btn btn-primary btn-sm"
                    style={{ width: "80px" }}
                    onClick={() => {
                      handlebuttonclick("Paid");
                    }}
                  >
                    Paid
                  </button>

                  <button
                    type="button"
                    class="btn btn-primary btn-sm"
                    style={{ width: "80px" }}
                    onClick={() => {
                      handlebuttonclick("UnPaid");
                    }}
                  >
                    Unpaid
                  </button>
                </div>

                <DoughnutComponent
                  SetType={SelectedType}
                  style={{ marginBottom: "9px" }}
                />
              </div>
            </div>
          </div>
          <div class="row">
          <Table />
          <UnpaidTable />
          <WardMapComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
