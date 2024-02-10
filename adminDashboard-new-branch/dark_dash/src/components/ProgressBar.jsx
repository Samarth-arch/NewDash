import React, { useEffect, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function ContextualExample({data}) {
  console.log("Progress bar data",data);

  const calculateUnpaidTaxes = (taxKey) => {
    if (!data || data?.length === 0) {
      return 0;
    }
    else{
      return data.filter((entry) => entry[taxKey] !== 0).length;

    }

    
  };

  const totalPropertyTax = calculateUnpaidTaxes("Property_Tax");
  const totalWaterTax = calculateUnpaidTaxes("Water_Tax");
  const totalGarbageTax = calculateUnpaidTaxes("Garbage_Tax");

  return (
    <div class="col-sm-6 grid-margin">
      <div class="card">
        <div
          class="card-body"
          style={{ height: "269px", alignItems: "center" }}
        >
          <div>
            <span>Garbage Tax</span>
            <ProgressBar
              variant="info"
              now={(totalGarbageTax / data?.length) * 100}
              label={`${totalGarbageTax}%`}
              style={{ marginBottom: "25px" }}
            />
            <span>Water Tax</span>
            <ProgressBar
              variant="warning"
              now={(totalWaterTax / data?.length) * 100}
              label={`${totalWaterTax}%`}
              style={{ marginBottom: "25px" }}
            />
            <span>Property Tax</span>
            <ProgressBar
              variant="danger"
              now={(totalPropertyTax / data?.length) * 100}
              label={`${totalPropertyTax}%`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContextualExample;
