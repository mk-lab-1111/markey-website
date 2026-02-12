
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <div className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-50 z-0"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-serif-jp text-markey-navy mb-4">入会・参加プラン</h2>
          <p className="text-slate-500">継続的な研鑽か、まずは一度の参加か。あなたのスタイルに合わせてお選びください。</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Guest Plan */}
          <div className="bg-white rounded-lg shadow-xl border border-gray-100 p-10 flex flex-col">
            <div className="mb-8">
              <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-2 block">Guest Entry</span>
              <h3 className="text-xl font-bold text-markey-navy mb-4 font-serif-jp">単発参加プラン</h3>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-markey-navy">4,000</span>
                <span className="text-sm text-slate-400 ml-1">円 / 回 (税抜)</span>
              </div>
              <p className="text-xs text-slate-500 mt-2">※税込 4,400円 / Stripeによる都度決済</p>
              
              <div className="mt-4 inline-flex items-center gap-2 bg-markey-gold/10 px-3 py-1.5 rounded-sm border border-markey-gold/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-markey-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
                <span className="text-[10px] text-markey-gold font-bold">招待クーポンをお持ちの方は申込時に適用可能</span>
              </div>
            </div>

            <div className="space-y-4 mb-10 flex-grow">
              {[
                '指定した勉強会（1回）への参加',
                '当日の質疑応答への参加',
                '開催後1週間のアーカイブ視聴',
                '会員専用資料のDLは不可',
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-300 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs">{benefit}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full border-2 border-slate-200 text-slate-600 font-bold py-4 rounded hover:border-markey-navy hover:text-markey-navy transition-all"
            >
              イベントに単発参加する
            </button>
          </div>

          {/* Member Plan */}
          <div className="bg-white rounded-lg shadow-2xl border-2 border-markey-gold overflow-hidden transform md:scale-105 z-10 flex flex-col">
            <div className="bg-markey-navy text-white py-3 px-6 text-center font-bold tracking-widest text-[10px] relative">
              MOST POPULAR - 特別価格
            </div>
            <div className="p-10 flex flex-col h-full">
              <div className="mb-8">
                <span className="text-[10px] font-bold text-markey-gold tracking-widest uppercase mb-2 block">Premium Membership</span>
                <h3 className="text-xl font-bold text-markey-navy mb-4 font-serif-jp">研究会 月額会員</h3>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-markey-navy">3,000</span>
                  <span className="text-sm text-slate-400 ml-1">円 / 月 (税込)</span>
                </div>
                <div className="mt-4 p-3 bg-markey-gold/10 border-l-4 border-markey-gold">
                  <p className="text-[10px] text-markey-navy font-bold leading-relaxed">
                    立ち上げ特別価格。入会後もこの価格が適用され続けます。
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 mb-10 flex-grow">
                {[
                  'すべての定例勉強会への無料参加',
                  '過去アーカイブ動画の見放題',
                  '営業資料・トークスクリプトDL無制限',
                  '会員限定コミュニティへの招待',
                  '個別コンサルティングの優待',
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-700 font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-markey-gold shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs">{benefit}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-markey-gold text-white font-bold text-lg py-5 rounded shadow-xl hover:bg-opacity-90 transition-all active:scale-[0.98]"
              >
                特別価格で会員になる
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center text-xs text-slate-400">
          ※お支払いはStripeによるクレジットカード決済のみとなります。いつでもキャンセル可能です。
        </div>
      </div>
    </div>
  );
};

export default Pricing;
