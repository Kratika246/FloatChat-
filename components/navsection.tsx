'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';

const navItems = ["Home", "Projects", "About", "Contact"];

const Navsection = () => {
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const itemRef = useRef<(HTMLLIElement | null)[]>([]);

 const handleMouseEnter = (index: number) => {
  gsap.to(itemRefs.current[index], {
    y: -14,
    opacity: 0,
    duration: 0.45,
    ease: "power3.out",
    overwrite: "auto"
  });

  gsap.to(itemRef.current[index], {
    y: 0,
    opacity: 1,
    duration: 0.45,
    ease: "power3.out",
    overwrite: "auto"
  });
};

const handleMouseLeave = (index: number) => {
  gsap.to(itemRefs.current[index], {
    y: 0,
    opacity: 1,
    duration: 0.55,
    ease: "power3.out",
    overwrite: "auto"
  });

  gsap.to(itemRef.current[index], {
    y: 14,
    opacity: 0,
    duration: 0.55,
    ease: "power3.out",
    overwrite: "auto"
  });
};

  return (
    <div className="fixed flex items-center justify-between top-0 w-full h-28 z-10 p-20">
      <div>
        <h1 className="text-2xl text-white font-extralight font-sans">Floatchat</h1>
      </div>

      <div className="w-1/3 font-mono shadow-[0_0_16px_rgba(255,255,255,0.15)] px-12 h-16 rounded-full relative overflow-hidden">

        {/* TOP LIST (default text) */}
        <ul className="absolute inset-0 flex justify-between px-8 items-center text-gray-400">
          {navItems.map((item, i) => (
            <li
              key={i}
              ref={(el) => { itemRefs.current[i] = el; }}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(i)}
              className="cursor-pointer inline-block"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* BOTTOM LIST (hover reveal text) - pointer events disabled */}
        <ul className="absolute inset-0 flex px-8 justify-between items-center text-white pointer-events-none">
          {navItems.map((item, i) => (
            <li
              key={i}
              ref={(el) => { itemRef.current[i] = el; }}
              className="inline-block translate-y-[10px] opacity-0"
            >
              {item}
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default Navsection;
