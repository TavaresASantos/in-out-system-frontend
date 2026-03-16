import React from 'react';

interface KpiCardProps {
  title: string;
  value: string | number;
  label: string;
  icon?: React.ReactNode;
  color?: string;
}

const KpiCard: React.FC<KpiCardProps> = ({ 
  title, 
  value, 
  label, 
  icon, 
  color = "bg-brand-veryLightGreen" 
}) => {
  return (
    <div className={`${color} p-6 rounded-2xl shadow-sm border border-brand-lightGreen flex flex-col gap-2 transition-transform hover:scale-[1.02]`}>
      <div className="flex justify-between items-center text-brand-darkGreen">
        <h3 className="text-sm font-semibold uppercase tracking-wider">{title}</h3>
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-3xl font-bold text-brand-black">{value}</span>
        <span className="text-xs text-gray-600 font-medium">{label}</span>
      </div>
    </div>
  );
};

export default KpiCard;
