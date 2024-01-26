

// import React from 'react';
// // import './App.css'; // You can create a CSS file for styling

// const unpaidTable = () => {
    

//     const unpaidData = [
//         { wardNo: 1, wardName: 'Ward X', percentageUnpaid: 20 },
//         { wardNo: 2, wardName: 'Ward Y', percentageUnpaid: 5 },
//         { wardNo: 3, wardName: 'Ward Z', percentageUnpaid: 25 },
//         { wardNo: 3, wardName: 'Ward Z', percentageUnpaid: 25 },
//         { wardNo: 3, wardName: 'Ward Z', percentageUnpaid: 25 },
//         { wardNo: 3, wardName: 'Ward Z', percentageUnpaid: 25 },
//     ];

//     return (
//         <div className="app">
           
//             <UnpaidTable data={unpaidData} tableName="Unpaid" />
//         </div>
//     );
// };

// const UnpaidTable = ({ data, tableName }) => {
//     return (
//         <div>
//             <div class="card">
//                 <div class="card-body">
//                     <h4>Basic Table</h4>
//                     <div>
//                         <table className="table">
//                             <thead>
//                                 <tr className='content'>
//                                     <th>Ward No.</th>
//                                     <th>Ward Name</th>
//                                     {tableName === 'Paid' ? <th>Paid Tax %</th> : <th>Unpaid Tax %</th>}
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {data?.map((item) => (
//                                     <tr key={item.wardNo} className='content'>
//                                         <td>{item.wardNo}</td>
//                                         <td>{item.wardName}</td>
//                                         {tableName === 'Paid' ? <td>{`${item.percentagePaid}%`}</td> : <td>{`${item.percentageUnpaid}%`}</td>}
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UnpaidTable;
import React from 'react';
// import './App.css'; // You can create a CSS file for styling
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./Table.css";
const UTable = () => {
    // Dummy data for the paid and unpaid tables
    const unpaidData = [
        { wardNo: 1, wardName: 'Ward A', percentagePaid: 80 },
        { wardNo: 2, wardName: 'Ward B', percentagePaid: 95 },
        { wardNo: 3, wardName: 'Ward C', percentagePaid: 75 },
        { wardNo: 3, wardName: 'Ward C', percentagePaid: 75 },
        { wardNo: 3, wardName: 'Ward C', percentagePaid: 75 },
        { wardNo: 3, wardName: 'Ward C', percentagePaid: 75 },
    ];

    

    return (
        <div className="app">
            <UnpaidTable data={unpaidData} tableName="Paid" />
       
        </div>
    );
};

const UnpaidTable = ({ data, tableName }) => {
    return (
        <div>
            <div class="card">
                <div class="card-body">
                    <h4>least paying wards</h4>
                    <div>
                        <table className="table">
                            <thead>
                                <tr className='content'>
                                    <th>Ward No.</th>
                                    <th>Ward Name</th>
                                    <th>Unpaid Tax %</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((item) => (
                                    <tr key={item.wardNo} className='content'>
                                        <td>{item.wardNo}</td>
                                        <td>{item.wardName}</td>
                                        {tableName === 'Paid' ? <td>{`${item.percentagePaid}%`}</td> : <td>{`${item.percentageUnpaid}%`}</td>}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UTable;