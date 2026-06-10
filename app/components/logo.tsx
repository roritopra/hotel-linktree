import React from "react";

export default function Logo() {
  return (
    <div className="flex flex-col items-center justify-center text-center select-none group">
      <div className="relative w-24 h-32 mb-4 flex items-center justify-center">
        {/* El Arco de medio punto colonial inspirado en los pósters del hotel */}
        <svg
          viewBox="0 0 100 130"
          className="w-full h-full fill-none stroke-[1.5] transition-all duration-700 ease-in-out group-hover:scale-105"
        >
          {/* Arco exterior dorado */}
          <path
            d="M 15 125 L 15 50 A 35 35 0 0 1 85 50 L 85 125"
            className="stroke-amber-500/80"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Arco interior fino */}
          <path
            d="M 22 125 L 22 50 A 28 28 0 0 1 78 50 L 78 125"
            className="stroke-burgundy/40"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Fachada colonial estilizada en el centro (balcón y líneas de ventana) */}
          <g className="stroke-burgundy/80 transition-colors duration-500">
            {/* Ventana arqueada central */}
            <path
              d="M 40 45 L 40 35 A 10 10 0 0 1 60 35 L 60 45 Z"
              strokeWidth="1"
            />
            {/* Balcón colonial */}
            <line x1="30" y1="70" x2="70" y2="70" strokeWidth="1.5" />
            <path
              d="M 33 70 L 33 82 M 40 70 L 40 82 M 47 70 L 47 82 M 53 70 L 53 82 M 60 70 L 60 82 M 67 70 L 67 82"
              strokeWidth="0.75"
            />
            <rect x="30" y="82" width="40" height="2" strokeWidth="1.5" />
            
            {/* Puerta clásica */}
            <path d="M 42 125 L 42 100 A 8 8 0 0 1 58 100 L 58 125 Z" strokeWidth="1" />
          </g>

          {/* Línea base decorativa */}
          <line
            x1="5"
            y1="125"
            x2="95"
            y2="125"
            className="stroke-amber-500/80"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <h1 className="font-serif text-3xl font-medium tracking-wide text-burgundy transition-colors duration-500 italic">
        Boulevard del Río
      </h1>
      <p className="font-sans text-xs tracking-[0.25em] uppercase text-burgundy/60 mt-1">
        Hotel
      </p>
      
      <div className="w-16 h-[1px] bg-gold/40 my-3 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      </div>
      
      <p className="font-serif italic text-sm text-burgundy/80 max-w-[260px] leading-relaxed">
        Donde la tradición y el confort se encuentran
      </p>
    </div>
  );
}

