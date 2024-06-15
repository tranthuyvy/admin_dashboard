import { useState, useEffect } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

const RADIAN = Math.PI / 180
const COLORS = ['#880e0e', '#3a241b', '#fb923c', '#006400', '#38bdf8', '#396264'];

const PieChartStatistics = () => {
  const [mostSoldProducts, setMostSoldProducts] = useState([]);

  useEffect(() => {
    async function fetchMostSoldProducts() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:9999/api/admin/statistic/product', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setMostSoldProducts(response.data.data);

      } catch (error) {
        console.error('Error fetching most sold products:', error);
      }
    }

    fetchMostSoldProducts();
  }, []);

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="bg-white p-4 rounded-md border border-gray-200 flex flex-col flex-[0.45]">
      <strong className="text-sub font-semibold">Sản phẩm phổ biến</strong>
      <div className="w-full mt-3 flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={mostSoldProducts}
              cx="50%"
              cy="45%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={105}
              dataKey="total_quantity"
            >
              {mostSoldProducts.map((entry, index) => (
                <Cell key={`cell-${entry.product_id}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend layout="horizontal" verticalAlign="bottom" align="center"
              payload=
              {mostSoldProducts.map((entry, index) => ({
                value: entry.product_name,
                type: 'circle', color: COLORS[index % COLORS.length],
              }))}
            />
          </PieChart>
        </ResponsiveContainer>

      </div>
    </div>
  );
};

export default PieChartStatistics;
