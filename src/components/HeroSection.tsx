"use client";

import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowRight, CheckCircle, Shield, AlertTriangle } from 'lucide-react';

const HeroSection = () => {
  const [mainHeadline, setMainHeadline] = useState(
    "Está Realmente Sem Glúten? O Glúten Oculto que Não Vê Está a Prejudicá-lo."
  );

  const subHeadline = "Descubra os ingredientes disfarçados que sabotam sua saúde e aprenda a identificar o glúten oculto em alimentos 'sem glúten'.";

  const benefits = [
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Identifique o glúten oculto em segundos"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: "Proteja sua saúde com conhecimento"
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      text: "Evite reações adversas inesperadas"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {mainHeadline}
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          {subHeadline}
        </p>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
            >
              <div className="flex items-center justify-center space-x-2 text-white">
                <div className="text-green-400">
                  {benefit.icon}
                </div>
                <span className="text-sm font-medium">{benefit.text}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg transform transition hover:scale-105"
          >
            Descobrir Agora
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full text-lg backdrop-blur-sm"
          >
            Saber Mais
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;