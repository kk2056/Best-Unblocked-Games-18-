
import React from 'react';

interface AdBannerProps {
  label: string;
  className?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ label, className = '' }) => {
  return (
    <div className={`w-full bg-slate-800/50 border-2 border-dashed border-slate-700 rounded-lg flex items-center justify-center p-6 mb-6 group ${className}`}>
      <div className="text-center">
        <p className="text-slate-600 font-bold text-xs tracking-widest uppercase group-hover:text-slate-500 transition-colors">
          {label}
        </p>
        <p className="text-[10px] text-slate-700 mt-1 uppercase font-semibold">ADVERTISEMENT</p>
      </div>
    </div>
  );
};

export default AdBanner;
