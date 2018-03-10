import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Cell } from 'recharts';

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const WorkChart = ({data, colours}) => (
  <PieChart width={200} height={200} onMouseEnter={() => {}}>
    <Pie
      data={data}
      labelLine={false}
      label={renderCustomizedLabel}
      outerRadius={80}
      fill="#8884d8"
    >
      {
        data.map((entry, index) => <Cell key={index} fill={colours[index % colours.length]}/>)
      }
    </Pie>
</PieChart>
);

WorkChart.propTypes = {
  data: PropTypes.array.isRequired,
  colours: PropTypes.array.isRequired
};

export default WorkChart;
