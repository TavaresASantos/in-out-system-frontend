
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Video, BarChart, LogOut, FileText } from 'lucide-react';

const Navbar = () => {
  const pathname = usePathname();

  const menuItems = [
        { icon: Video, label: 'Monitoramento', href: '/cameras' },
    { icon: BarChart, label: 'Painel', href: '/' },
    { icon: FileText, label: 'Relatórios', href: '/relatorios' },

  ];

  return (
    <nav className="w-full bg-brand-darkGreen text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
    <div className="flex items-center gap-4">
    <img
        src="/imagens-apoio/Logo.png"
        alt="Logo Parque da Matinha"
        className="h-12 w-auto object-contain"
    />

            {/* <div className="hidden md:block">
              <span className="text-lg font-black block leading-tight">
                IN-OUT SYSTEM
              </span>
              <span className="text-[10px] text-brand-lightGreen uppercase tracking-widest opacity-80">
                Parque da Matinha
              </span>
            </div> */}
          </div>

          {/* MENU CENTRAL */}
          <div className="hidden md:flex items-center space-x-10">

            {menuItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all font-semibold text-sm ${
                    isActive
                      ? 'bg-brand-green text-white shadow-sm'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <item.icon size={18} />
                  {item.label}
                </Link>
              );
            })}

          </div>

          {/* LADO DIREITO */}
          <div className="flex items-center gap-6">

            <div className="h-8 w-[1px] bg-white/20"></div>

            <button
              title="Sair"
              className="p-2 text-white/60 hover:text-red-400 transition-colors"
            >
              <LogOut size={18} />
            </button>

          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
