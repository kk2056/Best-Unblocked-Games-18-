
import React from 'react';

interface HeaderProps {
  onHome: () => void;
  onSearch: (val: string) => void;
  searchValue: string;
  isHome: boolean;
}

const Header: React.FC<HeaderProps> = ({ onHome, onSearch, searchValue, isHome }) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-4 py-3 shadow-2xl">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div 
          onClick={onHome}
          className="cursor-pointer group flex items-center gap-2"
        >
          <div className="bg-indigo-600 px-3 py-1 rounded font-black text-xl italic skew-x-[-10deg] group-hover:bg-indigo-500 transition-colors">
            GAMER
          </div>
          <h1 className="text-xl font-bold tracking-tight text-white uppercase">
            HUB <span className="text-indigo-500">2025</span>
          </h1>
        </div>

        {isHome && (
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="SEARCH UNBLOCKED GAMES..."
              className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all font-medium uppercase text-sm placeholder:text-slate-600"
              value={searchValue}
              onChange={(e) => onSearch(e.target.value)}
            />
            {searchValue && (
              <button 
                onClick={() => onSearch('')}
                className="absolute right-3 top-2 text-slate-500 hover:text-white font-bold"
              >
                CLEAR
              </button>
            )}
          </div>
        )}

        <nav className="flex items-center gap-4 font-bold text-xs tracking-widest text-slate-400">
          <button 
            onClick={onHome}
            className={`hover:text-white transition-colors uppercase ${isHome ? 'text-white border-b-2 border-indigo-500' : ''}`}
          >
            HOME
          </button>
          <button className="hover:text-white transition-colors uppercase">CATEGORIES</button>
          <button className="hover:text-white transition-colors uppercase">NEW GAMES</button>
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-full transition-all">
            FAVORITES (0)
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
