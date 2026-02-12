
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const SalesConsultant: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const presets = [
    "初回接客で次回の約束が取れない",
    "「検討します」と言われクロージングできない",
    "競合（積水・一条等）と比較されて負ける",
    "予算オーバーで話が進まない"
  ];

  const handleConsult = async (query: string = question) => {
    if (!query.trim()) return;
    
    setLoading(true);
    setError('');
    setAnswer('');
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: query,
        config: {
          systemInstruction: `
            あなたは住宅営業のトップセールスコンサルタントです。
            ユーザーは住宅営業マンで、日々の接客や商談での悩みを相談します。
            
            回答のルール:
            1. 住宅営業に特化した具体的で実践的なアドバイスを提供してください。
            2. 回答は簡潔に、3つのステップまたはポイントでまとめてください。
            3. 「今日から使えるトーク」や「具体的なアクション」を必ず1つ以上含めてください。
            4. 信頼感があり、励ますようなトーンで回答してください。
            5. 必要に応じて住宅展示場、資金計画、ZEH、住宅ローン、各ハウスメーカーの特徴などの知識を活用してください。
          `,
        },
      });

      setAnswer(response.text || '申し訳ありません。アドバイスを生成できませんでした。');
    } catch (err) {
      console.error(err);
      setError('通信エラーが発生しました。時間を置いて再度お試しください。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-markey-gold font-bold tracking-widest text-sm mb-4 block uppercase">AI Sales Advisor</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif-jp text-markey-navy mb-4">
            AI営業コンサルタント
          </h2>
          <p className="text-slate-500 text-sm md:text-base">
            住宅営業のあらゆる悩みに、AIが24時間いつでも即座にアドバイス。<br className="hidden sm:block" />
            トップセールスの思考回路をあなたの武器に。
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-6 md:p-8 bg-markey-navy text-white flex items-center gap-4">
            <div className="w-12 h-12 bg-markey-gold rounded-full flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9l-.707.707M12 21V12" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg">AIアドバイザーに相談する</h3>
              <p className="text-slate-400 text-xs">具体的な悩みや、行き詰まっている状況を入力してください</p>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="mb-6">
              <label className="block text-xs font-bold text-slate-400 mb-3 uppercase tracking-widest">よくある相談テーマ</label>
              <div className="flex flex-wrap gap-2">
                {presets.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setQuestion(p); handleConsult(p); }}
                    className="text-[11px] font-bold border border-slate-200 px-3 py-2 rounded hover:border-markey-gold hover:text-markey-gold transition-all bg-white"
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative">
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="例：初回接客から着座へ繋げるための自然な誘導方法は？"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-5 text-sm focus:outline-none focus:border-markey-gold transition-all min-h-[120px] resize-none"
              ></textarea>
              <button
                onClick={() => handleConsult()}
                disabled={loading || !question.trim()}
                className={`absolute bottom-4 right-4 bg-markey-navy text-white px-6 py-3 rounded font-bold text-sm shadow-lg transition-all flex items-center gap-2 ${loading || !question.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-90 active:scale-95'}`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    解析中...
                  </>
                ) : (
                  <>
                    相談する
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </div>

            {error && (
              <div className="mt-6 p-4 bg-red-50 text-red-600 text-xs rounded border border-red-100 font-bold">
                {error}
              </div>
            )}

            {answer && (
              <div className="mt-10 animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-px bg-slate-200 flex-grow"></div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">Solution Advice</span>
                  <div className="h-px bg-slate-200 flex-grow"></div>
                </div>
                
                <div className="bg-white border-2 border-markey-gold/20 p-8 rounded-lg relative">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-markey-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="prose prose-sm max-w-none text-slate-700 leading-relaxed whitespace-pre-wrap font-medium">
                    {answer}
                  </div>
                  <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center">
                    <p className="text-[10px] text-slate-400 font-bold italic">
                      ※このアドバイスはAIによる生成です。状況に合わせて活用してください。
                    </p>
                    <button 
                      onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-markey-gold text-xs font-bold hover:underline flex items-center gap-1"
                    >
                      さらに深く学ぶ
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesConsultant;
