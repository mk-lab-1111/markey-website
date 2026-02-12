
import React from 'react';

interface MemberResourcesProps {
  onBack: () => void;
}

const MemberResources: React.FC<MemberResourcesProps> = ({ onBack }) => {
  const categories = [
    {
      name: '営業資料・テンプレート',
      items: [
        { title: '【決定版】初回接客ヒアリングシート', type: 'Excel', size: '2.4MB' },
        { title: '競合比較プレゼン用パワーポイント（12P）', type: 'PPTX', size: '15.1MB' },
        { title: '建物資金計画シミュレーション', type: 'Excel', size: '1.8MB' },
        { title: '地盤改良・付帯工事説明パンフレット', type: 'PDF', size: '5.2MB' },
      ]
    },
    {
      name: 'トークスクリプト・心理学',
      items: [
        { title: '反論処理100本ノック：価格への不満編', type: 'PDF', size: '1.2MB' },
        { title: 'クロージング直前の「決断」を促す魔法の言葉', type: 'PDF', size: '0.8MB' },
        { title: '紹介を自然に依頼するための台本（ステップ別）', type: 'PDF', size: '1.5MB' },
      ]
    },
    {
      name: '最新トレンド・市場分析',
      items: [
        { title: '2025年最新：住宅ローン金利予測レポート', type: 'PDF', size: '3.1MB' },
        { title: '競合「〇〇工務店」徹底解剖対策資料', type: 'PDF', size: '4.5MB' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Member Page Header */}
      <header className="bg-markey-navy text-white h-20 flex items-center shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
          <div className="flex items-center gap-8">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={onBack}>
              <div className="w-8 h-8 bg-white flex items-center justify-center rounded">
                <span className="text-markey-navy font-bold text-xl">M</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-sm font-bold tracking-tight leading-none">MARKEY CONSULTING</h1>
                <p className="text-[8px] text-markey-gold font-bold tracking-[0.2em]">会員様専用ポータル</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-xs text-slate-400 hidden md:block">ようこそ、住宅営業研究会 会員様</span>
            <button 
              onClick={onBack}
              className="text-xs font-bold border border-white/20 px-4 py-2 hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              ログアウトして戻る
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold font-serif-jp text-markey-navy mb-4">資料ライブラリ</h2>
            <p className="text-slate-500">営業現場で即座に使用できる各種資料をダウンロードいただけます。資料は毎月追加・更新されます。</p>
          </div>

          <div className="space-y-12">
            {categories.map((cat, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-bold text-markey-navy border-l-4 border-markey-gold pl-4 mb-6 uppercase tracking-widest">{cat.name}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.items.map((item, i) => (
                    <div key={i} className="bg-white p-6 rounded border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <span className="bg-slate-100 text-slate-500 text-[10px] px-2 py-0.5 rounded font-bold uppercase">{item.type}</span>
                          <span className="text-[10px] text-slate-400 font-mono">{item.size}</span>
                        </div>
                        <h4 className="font-bold text-markey-navy mb-4 leading-snug group-hover:text-markey-gold transition-colors">{item.title}</h4>
                      </div>
                      <button className="w-full bg-slate-50 text-markey-navy border border-gray-200 py-3 rounded text-xs font-bold hover:bg-markey-gold hover:text-white hover:border-markey-gold transition-all flex items-center justify-center gap-2 group-active:scale-95">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        DOWNLOAD NOW
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-white py-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-[10px] tracking-[0.2em] font-bold">
            &copy; 2025 MARKEY CONSULTING | MEMBER EXCLUSIVE AREA
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MemberResources;
