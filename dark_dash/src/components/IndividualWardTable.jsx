import React from 'react'
import IndividualWard from './IndividualWard'

const IndividualWardTable = ({datas,wardNumber}) => {
  return (
    
      <div class="col-md-3 grid-margin stretch-card">
              <div class="card ">
                <div class="card-body">
                  <div class="md-3">
                    <h3 class="text-white font-weight-normal">
                      {" "}
                      {`ward ${wardNumber}`}
                    </h3>
                    <IndividualWard TaxName="Garbage_Tax" wardNumber={wardNumber} data={datas}/>
                    <IndividualWard TaxName="Property_Tax" wardNumber={wardNumber} data={datas}/>
                    <IndividualWard TaxName="Water_Tax" wardNumber={wardNumber} data={datas}/>

                   
                  </div>
                </div>
              </div>
            </div>
                  
   
  )
}

export default IndividualWardTable;