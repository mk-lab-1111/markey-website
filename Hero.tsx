
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
          alt="Modern Office"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay with higher opacity for text contrast */}
        <div className="absolute inset-0 bg-markey-navy/85 mix-blend-multiply"></div>
        {/* Stronger gradient mask on the left where text resides */}
        <div className="absolute inset-0 bg-gradient-to-r from-markey-navy via-markey-navy/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-white">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1 mb-6 border border-markey-gold text-markey-gold text-sm font-bold tracking-widest uppercase bg-markey-navy/50">
            Housing Sales Community
          </div>
          <h2 className="text-4xl md:text-6xl font-serif-jp font-bold mb-8 leading-[1.4] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            成果を出す。<br className="sm:hidden" />
            住宅営業の<br />
            <span className="text-markey-gold relative inline-block">
              新しいスタンダード。
              <span className="absolute bottom-1 left-0 w-full h-1.5 bg-markey-gold/40 -z-10"></span>
            </span>
          </h2>
          <p className="text-base md:text-xl text-white mb-10 leading-relaxed font-bold max-w-2xl drop-shadow-md">
            住宅営業研究会は、トップセールスが培った<br className="hidden sm:block" />
            「勝てる営業ノウハウ」を共有し、<br className="hidden sm:block" />
            共に高め合うプロフェッショナルコミュニティです。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-start">
            <div className="w-full sm:w-auto">
              <button
                onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto bg-markey-gold text-white px-10 py-4 rounded-sm font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg active:scale-95 text-center"
              >
                今すぐ参加する<span className="text-sm ml-2">（特別価格 3,000円）</span>
              </button>
              <p className="text-[10px] text-markey-gold mt-3 font-bold tracking-widest text-center sm:text-left drop-shadow-sm">
                ※立ち上げ期間限定価格。入会後の価格変動なし。
              </p>
            </div>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border border-white/30 px-10 py-4 rounded-sm font-bold text-lg hover:bg-white/20 transition-all text-center"
            >
              詳細を見る
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-white/50"></div>
      </div>
    </div>
  );
};

export default Hero;
