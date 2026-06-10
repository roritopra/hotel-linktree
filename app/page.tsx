"use client";

import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Logo from "./components/logo";

export default function Home() {
  useEffect(function () {
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start px-4 py-6 md:py-12 relative overflow-hidden select-none bg-[#fdfbf7] text-[#4a151b]">
      <main className="w-full max-w-md glass-panel border-double-gold rounded-3xl px-5 py-8 md:px-6 md:py-10 my-2 md:my-4 shadow-2xl relative z-10 hover:shadow-amber-500/5 transition-all duration-300">
        
        {/* Logo */}
        <div className="flex flex-col items-center justify-center mb-8">
          <Logo />
        </div>

        <div className="space-y-6">

          {/* Grupo 1: Sitio Oficial */}
          <div>
            <h2 className="font-sans text-[11px] font-semibold tracking-widest text-gold-dark uppercase mb-3 text-center">
              Portal Oficial
            </h2>
            <a
              href="https://hotelbulevardelrio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="flex items-center gap-4 w-full p-4 rounded-xl border border-gold/40 hover:border-gold bg-white/50 hover:bg-burgundy/5 transition-all duration-300 transform group-hover:translate-y-[-2px] shadow-sm">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-burgundy/10 text-burgundy group-hover:scale-110 transition-all duration-300">
                  <Icon icon="mdi:earth" className="w-6 h-6" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-sans font-semibold text-sm text-burgundy">Sitio Web Oficial</h3>
                  <p className="font-sans text-xs text-[var(--text-muted)] mt-0.5">
                    Explora nuestras habitaciones, servicios y ubicación
                  </p>
                </div>
                <Icon icon="mdi:chevron-right" className="w-5 h-5 text-burgundy/40 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>

          {/* ── Banner: Fachada del Hotel ── */}
          <div className="relative rounded-2xl overflow-hidden h-36 group cursor-default shadow-md border border-gold/30">
            <Image
              src="/fachada_hotel.webp"
              alt="Fachada del Hotel Boulevard del Río"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay degradé */}
            <div className="absolute inset-0 bg-linear-to-r from-burgundy/80 via-burgundy/50 to-transparent" />
            {/* Texto sobre imagen */}
            <div className="absolute inset-0 flex flex-col justify-center px-5">
              <p className="font-sans text-[10px] tracking-widest font-extrabold uppercase text-white mb-1">Cali, Colombia</p>
              <h3 className="font-serif italic text-xl font-medium text-white leading-tight">
                Donde la tradición<br />y el confort se encuentran
              </h3>
            </div>
          </div>

          {/* Grupo 2: WhatsApp */}
          <div>
            <h2 className="font-sans text-[11px] font-semibold tracking-widest text-gold-dark uppercase mb-3 text-center">
              Escríbenos por WhatsApp
            </h2>
            <div className="space-y-3">
              <a
                href="https://wa.me/573000000000?text=Hola,%20deseo%20comunicarme%20con%20un%20asesor"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="flex items-center gap-4 w-full p-4 rounded-xl border border-gold/40 hover:border-gold bg-white/50 hover:bg-burgundy/5 transition-all duration-300 transform group-hover:translate-y-[-2px] shadow-sm">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-emerald-500/10 text-emerald-600 group-hover:scale-110 transition-all duration-300">
                    <Icon icon="ic:baseline-whatsapp" className="w-6 h-6" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-sans font-semibold text-sm text-burgundy">WhatsApp Asesor Humano</h3>
                    <p className="font-sans text-xs text-[var(--text-muted)] mt-0.5">Chat directo con nuestro personal de reservas</p>
                  </div>
                  <Icon icon="mdi:chevron-right" className="w-5 h-5 text-burgundy/40 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

              <a
                href="https://wa.me/573111111111?text=Hola,%20deseo%20chatear%20con%20el%20asistente%20de%20IA"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="flex items-center gap-4 w-full p-4 rounded-xl border border-gold/40 hover:border-gold bg-white/50 hover:bg-burgundy/5 transition-all duration-300 transform group-hover:translate-y-[-2px] shadow-sm">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-cyan-500/10 text-cyan-700 group-hover:scale-110 transition-all duration-300">
                    <Icon icon="mdi:robot-excited-outline" className="w-6 h-6" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-sans font-semibold text-sm text-burgundy flex items-center gap-2">
                      WhatsApp Inteligencia Artificial
                      <span className="text-[10px] bg-cyan-500/10 text-cyan-700 px-1.5 py-0.5 rounded-full border border-cyan-500/20 uppercase tracking-widest font-bold">Demo</span>
                    </h3>
                    <p className="font-sans text-xs text-[var(--text-muted)] mt-0.5">Chatea con nuestro asistente inteligente 24/7</p>
                  </div>
                  <Icon icon="mdi:chevron-right" className="w-5 h-5 text-burgundy/40 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </div>
          </div>

          {/* Grupo 3: Teléfonos */}
          <div>
            <h2 className="font-sans text-[11px] font-semibold tracking-widest text-gold-dark uppercase mb-3 text-center">
              Llámanos
            </h2>
            <div className="space-y-3">
              <a href="tel:+576028888888" className="block group">
                <div className="flex items-center gap-4 w-full p-4 rounded-xl border border-gold/40 hover:border-gold bg-white/50 hover:bg-burgundy/5 transition-all duration-300 transform group-hover:translate-y-[-2px] shadow-sm">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-amber-500/10 text-amber-600 group-hover:scale-110 transition-all duration-300">
                    <Icon icon="ic:baseline-phone" className="w-6 h-6" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-sans font-semibold text-sm text-burgundy">Teléfono Recepción (Humano)</h3>
                    <p className="font-sans text-xs text-[var(--text-muted)] mt-0.5">Línea tradicional directa al lobby del hotel</p>
                  </div>
                  <Icon icon="mdi:chevron-right" className="w-5 h-5 text-burgundy/40 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

              <a href="tel:+576029999999" className="block group">
                <div className="flex items-center gap-4 w-full p-4 rounded-xl border border-gold/40 hover:border-gold bg-white/50 hover:bg-burgundy/5 transition-all duration-300 transform group-hover:translate-y-[-2px] shadow-sm">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-500/10 text-purple-700 group-hover:scale-110 transition-all duration-300">
                    <Icon icon="ic:baseline-settings-phone" className="w-6 h-6" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-sans font-semibold text-sm text-burgundy flex items-center gap-2">
                      Teléfono Inteligencia Artificial
                      <span className="text-[10px] bg-purple-500/10 text-purple-700 px-1.5 py-0.5 rounded-full border border-purple-500/20 uppercase tracking-widest font-bold">Demo</span>
                    </h3>
                    <p className="font-sans text-xs text-[var(--text-muted)] mt-0.5">Línea automatizada de voz con asistente IA</p>
                  </div>
                  <Icon icon="mdi:chevron-right" className="w-5 h-5 text-burgundy/40 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </div>
          </div>

          {/* ── Banner: Portafolio Supplai ── */}
          <div className="relative rounded-2xl overflow-hidden h-36 group cursor-default shadow-md border border-gold/30">
            <Image
              src="/mockup_dossier.png"
              alt="Portafolio y Dossier de Supplai"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay degradé desde la derecha esta vez */}
            <div className="absolute inset-0 bg-linear-to-l from-burgundy/85 via-burgundy/50 to-transparent" />
            {/* Texto alineado a la derecha */}
            <div className="absolute inset-0 flex flex-col justify-center items-end px-5 text-right">
              <p className="font-sans text-[10px] tracking-widest uppercase font-extrabold text-white mb-1">Tecnología Hotelera</p>
              <h3 className="font-serif italic text-xl font-medium text-white leading-tight">
                Descarga el portafolio<br />de Supplai
              </h3>
            </div>
          </div>
 
          {/* Grupo 4: Supplai */}
          <div>
            <h2 className="font-sans text-[11px] font-semibold tracking-widest text-gold-dark uppercase mb-3 text-center">
              Tecnología Supplai
            </h2>
            <div className="space-y-3">
              <a
                href="https://supplai.com.co"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="flex items-center gap-4 w-full p-4 rounded-xl border border-gold/40 hover:border-gold bg-white/50 hover:bg-burgundy/5 transition-all duration-300 transform group-hover:translate-y-[-2px] shadow-sm">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-indigo-500/10 text-indigo-600 group-hover:scale-110 transition-all duration-300">
                    <Icon icon="mdi:rocket-launch-outline" className="w-6 h-6" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-sans font-semibold text-sm text-burgundy">Visitar Plataforma Supplai</h3>
                    <p className="font-sans text-xs text-[var(--text-muted)] mt-0.5">Conoce la plataforma SaaS que impulsa esta tecnología</p>
                  </div>
                  <Icon icon="mdi:chevron-right" className="w-5 h-5 text-burgundy/40 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

              <a
                href="/portafolio-supplai.pdf"
                download="Portafolio_Supplai.pdf"
                className="block group"
              >
                <div className="flex items-center gap-4 w-full p-4 rounded-xl border border-gold/60 hover:border-gold bg-gold/15 hover:bg-gold/25 transition-all duration-300 transform group-hover:translate-y-[-2px] relative overflow-hidden shadow-sm">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold/10 to-transparent rounded-full blur-xl pointer-events-none" />
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-burgundy/10 text-burgundy group-hover:scale-110 transition-all duration-300">
                    <Icon icon="mdi:file-pdf-box" className="w-6 h-6" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-sans font-bold text-sm text-burgundy flex items-center gap-2">
                      Descargar Portafolio
                      <span className="text-[10px] bg-burgundy/15 text-burgundy px-1.5 py-0.5 rounded-full uppercase tracking-wider font-bold">PDF</span>
                    </h3>
                    <p className="font-sans text-xs text-[var(--text-muted)] mt-0.5">Obtén la nueva versión del dossier de Supplai</p>
                  </div>
                  <Icon icon="mdi:download" className="w-5 h-5 text-burgundy group-hover:translate-y-0.5 transition-transform" />
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Pie de página */}
        <footer className="mt-10 text-center">
          <p className="font-sans text-[10px] tracking-widest uppercase text-burgundy/55">
            Hotel Boulevard del Río © 2026
          </p>
          <p className="font-sans text-[9px] text-burgundy/45 mt-1">
            Impulsado por Tecnología SaaS de Supplai
          </p>
        </footer>
      </main>
    </div>
  );
}
