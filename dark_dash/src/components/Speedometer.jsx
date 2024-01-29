import React, { useState, useEffect } from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

const Speedometer = ({ TaxSelected }) => {
  const [data, setData] = useState([]);

  console.log("selected tax is ",TaxSelected)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/maps/markers');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const calculatePaidTaxes = (taxKey) => {
    if (!data || data.length === 0) {
      return 0;
    }

    return data.filter((entry) => entry[taxKey] !== 0).length;
  };

  const calculateTotalTaxes = (taxKey) => {
    if (!data || data.length === 0) {
      return 0;
    }

    return data.filter((entry) => entry[taxKey] !== 0).length;
  };

  const calculatePercentage = (paidTaxes, totalTaxes) => {
    if (totalTaxes === 0) {
      return 0;
    }

    return (paidTaxes / totalTaxes) * 100;
  };

  const calculateOverallPaidPercentage = () => {
    if (!data || data.length === 0) {
      return 0;
    }
  
    const overallTotalTaxes = data.length;
  
    const overallPaidTaxes = data.filter((entry) =>
      entry['Water_Tax'] !== 0 || entry['Garbage_Tax'] !== 0 || entry['Property_Tax'] !== 0
    ).length;
  
    return calculatePercentage(overallPaidTaxes, overallTotalTaxes);
  };
  const calculateTaxTypePercentage = (taxKey) => {
    if (!data || data.length === 0) {
      return 0;
    }

    const totalTaxes = data.length;
    const paidTaxes = calculatePaidTaxes(taxKey);

    return calculatePercentage(paidTaxes, totalTaxes);
  };

  const renderSpeedometer = () => {
    if (TaxSelected === 'Water_Tax') {
      return (
        <>
          <ReactSpeedometer
            fluidWidth={false}
            responsive={true}
            minValue={0}
            maxValue={100}
            value={calculateTaxTypePercentage('Water_Tax')}
            needleColor="#2F323A"
            segments={5}
            startColor="#26A1EB"
            endColor="#26D974"
            ringWidth={15}
          />
          <p >Water Tax paid <h1>{calculateTaxTypePercentage('Water_Tax').toFixed(2)}%</h1></p>
        </>
      );
    } else if (TaxSelected === 'Garbage_Tax') {
      return (
        <>
          <ReactSpeedometer
            fluidWidth={false}
            responsive={true}
            minValue={0}
            maxValue={100}
            value={calculateTaxTypePercentage('Garbage_Tax')}
            needleColor="#2F323A"
            segments={5}
            startColor="#26A1EB"
            endColor="#26D974"
            ringWidth={15}
          />
          <p >Garbage Tax paid <h1>{calculateTaxTypePercentage('Garbage_Tax').toFixed(2)}%</h1></p>
        </>
      );
    } else if (TaxSelected === 'Property_Tax') {
      return (
        <>
          <ReactSpeedometer
            fluidWidth={false}
            responsive={true}
            minValue={0}
            maxValue={100}
            value={calculateTaxTypePercentage('Property_Tax')}
            needleColor="#2F323A"
            segments={5}
            startColor="#26A1EB"
            endColor="#26D974"
            ringWidth={15}
          />
          <p >Property Tax paid <h1>{calculateTaxTypePercentage('Property_Tax').toFixed(2)}%</h1></p>
        </>
      );
    } else {
      // Default case for overall tax
      return (
        <>
          <ReactSpeedometer
            fluidWidth={false}
            responsive={true}
            minValue={0}
            maxValue={100}
            value={calculateOverallPaidPercentage()}
            needleColor="#2F323A"
            segments={5}
            startColor="#26A1EB"
            endColor="#26D974"
            ringWidth={15}
          />
          <p >Overall Tax paid <h1>{calculateOverallPaidPercentage().toFixed(2)}%</h1></p>
        </>
      );
    }
  };

  return (
    <>
      {renderSpeedometer()}
    </>
  );
};

export default Speedometer;