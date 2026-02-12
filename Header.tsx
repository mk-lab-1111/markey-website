
import React, { useState } from 'react';

interface HeaderProps {
  activeSection: string;
  onMemberAccess: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onMemberAccess }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'about', label: '研究会について' },
    { id: 'consultant', label: 'AIアドバイス' },
    { id: 'events', label: '勉強会情報' },
    { id: 'archive', label: 'アーカイブ動画' },
    { id: 'downloads', label: '資料ライブラリ' },
    { id: 'pricing', label: '料金プラン' },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between relative z-50 bg-white">
        {/* Logo */}
        <div 
          className="flex items-center space-x-2 cursor-pointer" 
          onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMenuOpen(false); }}
        >
          <div className="w-8 h-8 bg-markey-navy flex items-center justify-center rounded">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-markey-navy leading-none">MARKEY CONSULTING</h1>
            <p className="text-[10px] text-markey-gold font-bold tracking-[0.2em]">住宅営業研究会</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-sm font-bold transition-colors hover:text-markey-gold whitespace-nowrap ${
                activeSection === item.id ? 'text-markey-gold' : 'text-slate-600'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="h-6 w-px bg-gray-200 mx-2"></div>
          <button
            onClick={onMemberAccess}
            className="text-markey-navy text-sm font-bold border border-markey-navy px-4 py-2 rounded-sm hover:bg-markey-navy hover:text-white transition-all whitespace-nowrap"
          >
            会員ログイン
          </button>
          <button
            onClick={() => scrollTo('join')}
            className="bg-markey-gold text-white px-5 py-2.5 rounded-sm text-sm font-bold hover:bg-opacity-90 transition-all shadow-md active:scale-95 whitespace-nowrap"
          >
            入会申込
          </button>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-markey-navy p-2 focus:outline-none bg-gray-50 rounded-md"
          aria-label="メニューを開く"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay Background (Black tint) */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 z-30 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Menu Sidebar (Right side, approx 70% width) */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-[75%] max-w-sm bg-markey-navy text-white transition-transform duration-300 ease-in-out z-40 shadow-2xl ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="pt-24 px-8 pb-8 flex flex-col h-full">
          <nav className="flex flex-col space-y-6 flex-grow">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left text-base font-bold border-b border-white/10 pb-4 transition-colors ${
                  activeSection === item.id ? 'text-markey-gold' : 'text-white hover:text-markey-gold'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="pt-4 flex flex-col gap-4">
              <button
                onClick={() => { onMemberAccess(); setIsMenuOpen(false); }}
                className="w-full text-white border border-white/30 px-6 py-3 rounded-sm font-bold text-sm text-center active:bg-white/10"
              >
                会員ログイン
              </button>
              <button
                onClick={() => { scrollTo('join'); setIsMenuOpen(false); }}
                className="w-full bg-markey-gold text-white px-6 py-4 rounded-sm font-bold text-sm text-center shadow-lg active:scale-95"
              >
                入会申し込む
              </button>
            </div>
          </nav>
          
          <div className="pt-8 text-center border-t border-white/10 mt-auto">
            <p className="text-[9px] text-slate-500 font-bold tracking-[0.2em] uppercase">MARKEY CONSULTING</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
