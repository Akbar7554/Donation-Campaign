import Chart from 'chart.js/auto';
import {  Tooltip, Title, ArcElement, Legend} from 'chart.js/auto';
import { Pie } from "react-chartjs-2";
import { useEffect, useState } from 'react';
import { getStoredDonation } from '../../utility/locatstorage';
// import { useLoaderData } from 'react-router-dom';




const Statistics = () => {
  const donatedItems = getStoredDonation();
  const totalDonatedItems = donatedItems.length;
  // console.log(totalDonatedItems);
  // const donatedLength = donatedItems.length;
  // console.log(donatedLength);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("donation.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  const categoryLength = category.length;
  // console.log(categoryLength);
  // const allDonations = useLoaderData();
  // console.log(allDonations);
  // const allDonationLength = allDonations.length;
  // console.log(allDonationLength);
  const percentage = (totalDonatedItems / categoryLength) * 100;
  // console.log(percentage);
  const percentageRemaining = 100 - percentage;
  // console.log(percentageRemaining);
  Chart.register(
    Tooltip, Title, ArcElement, Legend
)

  
  const data = {
    datasets: [
      {
        data: [percentage.toFixed(1), percentageRemaining.toFixed(1)],
        backgroundColor: [
          '#00C49F',
          '#FF444A',
        ]
      },
    ],
    labels: ["Your Donation", "Total Donation"],
  };

    return (
        <div style={{ width: "25%", height: "25%", marginLeft: "600px", marginTop: "100px" }}>
      <Pie data={data}
      />
    </div>
  );
};

export default Statistics;