
import React from 'react';

interface DownloadPreviewProps {
  onNavigate: () => void;
}

const DownloadPreview: React.FC<DownloadPreviewProps> = ({ onNavigate }) => {
  const materials = [
    { title: '成約率UPヒアリングシート', type: 'PDF / Excel', color: 'bg-blue-500' },
    { title: '競合比較プレゼン資料テンプレート', type: 'PowerPoint', color: 'bg-orange-500' },
    { title: '住宅ローン減税・給付金説明資料', type: 'PDF', color: 'bg-green-500' },
    { title: '紹介営業を増やすアフターフォロー術', type: 'Video / Script', color: 'bg-purple-500' },
  ];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-markey-gold font-bold tracking-widest text-sm mb-4">RESOURCE LIBRARY</h3>
            <h2 className="text-3xl md:text-4xl font-bold font-serif-jp mb-8 text-markey-navy leading-snug">
              今すぐ現場で使える、<br />実践的な営業リソースを解放
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              コンサルティング現場で実際に成果が実証された資料、
              そしてトークスクリプトを毎月アップロードしています。
              会員はすべて無制限にダウンロード・利用可能です。
            </p>
            <ul className="space-y-4 mb-8">
              {['未経験者でも結果が出るトークスクリプト', 'プロ品質のパワーポイント・エクセルテンプレート', '最新の税制・補助金情報の解説資料'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                  <div className="w-5 h-5 bg-markey-gold rounded-full flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <button 
              onClick={onNavigate}
              className="bg-markey-navy text-white px-8 py-4 rounded-sm font-bold hover:bg-slate-800 transition-all shadow-lg"
            >
              資料ライブラリをすべて見る
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {materials.map((m, idx) => (
              <div 
                key={idx} 
                onClick={onNavigate}
                className="bg-white p-6 rounded shadow-sm border border-gray-100 hover:shadow-md transition-all group cursor-pointer overflow-hidden relative"
              >
                <div className={`w-1 h-full absolute left-0 top-0 ${m.color}`}></div>
                <div className="flex justify-between items-start mb-4">
                  <div className="text-markey-navy/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="bg-gray-100 text-[10px] text-slate-500 px-2 py-0.5 rounded uppercase font-bold">{m.type}</div>
                </div>
                <h4 className="font-bold text-markey-navy group-hover:text-markey-gold transition-colors line-clamp-2 min-h-[3rem]">{m.title}</h4>
                <div className="mt-4 flex items-center gap-1 text-[10px] font-bold text-markey-gold group-hover:translate-x-1 transition-transform">
                  ENTER LIBRARY
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPreview;
