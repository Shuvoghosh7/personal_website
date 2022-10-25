import React, { useEffect, useState } from 'react';
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
const TopIndustries = () => {
  const [data, setData] = useState({
    series: [72, 24, 30,91,51,63],
    options: {
      labels: ["Marketing","Software","Information","Internet","Retail","Other"],
    }
  })

  return (
    <div>
      <h6>Top Industries Represented</h6>
      <ReactApexChart className="lg:w-full"
        options={data.options}
        series={data.series}
        type="donut"
      />

    </div>
  );
};

export default TopIndustries;