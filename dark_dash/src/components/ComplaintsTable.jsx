import React, { useState, useEffect } from 'react';
import ComplaintBox from './ComplaintBox';

const ComplaintsTable = () => {
  const [complaintsData, setComplaintsData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:8080/maps/complains')
      .then(response => response.json())
      .then(data => setComplaintsData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const tableHeadingStyle = {
	textAlign: 'center',
	flex: 1,
  };

  return (
	<div>
	  <section className="ftco-section" style={{ width: "100%", minWidth: "100vw" }}>
		<div className="container" style={{ marginTop: "10vh", padding: "30px", minWidth: "100vw" }}>
		  <div className="row justify-content-center">
			<div className="col-md-6 text-center mb-4">
			  {/* Add any header content if needed */}
			</div>
		  </div>
		  <div className="row">
			<div className="col-md-12">
			  <div className="">
				<table className="table myaccordion table-hover" id="accordion">
				  <thead>
					<tr>
					  <th style={tableHeadingStyle}>S.No</th>
					  <th style={tableHeadingStyle}>Uid</th>
					  <th style={tableHeadingStyle}>Title</th>
					  <th style={tableHeadingStyle}>Description</th>
					  <th style={tableHeadingStyle}>Phone No.</th>
					  {/* Add more table headers if needed */}
					</tr>
				  </thead>
				  <tbody>
					{complaintsData.map((complaint, index) => (
					  <ComplaintBox
						key={index}
						sNo={index + 1}
						uid={complaint.uid}
						title={complaint.title}
						body={complaint.body}
						phone={complaint.phone}
					  />
					))}
				  </tbody>
				</table>
			  </div>
			</div>
		  </div>
		</div>
	  </section>
	</div>
  );
					}
  export default ComplaintsTable;
