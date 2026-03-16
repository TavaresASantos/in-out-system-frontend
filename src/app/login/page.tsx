'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';
import { Mail, Lock, LogIn, AlertCircle, Loader2 } from 'lucide-react';
import LoadingScreen from '@/components/ui/LoadingScreen';

const LoginPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // BYPASS PARA TESTES SEM BACKEND
            if (email === 'admin@sistema.com' && senha === 'admin') {
                localStorage.setItem('token', 'fake-jwt-token-for-testing');
                localStorage.setItem('user', JSON.stringify({ id: 1, nome: 'Administrador (Bypass)', email: 'admin@sistema.com' }));
                setTimeout(() => {
                    router.push('/');
                }, 1000);
                return;
            }

            const response = await api.post('/auth/login', { email, senha });
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.usuario));

            // Simula um pequeno delay para a transição ficar suave
            setTimeout(() => {
                router.push('/');
            }, 1000);
        } catch (err: any) {
            console.error('Erro no login:', err);
            setError(err.response?.data?.message || 'E-mail ou senha inválidos.');
            setLoading(false);
        }
    };

    if (loading && !error) {
        return <LoadingScreen message="Autenticando..." />;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden px-4">
            {/* Background Decorativo */}
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-darkGreen"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-lightGreen/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-darkGreen/5 rounded-full blur-3xl"></div>

           <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-xl border border-gray-100 relative z-10">
  <div className="flex flex-col items-center">

    {/* Fundo verde */}
    <div className="bg-brand-darkGreen p-6 rounded-2xl mb-4">
      <img
        src="/Logo.png"
        alt="Logo Parque da Matinha"
        className="h-20 w-auto object-contain brightness-0 invert"
      />
    </div>

  
                </div>

                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center gap-3 text-sm animate-shake">
                        <AlertCircle size={20} className="shrink-0" />
                        <span>{error}</span>
                    </div>
                )}

                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    <div className="space-y-4">
                        <div className="group relative">
                            <label className="text-xs font-bold text-gray-500 uppercase ml-1 mb-1 block group-focus-within:text-brand-green transition-colors">
                                E-mail
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-brand-green">
                                    <Mail size={18} />
                                </div>
                                <input
                                    type="email"
                                    required
                                    className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-green focus:bg-white transition-all sm:text-sm font-medium"
                                    placeholder="admin@sistema.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="group relative">
                            <label className="text-xs font-bold text-gray-500 uppercase ml-1 mb-1 block group-focus-within:text-brand-green transition-colors">
                                Senha
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-brand-green">
                                    <Lock size={18} />
                                </div>
                                <input
                                    type="password"
                                    required
                                    className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-green focus:bg-white transition-all sm:text-sm font-medium"
                                    placeholder="••••••••"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-black rounded-xl text-white bg-brand-darkGreen hover:bg-brand-deepGreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-darkGreen transition-all shadow-lg hover:shadow-brand-darkGreen/20 disabled:opacity-70"
                    >
                        {loading ? (
                            <Loader2 className="animate-spin mr-2" size={20} />
                        ) : (
                            <span className="flex items-center gap-2">
                                ACESSAR <LogIn size={18} />
                            </span>
                        )}
                    </button>
                </form>

                <div className="text-center mt-6">
                    <p className="text-xs text-gray-400 font-medium">
                        © 2026 Parque da Matinha. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
