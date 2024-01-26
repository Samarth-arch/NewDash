import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  tension: 0.4,
  scales: {
    y: {
      ticks: {
        min: 0,
        max: 5000, // Adjust max value based on your data
        stepSize: 1000,
      },
    },
  },
};

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function LineGraph() {
  const [chartData, setChartData] = useState({
    labels: monthNames,
    datasets: [
      {
        label: "Total Taxes Paid",
        data: Array(monthNames.length).fill(0),
        borderColor: "rgb(0, 128, 255)",
        backgroundColor: "rgba(0, 128, 255, 0.6)",
        fill: {
          target: "origin",
          above: "rgba(0, 128, 255, 0.3)",
        },
      },
      {
        label: "Total Water Tax",
        data: Array(monthNames.length).fill(0),
        borderColor: "rgb(0, 0, 255)",
        backgroundColor: "rgba(0, 0, 255, 0.6)",
        fill: {
          target: "origin",
          above: "rgba(0, 0, 255, 0.3)",
        },
      },
      {
        label: "Total Garbage Tax",
        data: Array(monthNames.length).fill(0),
        borderColor: "rgb(255, 0, 0)",
        backgroundColor: "rgba(255, 0, 0, 0.6)",
        fill: {
          target: "origin",
          above: "rgba(255, 0, 0, 0.3)",
        },
      },
      {
        label: "Total Property Tax",
        data: Array(monthNames.length).fill(0),
        borderColor: "rgb(0, 255, 0)",
        backgroundColor: "rgba(0, 255, 0, 0.6)",
        fill: {
          target: "origin",
          above: "rgba(0, 255, 0, 0.3)",
        },
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'your-api-endpoint' with the actual API endpoint
        const response = await fetch('http://localhost:8080/maps/markers');
        const apiData = await response.json();

        apiData.forEach((item) => {
          const monthIndex = monthNames.indexOf(item['Month ']);

          if (monthIndex !== -1) {
            chartData.datasets[0].data[monthIndex] +=
              item.Water_Tax + item.Garbage_Tax + item.Property_Tax;
            chartData.datasets[1].data[monthIndex] += item.Water_Tax;
            chartData.datasets[2].data[monthIndex] += item.Garbage_Tax;
            chartData.datasets[3].data[monthIndex] += item.Property_Tax;
          }
        });

        setChartData({ ...chartData });

        // Log the total values for each tax in each month
        monthNames.forEach((month, index) => {
          const totalTaxesPaid = chartData.datasets[0].data[index];
          const totalWaterTax = chartData.datasets[1].data[index];
          const totalGarbageTax = chartData.datasets[2].data[index];
          const totalPropertyTax = chartData.datasets[3].data[index];

          console.log(
            `${month} - Total Taxes Paid: ${totalTaxesPaid}, Water Tax: ${totalWaterTax}, Garbage Tax: ${totalGarbageTax}, Property Tax: ${totalPropertyTax}`
          );
        });
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return <Line options={options} data={chartData} />;
}