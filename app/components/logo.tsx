import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex flex-col items-center justify-center text-center select-none group">
      <div className="relative w-40 h-40 mb-2 flex items-center justify-center transition-all duration-700 ease-in-out group-hover:scale-105">
        <Image
          src="/logo.svg"
          alt="Hotel Boulevard del Río Logo"
          fill
          priority
          className="object-contain"
        />
      </div>
    </div>
  );
}
