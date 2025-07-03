import React from 'react';

const RunningLogo = () => {
  // Secara dinamis membuat array path logo dari logo1 hingga logo26
  const logos = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    src: `/images/major/major${i + 1}.png`,
    alt: `Client Logo ${i + 1}`,
  }));

  const extendedLogos = [...logos, ...logos];

  return (
    <div>
      <h2 className="text-center text-2xl font-bold mb-4 text-[#162957]">List of Major Clients</h2>
      <div className="w-full inline-flex flex-nowrap overflow-hidden bg-white py-12 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {extendedLogos.map((logo, index) => (
            <li key={index}>
              <img src={logo.src} alt={logo.alt} className="h-12 w-auto" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RunningLogo;