import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingScreenProps {
  message?: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ message = "Carregando..." }) => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[9999]">
      <div className="relative flex flex-col items-center gap-4">
        {/* Spinner animado com as cores da marca */}
        <div className="relative">
          <Loader2 className="w-16 h-16 text-brand-darkGreen animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-brand-lightGreen/20 rounded-full animate-pulse"></div>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-1">
          <p className="text-brand-darkGreen font-bold text-lg tracking-tight">{message}</p>
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 bg-brand-green rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-1.5 h-1.5 bg-brand-green rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-1.5 h-1.5 bg-brand-green rounded-full animate-bounce"></div>
          </div>
        </div>

        {/* Logo sutil ao fundo */}
        <div className="mt-8 opacity-10">
          <img 
            src="src/app/assets/images/Logo.png" 
            alt="Logo" 
            className="w-24 grayscale"
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
