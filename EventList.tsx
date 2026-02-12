
import React from 'react';

interface Event {
  date: string;
  time: string;
  title: string;
  description: string;
  tag: string;
}

const EventList: React.FC = () => {
  const featuredEvents: Event[] = [
    {
      date: '2025.04.15',
      time: '19:00 - 20:30',
      tag: '定期勉強会',
      title: '第38回：高騰する建材費への顧客理解と資金計画',
      description: 'インフレ時代における顧客への納得感のある価格提示と、ライフサイクルコストを用いた提案手法について学びます。'
    },
    {
      date: '2025.05.13',
      time: '19:00 - 20:30',
      tag: '定期勉強会',
      title: '第39回：SNS時代における初回接客とブランド構築',
      description: 'InstagramやYoutubeを見て来場されるお客様に対し、プロとして信頼を勝ち取るための初回ヒアリング術。'
    }
  ];

  const upcomingThemes = [
    { title: 'アイ工務店対策勉強会', description: '勢いのある競合の強み・弱みを分析し、自社に引き寄せる比較提示の技術。' },
    { title: '太陽光、蓄電池販売排除対策・強化勉強会', description: '光熱費高騰を背景にした、ZEH・設備提案のクロージング率向上策。' },
    { title: '住友林業対策勉強会', description: '木造最高峰ブランドとの競合時、独自の「付加価値」で逆転するための戦略。' },
    { title: '一条工務店対策勉強会', description: '圧倒的な性能値を誇る競合に対し、数値以外の「暮らしの質」で訴求する方法。' },
    { title: '若手向け購入心理勉強会', description: '心理学に基づいた、お客様が「買いたくなる」心の動きの理解と誘導。' },
    { title: 'クロージング研究会', description: '「検討します」を言わせない、契約直前の不安を解消する最終交渉術。' },
    { title: 'FAN化販売手法勉強会', description: '売って終わりではない、紹介が途切れないファンを作るための関係構築。' },
    { title: '2026年予測と基本対策セミナー', description: '法改正や金利動向から読む、次年度の住宅業界の勝ち筋を徹底予測。' },
    { title: '土地無販売王道勉強会', description: '土地探しからのお客様を逃さない、スピード感のある土地提案と建物セット販売。' }
  ];

  return (
    <div className="py-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16 px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-serif-jp text-markey-navy mb-4 leading-snug">
            勉強会・イベント情報
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            最新の市場動向と競合対策を網羅した、<br className="sm:hidden" />実践的なカリキュラム。
          </p>
        </div>

        {/* 直近のイベント */}
        <div className="space-y-8 mb-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-l-4 border-markey-gold pl-4 mb-8 gap-2">
            <h3 className="text-lg font-bold text-markey-navy uppercase tracking-widest">Confirmed Events</h3>
            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Event Access: Member Free / Guest 4,000 JPY</div>
          </div>
          
          {featuredEvents.map((event, idx) => (
            <div key={idx} className="bg-white border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start hover:shadow-xl transition-all relative overflow-hidden group">
              <div className="md:w-32 flex-shrink-0 flex md:flex-col items-baseline md:items-start gap-3 md:gap-0">
                <div className="text-markey-gold font-bold text-lg md:text-xl">{event.date}</div>
                <div className="text-slate-400 text-[10px] md:text-xs">{event.time}</div>
                <div className="md:mt-4 hidden md:block">
                  <span className="bg-markey-navy text-white text-[10px] px-2 py-1 rounded-sm uppercase tracking-widest">{event.tag}</span>
                </div>
              </div>
              
              <div className="flex-grow w-full">
                <div className="md:hidden mb-3">
                   <span className="bg-markey-navy text-white text-[9px] px-2 py-0.5 rounded-sm uppercase tracking-widest">{event.tag}</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-markey-navy mb-4 leading-snug">{event.title}</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6">{event.description}</p>
                
                <div className="flex flex-col lg:flex-row items-center gap-6 border-t border-gray-50 pt-6">
                  {/* 研究会メンバー：左側 */}
                  <div className="flex flex-col items-center sm:items-start shrink-0 w-full sm:w-auto">
                    <span className="text-[9px] text-markey-gold font-bold uppercase tracking-widest mb-1">Members</span>
                    <div className="w-full sm:w-auto text-center bg-markey-gold/10 text-markey-gold font-bold px-6 py-2.5 rounded-sm border border-markey-gold/20 text-sm">
                      研究会メンバー：無料
                    </div>
                  </div>

                  <div className="hidden lg:block h-12 w-px bg-gray-100"></div>

                  {/* 一般参加：右側 */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                    <div className="text-center sm:text-left">
                      <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest block mb-1">Guest Entry</span>
                      <span className="text-markey-navy font-bold text-base md:text-lg whitespace-nowrap">4,000円 <span className="text-[10px] font-normal text-slate-400">(税抜)</span></span>
                    </div>
                    <button 
                      onClick={() => {
                        const form = document.getElementById('join');
                        if (form) {
                          window.scrollTo({ top: form.offsetTop - 80, behavior: 'smooth' });
                        }
                      }}
                      className="w-full sm:w-auto bg-markey-navy text-white text-xs md:text-sm font-bold px-6 py-3.5 rounded-sm hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-md group-hover:bg-markey-gold group-hover:border-markey-gold"
                    >
                      一般参加で申し込む
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-0 right-0">
                <div className="bg-slate-100 text-[8px] text-slate-400 py-1 px-4 rotate-45 translate-x-4 translate-y-1 font-bold tracking-widest border-b border-gray-200">
                  SECURE
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 今後開催予定のテーマ一覧 */}
        <div className="bg-slate-50 p-8 md:p-16 border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none hidden md:block">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-markey-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          
          <div className="text-center mb-12">
            <h3 className="text-xl font-bold text-markey-navy font-serif-jp mb-2">今後の開催予定テーマ</h3>
            <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em]">Scheduled for the future</p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-8">
            {upcomingThemes.map((theme, idx) => (
              <div key={idx} className="group cursor-default border-b border-gray-200 pb-5 hover:border-markey-gold transition-colors">
                <div className="flex items-start gap-4">
                  <span className="text-markey-gold font-serif-jp text-base md:text-lg font-bold opacity-50 group-hover:opacity-100 transition-opacity">
                    {(idx + 1).toString().padStart(2, '0')}
                  </span>
                  <div>
                    <h4 className="font-bold text-markey-navy text-sm md:text-base mb-1 md:mb-2 group-hover:text-markey-gold transition-colors">{theme.title}</h4>
                    <p className="text-slate-500 text-[10px] md:text-xs leading-relaxed">{theme.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Footer Text for upcoming list */}
          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
             <div className="inline-block bg-white px-8 py-4 border border-gray-100 shadow-sm rounded-sm">
                <p className="text-markey-navy font-bold text-sm md:text-base mb-1">
                  上記以外にも、時流に合わせた実践的なテーマを
                </p>
                <p className="text-markey-gold font-bold text-base md:text-lg tracking-[0.2em]">
                  今後、随時開催予定
                </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventList;
