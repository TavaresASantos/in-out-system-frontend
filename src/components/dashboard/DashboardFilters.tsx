'use client';

import React from 'react';
import { Calendar } from 'lucide-react';

export type Periodo = 'dia' | 'semana' | 'mes';

interface DashboardFiltersProps {
    periodo: Periodo;
    setPeriodo: (p: Periodo) => void;
    dataInicio: string;
    setDataInicio: (d: string) => void;
    dataFim: string;
    setDataFim: (d: string) => void;
}

const DashboardFilters: React.FC<DashboardFiltersProps> = ({
    periodo,
    setPeriodo,
    dataInicio,
    setDataInicio,
    dataFim,
    setDataFim
}) => {
    return (
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                    Período de Análise
                </label>

                <div className="flex gap-2 bg-gray-50 p-1.5 rounded-xl border border-gray-100">
                    {(['dia', 'semana', 'mes'] as Periodo[]).map((p) => (
                        <button
                            key={p}
                            onClick={() => setPeriodo(p)}
                            className={`px-6 py-2 rounded-lg font-bold text-xs transition-all capitalize ${periodo === p
                                    ? 'bg-brand-darkGreen text-white shadow-md'
                                    : 'text-gray-400 hover:text-brand-darkGreen hover:bg-white'
                                }`}
                        >
                            {p}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-end gap-4 w-full lg:w-auto">
                <div className="flex flex-col gap-2 w-full sm:w-auto">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                        De:
                    </label>

                    <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-green" size={16} />
                        <input
                            type="date"
                            value={dataInicio}
                            onChange={(e) => setDataInicio(e.target.value)}
                            className="pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-xs font-bold focus:ring-2 focus:ring-brand-green outline-none w-full"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-full sm:w-auto">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                        Até:
                    </label>

                    <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-green" size={16} />
                        <input
                            type="date"
                            value={dataFim}
                            onChange={(e) => setDataFim(e.target.value)}
                            className="pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-xs font-bold focus:ring-2 focus:ring-brand-green outline-none w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardFilters;
