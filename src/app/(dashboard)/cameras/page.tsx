'use client';

import React from 'react';
import { Maximize2, RefreshCcw, ShieldCheck } from 'lucide-react';

export default function MonitoringPage() {
  return (
    <div className="space-y-6">
      <div className="bg-brand-black rounded-3xl overflow-hidden shadow-2xl border border-white/5 relative aspect-video group">
        {/* Header da Câmera */}
        <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/80 to-transparent z-10 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse shadow-[0_0_12px_rgba(220,38,38,0.8)]"></div>
            <div>
              <h2 className="text-white font-bold tracking-tight">CAM-01 - ENTRADA PRINCIPAL</h2>
              <p className="text-white/50 text-[10px] font-mono">192.168.1.50 • 1080p • 30fps</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors">
              <RefreshCcw size={18} />
            </button>
            <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors">
              <Maximize2 size={18} />
            </button>
          </div>
        </div>

        {/* Stream Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
           <div className="flex flex-col items-center gap-4 text-white/20">
              <ShieldCheck size={80} strokeWidth={1} />
              <p className="font-medium tracking-widest text-sm">CONECTANDO AO STREAM RTSP...</p>
           </div>
        </div>

        {/* Footer da Câmera */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
           <div className="flex justify-between items-end">
              <div className="bg-brand-darkGreen px-3 py-1 rounded text-[10px] font-bold text-white uppercase tracking-widest">
                Seguro
              </div>
              <span className="text-white/40 font-mono text-xs">2026-03-15 14:32:05</span>
           </div>
        </div>
      </div>
    </div>
  );
}

import { Video } from 'lucide-react';
