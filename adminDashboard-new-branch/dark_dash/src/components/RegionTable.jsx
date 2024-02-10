import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./RegionList.css";

const RegionTable = () => {
  // Dummy data for the paid and unpaid tables

  const scrollbarStyle = {
    height: "100%",
    overflowY: "auto",
    WebkitOverflowScrolling: "touch",
    scrollbarWidth: "thin",
    scrollbarColor: "rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0.1)",
  };
  const regionData = [
    { wardNo: "Ward 1", wardName: "Sirpur " },
    { wardNo: "Ward 2", wardName: "Chandan nagar" },
    { wardNo: "Ward 3", wardName: "Kalani nagar" },
    { wardNo: "Ward 4", wardName: "sukhdev nagar" },
    { wardNo: "Ward 5", wardName: "raj nagar" },
    { wardNo: "Ward 6", wardName: "malharganj" },
    { wardNo: "Ward 7", wardName: "juna risala" },
    { wardNo: "Ward 8", wardName: "vrindavan" },
    { wardNo: "Ward 9", wardName: "banganga" },
    { wardNo: "Ward 10", wardName: " bhagirath pura" },
    { wardNo: "Ward 11", wardName: "govind colony " },
    { wardNo: "Ward 12", wardName: "govind colony " },
    { wardNo: "Ward 13", wardName: "sangam nagar " },
    { wardNo: "Ward 14", wardName: "ashok nagar" },
    { wardNo: "Ward 15", wardName: "bijasan" },
    { wardNo: "Ward 16", wardName: "nandbagh" },
    { wardNo: "Ward 17", wardName: "kushwah nagar" },
    { wardNo: "Ward 18", wardName: "sant kabir" },
    { wardNo: "Ward 19", wardName: "vishwa karma" },
    { wardNo: "Ward 20", wardName: "gauri nagar" },
    { wardNo: "Ward 21", wardName: "shyam nagar" },
    { wardNo: "Ward 22", wardName: "pt. dendayal upadhyay" },
    { wardNo: "Ward 23", wardName: "Lt. Rajesh joshi " },
    { wardNo: "Ward 24", wardName: "sant balijinath maharaj" },
    { wardNo: "Ward 25", wardName: "s nanda nagar" },
    { wardNo: "Ward 26", wardName: "jeen mata" },
    { wardNo: "Ward 27", wardName: "pashupati nath" },
    { wardNo: "Ward 28", wardName: "maa tulja bhawani" },
    { wardNo: "Ward 29", wardName: "Dr. shyama Prasad mukharji" },
    { wardNo: "Ward 30", wardName: "sant ravidas" },
    { wardNo: "Ward 31", wardName: "maharaj chhatrasal" },
    { wardNo: "Ward 32", wardName: "atal bihari bajpai" },
    { wardNo: "Ward 33", wardName: "sukhliya" },
    { wardNo: "Ward 34", wardName: "shaheed bhagat singh" },
    { wardNo: "Ward 35", wardName: "lasudiya mori" },
    { wardNo: "Ward 36", wardName: "nipaniya" },
    { wardNo: "Ward 37", wardName: "sai krupa" },
    { wardNo: "Ward 38", wardName: "haji colony" },
    { wardNo: "Ward 39", wardName: "nahar shah wali" },
    { wardNo: "Ward 40", wardName: "khajrana ganesh" },
    { wardNo: "Ward 41", wardName: "kailassh puri" },
    { wardNo: "Ward 42", wardName: "swami vivekanand" },
    { wardNo: "Ward 43", wardName: "Shree Nager" },
    { wardNo: "Ward 44", wardName: "HIG" },
  


    // Add more data as needed
  ];

  return <RegionTableData data={regionData} />;
};

const RegionTableData = ({ data }) => {
  return (
<div class="col-md-3 grid-margin stretch-card">
              <div
                class="card"
                style={{
                  height: "78vh",
                  overflowY: "auto",
                  scrollbarWidth: "thick",
                  overflowX: "hidden",
                }}
              >
                <div class="card-body">
                <div className="card" style={{ height: "100%", overflow: "auto"  }}>
      <div className="card-body">
        <h4 style={{ position: "sticky" }}>Ward List</h4>
        <table className="table">
          <thead>
            <tr className="content">
              <th>ward No.</th>
              <th>ward Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.wardNo} className="content">
                <td>{item.wardNo}</td>
                <td>{item.wardName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
                </div>
                <style>
                  {`
            /* WebKit Scrollbar Styles */
            .card::-webkit-scrollbar {
                width: 8px;
            }
            .card::-webkit-scrollbar-thumb {
                background-color: #555555;
            }
            .card::-webkit-scrollbar-track {
                background-color:   #333333 ;
            }
        `}
                </style>
              </div>
            </div>

    
  );
};

export default RegionTable;
