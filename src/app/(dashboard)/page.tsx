'use client';

import React, { useState } from 'react';
import VisitorChart from '@/components/dashboard/VisitorChart';
import DashboardFilters, { Periodo } from '@/components/dashboard/DashboardFilters';

export default function DashboardPage() {
    const [periodo, setPeriodo] = useState<Periodo>('dia');
    const [dataInicio, setDataInicio] = useState<string>(new Date().toISOString().split('T')[0]);
    const [dataFim, setDataFim] = useState<string>(new Date().toISOString().split('T')[0]);

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div>
                <h1 className="text-2xl font-black text-brand-darkGreen tracking-tight">Painel de Visitantes</h1>
                <p className="text-sm text-gray-500">Acompanhamento em tempo real do fluxo de pessoas</p>
            </div>

            <DashboardFilters
                periodo={periodo}
                setPeriodo={setPeriodo}
                dataInicio={dataInicio}
                setDataInicio={setDataInicio}
                dataFim={dataFim}
                setDataFim={setDataFim}
            />

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm min-h-[500px]">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                    <div>
                        <h3 className="text-xl font-black text-brand-darkGreen tracking-tight">
                            Evolução do Fluxo
                        </h3>
                        <p className="text-xs text-gray-400 font-medium">
                            Análise temporal de entradas e saídas
                        </p>
                    </div>

                    <div className="flex gap-6 p-3 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-brand-darkGreen shadow-sm"></div>
                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                                Entradas
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-brand-orange shadow-sm"></div>
                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                                Saídas
                            </span>
                        </div>
                    </div>
                </div>

                <div className="h-[400px]">
                    <VisitorChart />
                </div>
            </div>
        </div>
    );
}
