
import React, { useState } from 'react';
import { Game } from '../types';

interface GameFrameProps {
  game: Game;
  onBack: () => void;
}

const GameFrame: React.FC<GameFrameProps> = ({ game, onBack }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullscreen = () => {
    const element = document.getElementById('game-container');
    if (!element) return;

    if (!document.fullscreenElement) {
      element.requestFullscreen().catch(err => {
        alert(`Error attempting to enable full-screen mode: ${err.message}`);
      });
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-4">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-lg font-bold transition-all border border-slate-700 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          BACK TO GAMES
        </button>

        <div className="text-center md:text-right">
          <h2 className="text-2xl font-black text-white uppercase italic tracking-tight">
            {game.title}
          </h2>
          <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase justify-center md:justify-end">
            <span>{game.category}</span>
            <span>•</span>
            <span className="text-green-500">FULLY UNBLOCKED 2025</span>
          </div>
        </div>
      </div>

      <div 
        id="game-container"
        className="relative bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl aspect-video w-full"
      >
        <iframe
          src={game.url}
          className="w-full h-full border-none"
          title={game.title}
          allowFullScreen
          scrolling="no"
        ></iframe>
        
        {/* Frame Controls Overlay */}
        <div className="absolute bottom-4 right-4 flex gap-2">
            <button 
                onClick={toggleFullscreen}
                className="bg-black/60 hover:bg-indigo-600/80 backdrop-blur-md text-white text-[10px] font-bold px-4 py-2 rounded-full border border-white/10 transition-all uppercase"
            >
                FULLSCREEN
            </button>
            <button 
                onClick={() => window.location.reload()}
                className="bg-black/60 hover:bg-slate-700/80 backdrop-blur-md text-white text-[10px] font-bold px-4 py-2 rounded-full border border-white/10 transition-all uppercase"
            >
                RELOAD
            </button>
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wider">Instructions & Details</h3>
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-800">
            <p className="text-slate-300 leading-relaxed mb-4">
              {game.description}
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex flex-col">
                <span className="text-slate-500 text-[10px] font-bold uppercase">Controls</span>
                <span className="text-slate-200 text-sm font-semibold">WASD / Arrow Keys</span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-500 text-[10px] font-bold uppercase">Platform</span>
                <span className="text-slate-200 text-sm font-semibold">Web Browser (No Install)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-indigo-600 p-6 rounded-2xl text-white shadow-lg shadow-indigo-600/20">
            <h4 className="font-black text-xl italic mb-2">PRO TIP!</h4>
            <p className="text-indigo-100 text-sm font-medium leading-snug">
              Press <strong>F11</strong> for browser fullscreen or use our custom "FULLSCREEN" button for the best experience.
            </p>
          </div>
          
          <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700 text-center">
             <span className="text-slate-500 text-[10px] font-bold uppercase">SHARE THIS GAME</span>
             <div className="flex justify-center gap-2 mt-3">
               <button className="bg-slate-700 hover:bg-indigo-500 px-3 py-1 rounded text-[10px] font-bold transition-colors">URL</button>
               <button className="bg-slate-700 hover:bg-blue-500 px-3 py-1 rounded text-[10px] font-bold transition-colors">FB</button>
               <button className="bg-slate-700 hover:bg-sky-500 px-3 py-1 rounded text-[10px] font-bold transition-colors">X</button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameFrame;
