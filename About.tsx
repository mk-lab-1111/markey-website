
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000"
              alt="Professional Salesperson"
              className="rounded-lg shadow-2xl relative z-10"
            />
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-markey-gold rounded-lg z-0"></div>
          </div>
          
          <div>
            <h3 className="text-markey-gold font-bold tracking-widest text-sm mb-4">ABOUT US</h3>
            <h2 className="text-3xl md:text-4xl font-bold font-serif-jp mb-8 text-markey-navy leading-snug">
              「売れない」を「売れる」に変える、<br />住宅営業のための研鑽の場
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                住宅営業は、数千万、時には億を超える大きな買い物をお手伝いする、非常にやりがいのある仕事です。
                しかし、同時に「成果が出ない」「他社との差別化が難しい」といった悩みが尽きない職種でもあります。
              </p>
              <p>
                住宅営業研究会では、月一回のオンライン勉強会を通じて最新の市場動向やセールステクニックを学び、
                即戦力となる営業資料やトークスクリプトを共有。
                個人の「営業力」を「組織の資産」レベルに引き上げることを目的としています。
              </p>
              <div className="pt-4 flex">
                <div className="bg-gray-50 p-4 rounded-sm border-l-4 border-markey-gold flex-1 max-w-[240px]">
                  <p className="text-xs text-markey-gold font-bold mb-1">立ち上げ特別価格</p>
                  <p className="text-2xl font-bold text-markey-navy">3,000<span className="text-sm">円</span></p>
                  <p className="text-[10px] text-slate-500">※継続しやすい手軽な月額制</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
