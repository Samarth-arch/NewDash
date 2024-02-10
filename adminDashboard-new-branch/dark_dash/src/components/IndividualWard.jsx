import React from "react";

const IndividualWard = ({ TaxName, wardNumber, data }) => {
  const total = data?.filter(
    (entry) => entry.ward == wardNumber
  );
  const count=total?.length;
 


  const countPaidGarbageTax = () => {
    // Filter the data for entries matching the given ward number and with non-zero garbage tax
    const filteredData = data?.filter(
      (entry) => entry.ward == wardNumber && entry[TaxName] > 0
    );

    // Count the number of filtered entries
    const count = filteredData?.length;

    return count;
  };

  const numberOfPeoplePaid = countPaidGarbageTax();

  return (
    <div
      class="card"
      style={{
        backgroundColor: "rgba(0,0,0,0.6)",
        marginBottom: "12px",
        marginTop: "20px",
        padding: "0px",
      }}
    >
      <div class="row">
        <div class="card-body" style={{ height: "80px", minHeight: "110px" }}>
          <h6>{TaxName}</h6>
          <p className="text-muted font-weight-normal">{`${numberOfPeoplePaid}/${count}`}</p>
        </div>
      </div>
    </div>
  );
};

export default IndividualWard;
