'use client';

import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { time: '08:00', entrada: 20, saida: 5 },
  { time: '10:00', entrada: 45, saida: 15 },
  { time: '12:00', entrada: 80, saida: 40 },
  { time: '14:00', entrada: 120, saida: 60 },
  { time: '16:00', entrada: 90, saida: 110 },
  { time: '18:00', entrada: 30, saida: 80 },
];

const VisitorChart = () => {
  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorEntrada" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#136026" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#136026" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorSaida" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#F49100" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#F49100" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          <XAxis 
            dataKey="time" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#9ca3af', fontSize: 12 }}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#9ca3af', fontSize: 12 }}
          />
          <Tooltip 
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
          />
          <Area 
            type="monotone" 
            dataKey="entrada" 
            stroke="#136026" 
            fillOpacity={1} 
            fill="url(#colorEntrada)" 
            strokeWidth={3}
          />
          <Area 
            type="monotone" 
            dataKey="saida" 
            stroke="#F49100" 
            fillOpacity={1} 
            fill="url(#colorSaida)" 
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VisitorChart;
