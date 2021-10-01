/* eslint-disable import/newline-after-import */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const dayjs = require('dayjs');
dayjs().format();

// const jsonData = require('../../../../actions/data/pedals.json');

const RanksLineChart = ({ data }) => {
  // const [color, setColor] = useState('#ffffff');

  const colorRandomizer = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    // setColor(randomColor);
  };
  return (
    <>
      <ResponsiveContainer width="99%" aspect={2}>
        <LineChart
          data={data}
          width="99%"
          height={800}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis
            type="number"
            dataKey="time"
            domain={['auto', 'auto']}
            tick={{ fill: 'black' }}
            tickFormatter={(unixTime) => dayjs(unixTime).format('MMM YYYY')}
            label={{ value: 'Pages', position: 'insideBottom', dy: 30 }}
          />

          <YAxis type="number" dataKey="rank" domain={[0, 20000]} />
          <CartesianGrid horizontal="true" vertical="" stroke="#ccc" />
          <Tooltip
            contentStyle={{ backgroundColor: '#8884d8', color: '#fff' }}
            itemStyle={{ color: '#fff' }}
            cursor={false}
            labelFormatter={(unixTime) => dayjs(unixTime).format('MMM DD')}
          />
          <Legend />
          {data.map((p) => {
            return (
              <Line
                key={p.name}
                type="monotone"
                data={p.rank}
                dataKey="rank"
                stroke="#8884d8"
                strokeWidth="2"
                dot={{
                  fill: '#2e4355',
                  stroke: '#8884d8',
                  strokeWidth: 1,
                  r: 1,
                }}
                activeDot={{
                  fill: '#2e4355',
                  stroke: '#8884d8',
                  strokeWidth: 5,
                  r: 5,
                }}
              />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default RanksLineChart;
