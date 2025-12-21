
import React from 'react';
import { Game } from '../types';

interface GameGridProps {
  games: Game[];
  onPlay: (game: Game) => void;
}

const GameGrid: React.FC<GameGridProps> = ({ games, onPlay }) => {
  if (games.length === 0) {
    return (
      <div className="text-center py-20 bg-slate-800/30 rounded-2xl border border-slate-800">
        <h3 className="text-2xl font-bold text-slate-500 mb-2">NO GAMES FOUND</h3>
        <p className="text-slate-600">Try a different search term or category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {games.map((game) => (
        <div 
          key={game.id}
          className="group relative flex flex-col bg-slate-800 rounded-xl overflow-hidden border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 cursor-pointer"
          onClick={() => onPlay(game)}
        >
          {/* Thumbnail Container */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <img 
              src={game.thumbnail} 
              alt={game.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale-[20%] group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-indigo-600 text-white font-black text-sm px-6 py-2 rounded-full transform scale-90 group-hover:scale-100 transition-transform shadow-xl">
                PLAY NOW
              </div>
            </div>

            {/* Category Tag */}
            <div className="absolute top-2 left-2">
              <span className="bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider border border-slate-700">
                {game.category}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="p-3 bg-slate-800 flex-grow flex flex-col justify-between">
            <h3 className="text-white font-bold truncate group-hover:text-indigo-400 transition-colors uppercase tracking-tight text-sm">
              {game.title}
            </h3>
            <div className="flex items-center justify-between mt-2">
               <span className="text-slate-500 text-[10px] font-bold uppercase italic">NO DOWNLOAD</span>
               <div className="flex gap-0.5">
                  <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
               </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameGrid;
