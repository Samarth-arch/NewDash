import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut as DoughnutChart } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutComponent({ SetType }) {

    
  const [data, setData] = useState([]);

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

  const calculateUnpaidTaxes = (taxKey) => {
    if (!data || data.length === 0) {
      return 0;
    }

    return data.filter((entry) => entry[taxKey] !== 0).length;
  };

  const getChartData = () => {
    if (SetType === 'UnPaid') {
      const Ugarbagetax = data.length - calculateUnpaidTaxes('Garbage_Tax');
      const Uwatertax = data.length - calculateUnpaidTaxes('Water_Tax');
      const Upropertytax = data.length - calculateUnpaidTaxes('Property_Tax');

      console.log('Unpaid tax:', Ugarbagetax, Upropertytax, Uwatertax);

      return {
        labels: ['Unpaid Property Tax', 'Unpaid Water Tax', 'Unpaid Garbage Tax'],
        datasets: [
          {
            data: [Ugarbagetax, Uwatertax, Upropertytax],
            backgroundColor: ['#03396c', '#005b96', '#6497b1'],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
          borderWidth: 1,
          },
        ],
      };
    } else {
      // Display total counts for all tax types
      const totalPropertyTax = calculateUnpaidTaxes('Property_Tax');
      const totalWaterTax = calculateUnpaidTaxes('Water_Tax');
      const totalGarbageTax = calculateUnpaidTaxes('Garbage_Tax');

      console.log('Total paid:', totalGarbageTax, totalPropertyTax, totalWaterTax);

      return {
        labels: ['Paid Property Tax', ' Paid Water Tax', 'Paid Garbage Tax'],
        datasets: [
          {
            data: [totalGarbageTax, totalWaterTax, totalPropertyTax],
            backgroundColor: ['#03396c', '#005b96', '#6497b1'],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
          borderWidth: 1,
          },
        ],
      };
    }
  };

  const doughnutData = getChartData();

  return <DoughnutChart data={doughnutData} />;
}
