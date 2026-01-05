
import React, { useState, useCallback, useEffect } from 'react';
import { GAMES } from './constants';
import { Game, Page } from './types';
import Header from './components/Header';
import AdBanner from './components/AdBanner';
import GameGrid from './components/GameGrid';
import GameFrame from './components/GameFrame';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGames = GAMES.filter(game => 
    game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    game.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePlayGame = useCallback((game: Game) => {
    setSelectedGame(game);
    setCurrentPage('game');
    window.scrollTo(0, 0);
  }, []);

  const handleGoHome = useCallback(() => {
    setCurrentPage('home');
    setSelectedGame(null);
  }, []);

  // Sync title for SEO/UX
  useEffect(() => {
    if (currentPage === 'game' && selectedGame) {
      document.title = `Playing ${selectedGame.title} - Best Unblocked Games 2025`;
    } else {
      document.title = "Best Unblocked Games 2025 No Download";
    }
  }, [currentPage, selectedGame]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 transition-colors duration-300">
      <Header 
        onHome={handleGoHome} 
        onSearch={setSearchQuery} 
        searchValue={searchQuery}
        isHome={currentPage === 'home'}
      />
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <AdBanner label="TOP ADVERTISEMENT SPACE - UNBLOCKED GAMES 2025" />
        
        {currentPage === 'home' ? (
          <div className="mt-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
              <div>
                <h2 className="text-3xl font-extrabold text-white tracking-tight">
                  TRENDING NOW <span className="text-indigo-500">2025</span>
                </h2>
                <p className="text-slate-400 mt-1">Free, no download, 100% working in any browser.</p>
              </div>
              <div className="bg-slate-800 px-4 py-2 rounded-full border border-slate-700">
                <span className="text-green-400 font-bold mr-2">LIVE</span>
                <span className="text-slate-200 text-sm">Online Players: {Math.floor(Math.random() * 50000) + 10000}</span>
              </div>
            </div>
            
            <GameGrid games={filteredGames} onPlay={handlePlayGame} />
            
            <section className="mt-16 text-slate-400 max-w-4xl mx-auto text-center">
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">About Our Unblocked Games</h3>
              <p className="mb-4">
                Welcome to the premier destination for <strong>Best Unblocked Games 2025 No Download</strong>. 
                We provide a curated list of the most popular titles that bypass common filters while maintaining 
                high performance and safety. Our platform uses advanced JavaScript rendering to ensure every game 
                runs smoothly on Chrome, Edge, Safari, and mobile browsers.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
                  <div className="text-indigo-400 font-bold text-2xl mb-1">20+</div>
                  <div className="text-xs uppercase font-bold">Best Games</div>
                </div>
                <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
                  <div className="text-green-400 font-bold text-2xl mb-1">0MB</div>
                  <div className="text-xs uppercase font-bold">Storage Needed</div>
                </div>
                <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
                  <div className="text-orange-400 font-bold text-2xl mb-1">FAST</div>
                  <div className="text-xs uppercase font-bold">Loading Speed</div>
                </div>
                <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
                  <div className="text-blue-400 font-bold text-2xl mb-1">2025</div>
                  <div className="text-xs uppercase font-bold">Latest Edition</div>
                </div>
              </div>
            </section>
          </div>
        ) : (
          <div className="mt-4 animate-in slide-in-from-bottom duration-500">
            {selectedGame && (
              <>
                <GameFrame game={selectedGame} onBack={handleGoHome} />
                
                {/* 1. Strategy Text below GamePlayer (GameFrame) */}
                <div className="strategy mt-8 text-gray-300 p-6 bg-slate-800 rounded-lg border border-slate-700 shadow-xl max-w-6xl mx-auto">
                  <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wider italic">Pro Strategy Guide</h3>
                  <p className="leading-relaxed">
                    The world is your playground. Subway Surfers World Unblocked 2025 focuses on the "World Tour" editions of the game. 
                    While the core gameplay remains, this site rotates through different city maps. From the subways of New York to the 
                    streets of Tokyo or Rio, enjoy dodging the inspector in new environments.
                  </p>
                  <p className="mt-4 leading-relaxed">
                    Variant Features: This site often unlocks special event characters and hoverboards. The different maps aren't just 
                    visual swaps; obstacle layouts change, keeping the game fresh. Powered by 2025 web tech, scene transitions are 
                    smooth and colorful. If you are bored of the standard track, this is the best place to travel the world from 
                    your school desk.
                  </p>
                </div>

                {/* 2. Inner Links below Strategy */}
                <div className="other-games mt-8 bg-slate-950 p-6 rounded-lg shadow-2xl border border-slate-800 max-w-6xl mx-auto">
                  <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-700 pb-2 flex items-center gap-2">
                    <span className="w-2 h-6 bg-indigo-500 inline-block"></span>
                    More Unblocked Games 2025
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 list-none">
                    <li className="mb-1"><a href="https://snakegame.cfd" className="text-blue-400 hover:text-indigo-300 transition-colors duration-200 font-medium">Play Snake Game Unblocked 2025</a></li>
                    <li className="mb-1"><a href="https://playzero2025.sbs" className="text-blue-400 hover:text-indigo-300 transition-colors duration-200 font-medium">Play Zero Lag Games Unblocked 2025</a></li>
                    <li className="mb-1"><a href="https://freegames2025.sbs" className="text-blue-400 hover:text-indigo-300 transition-colors duration-200 font-medium">Play Free Games Unblocked 2025</a></li>
                    <li className="mb-1"><a href="https://nodownload2025.online" className="text-blue-400 hover:text-indigo-300 transition-colors duration-200 font-medium">Play No Download Games Unblocked 2025</a></li>
                    <li className="mb-1"><a href="https://unblocked2025.cfd" className="text-blue-400 hover:text-indigo-300 transition-colors duration-200 font-medium">Play Unblocked Games 2025 (Main)</a></li>
                    <li className="mb-1"><a href="https://unblocked2025.sbs" className="text-blue-400 hover:text-indigo-300 transition-colors duration-200 font-medium">Play Best Unblocked Games 2025</a></li>
                    <li className="mb-1"><a href="https://promax.it.com" className="text-blue-400 hover:text-indigo-300 transition-colors duration-200 font-medium">Play ProMax Games Unblocked 2025</a></li>
                    <li className="mb-1"><a href="https://retrobowl2025.online" className="text-blue-400 hover:text-indigo-300 transition-colors duration-200 font-medium">Play Retro Bowl Unblocked 2025</a></li>
                    <li className="mb-1"><a href="https://1v1lol2025.online" className="text-blue-400 hover:text-indigo-300 transition-colors duration-200 font-medium">Play 1v1.LOL Unblocked 2025</a></li>
                    <li className="mb-1"><a href="https://drift2025.site" className="text-blue-400 hover:text-indigo-300 transition-colors duration-200 font-medium">Play Drift Hunters Unblocked 2025</a></li>
                    <li className="mb-1"><a href="https://slope2025.online" className="text-blue-400 hover:text-indigo-300 transition-colors duration-200 font-medium">Play Slope Game Unblocked 2025</a></li>
                    <li className="mb-1"><a href="https://gd2025.site" className="text-blue-400 hover:text-indigo-300 transition-colors duration-200 font-medium">Play Geometry Dash Unblocked 2025</a></li>
                    <li className="mb-1"><a href="https://motox3m2025.online" className="text-blue-400 hover:text-indigo-300 transition-colors duration-200 font-medium">Play Moto X3M Unblocked 2025</a></li>
                    <li className="mb-1"><a href="https://surfers2025.site" className="text-blue-400 hover:text-indigo-300 transition-colors duration-200 font-medium">Play Subway Surfers Unblocked 2025</a></li>
                    <li className="mb-1"><a href="https://run32025.online" className="text-blue-400 hover:text-indigo-300 transition-colors duration-200 font-medium">Play Run 3 Unblocked 2025</a></li>
                    <li className="mb-1"><a href="https://fireboy2025.site" className="text-blue-400 hover:text-indigo-300 transition-colors duration-200 font-medium">Play Fireboy & Watergirl Unblocked 2025</a></li>
                    <li className="mb-1"><a href="https://paperio2025.online" className="text-blue-400 hover:text-indigo-300 transition-colors duration-200 font-medium">Play Paper.io Unblocked 2025</a></li>
                    <li className="mb-1"><a href="https://driftbest2025.site" className="text-blue-400 hover:text-indigo-300 transition-colors duration-200 font-medium">Play Drift Hunters MAX Unblocked 2025</a></li>
                    <li className="mb-1"><a href="https://gd-full2025.site" className="text-blue-400 hover:text-indigo-300 transition-colors duration-200 font-medium">Play Geometry Dash Full Unblocked 2025</a></li>
                    <li className="mb-1"><a href="https://subway2025.online" className="text-blue-400 hover:text-indigo-300 transition-colors duration-200 font-medium">Play Subway Surfers World Unblocked 2025</a></li>
                  </ul>
                </div>
              </>
            )}
          </div>
        )}

        <AdBanner label="SIDEBAR ADVERTISEMENT" className="mt-12 h-24" />
      </main>

      <footer className="bg-slate-950 border-t border-slate-800 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm">
            &copy; 2025 Best Unblocked Games No Download. All games are copyrighted by their respective owners.
          </p>
          <div className="flex justify-center gap-6 mt-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <span className="hover:text-white cursor-pointer">PRIVACY POLICY</span>
            <span className="hover:text-white cursor-pointer">TERMS OF SERVICE</span>
            <span className="hover:text-white cursor-pointer">DMCA</span>
            <span className="hover:text-white cursor-pointer">CONTACT</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
