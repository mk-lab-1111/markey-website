
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: '月例オンライン勉強会',
      description: '毎月一回、最新の営業手法や成功事例を深掘り。リアルタイムでの質疑応答も可能です。',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: '営業資料ダウンロード',
      description: '提案書、資金計画書、ヒアリングシートなど、現場で使えるプロ品質のツールを随時更新。',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: 'トークスクリプト共有',
      description: 'クロージングの悩み、反論処理など、明日から使える「言葉の武器」を提供します。',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    }
  ];

  return (
    <div className="py-24 bg-markey-navy text-white">
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <h2 className="text-3xl font-bold font-serif-jp mb-4">主な提供コンテンツ</h2>
        <p className="text-slate-400">プロの住宅営業として必要なリソースをすべて網羅しています。</p>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {features.map((f, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 p-10 hover:bg-white/10 transition-all group">
            <div className="text-markey-gold mb-6 transition-transform group-hover:scale-110 duration-300">
              {f.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{f.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
