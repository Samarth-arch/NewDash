

import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./RegionList.css";

const RegionTable = () => {
    // Dummy data for the paid and unpaid tables
    const regionData = [
        { wardNo: 1, wardName: 'Ward A'},
        { wardNo: 2, wardName: 'Ward B'},
        { wardNo: 3, wardName: 'Ward C'},
        { wardNo: 4, wardName: 'Ward C'},
        { wardNo: 5, wardName: 'Ward C'},
        { wardNo: 6, wardName: 'Ward C'},
        // Add more data as needed
    ];

    return (
        <div className="app">
            <RegionTableData data={regionData} />
        </div>
    );
};

const RegionTableData = ({ data }) => {
    return (
        <div className="card" style={{ height: '50%', overflow: 'auto' }}>
            <div className="card-body">
                <h4>Ward List</h4>
                <table className="table">
                    <thead>
                        <tr className='content'>
                            <th>Ward No.</th>
                            <th>Ward Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.wardNo} className='content'>
                                <td>{item.wardNo}</td>
                                <td>{item.wardName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RegionTable;