import { useEffect, useState } from "react";
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from "recharts";

const ColumnChartStatistics = () => {
  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(2024);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`http://localhost:9999/api/admin/statistic/year?year=${selectedYear}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const result = await response.json();
        if (response.ok) {
          const fullYearData = Array.from({ length: 12 }, (_, index) => {
            const monthData = result.data.find(item => item.moth === index + 1);
            return {
              moth: index + 1,
              total_price: monthData ? monthData.total_price : 0
            };
          });
          setData(fullYearData);
        } else {
          console.error("Failed to fetch data:", result.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedYear]);

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };

  return (
    <div className="h-[24rem] bg-white p-4 rounded-md border border-gray-200 flex flex-col flex-1">
      <strong className="text-sub font-semibold">Thống kê doanh thu</strong>
      <div className="flex justify-end items-start mt-3">
        <label htmlFor="yearSelect" className="mr-2 font-RobotoMedium">Choose year:</label>
        <select id="yearSelect" value={selectedYear} onChange={handleYearChange} className="rounded-md font-RobotoMedium focus:border-none">
          <option value={2020}>2020</option>
          <option value={2021}>2021</option>
          <option value={2022}>2022</option>
          <option value={2023}>2023</option>
          <option value={2024}>2024</option>
        </select>
      </div>
      <div className="w-full mt-3 flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={500} height={300} data={data} margin={{ top: 20, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="moth" />
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="total_price" fill="#880E0E" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ColumnChartStatistics;
