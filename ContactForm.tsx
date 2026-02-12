
import React, { useState } from 'react';

type EntryType = 'member' | 'event';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [entryType, setEntryType] = useState<EntryType>('member');
  
  // Coupon States
  const [couponCode, setCouponCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState<number | null>(null);
  const [isCouponValid, setIsCouponValid] = useState<boolean | null>(null);

  const BASE_EVENT_PRICE = 4400; // 4000 + Tax

  const handleApplyCoupon = () => {
    // Demo Coupon Logic
    if (couponCode.toUpperCase() === 'MARKEY50') {
      setDiscountAmount(2200); // 50% OFF
      setIsCouponValid(true);
    } else if (couponCode.toUpperCase() === 'SPECIAL500') {
      setDiscountAmount(BASE_EVENT_PRICE - 500); // Set to 500 JPY
      setIsCouponValid(true);
    } else {
      setDiscountAmount(null);
      setIsCouponValid(false);
    }
  };

  const getFinalPrice = () => {
    if (entryType === 'member') return 3000;
    return discountAmount !== null ? BASE_EVENT_PRICE - discountAmount : BASE_EVENT_PRICE;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-24 text-center">
        <div className="max-w-lg mx-auto bg-white/10 p-12 rounded backdrop-blur">
          <div className="w-20 h-20 bg-markey-gold rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4">
            {entryType === 'member' ? 'お申し込みありがとうございます' : 'お申し込み・決済のご案内'}
          </h3>
          <p className="text-slate-300 leading-relaxed mb-8">
            {entryType === 'member' 
              ? '内容を確認の上、担当者より決済URL（Stripe）およびマイページのご案内をメールにてお送りいたします。'
              : `ご登録いただいたメールアドレスへ、Stripeによる単発参加費用（${getFinalPrice().toLocaleString()}円 税込）の決済URLをお送りしました。決済完了をもちまして受付完了となります。`}
          </p>
          <button 
            onClick={() => { setSubmitted(false); setDiscountAmount(null); setCouponCode(''); setIsCouponValid(null); }}
            className="text-markey-gold font-bold hover:underline"
          >
            フォームに戻る
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold font-serif-jp mb-8">ENTRY FORM</h2>
            <p className="text-slate-400 mb-10 leading-relaxed">
              月額会員への入会、または勉強会への単発参加をご希望の方は以下のフォームよりお申し込みください。
            </p>
            
            <div className="space-y-6">
              <div className="p-6 bg-white/5 border border-white/10 rounded-sm">
                <h4 className="font-bold text-markey-gold mb-2 text-sm uppercase tracking-widest">Payment Method</h4>
                <div className="flex items-center gap-4 grayscale opacity-50">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-6" />
                   <div className="flex gap-2">
                     <div className="w-8 h-5 bg-white/20 rounded-sm"></div>
                     <div className="w-8 h-5 bg-white/20 rounded-sm"></div>
                   </div>
                </div>
                <p className="text-[10px] text-slate-500 mt-4 leading-relaxed">
                  ※お支払いはすべてStripeを利用したクレジットカード決済となります。安全にカード情報が処理されます。
                </p>
              </div>

              <div className="flex items-start gap-4 pt-4">
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-markey-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-sm">お問い合わせ</h4>
                  <p className="text-xs text-slate-400">info@markey-consulting.example.com</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-8 bg-white/5 p-8 sm:p-10 border border-white/10 rounded shadow-2xl relative overflow-hidden">
            {/* Visual background element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-markey-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>

            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-markey-gold mb-4 uppercase tracking-widest">お申し込み内容 <span className="text-red-500">*</span></label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => { setEntryType('member'); setDiscountAmount(null); }}
                    className={`px-4 py-4 border rounded-sm text-sm font-bold transition-all text-left flex flex-col justify-between ${
                      entryType === 'member' 
                      ? 'border-markey-gold bg-markey-gold/10 text-white' 
                      : 'border-white/20 bg-transparent text-slate-400 hover:border-white/40'
                    }`}
                  >
                    <span>月額会員入会</span>
                    <span className="text-xs mt-2 font-normal opacity-80">月額 3,000円 (税込)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setEntryType('event')}
                    className={`px-4 py-4 border rounded-sm text-sm font-bold transition-all text-left flex flex-col justify-between ${
                      entryType === 'event' 
                      ? 'border-markey-gold bg-markey-gold/10 text-white' 
                      : 'border-white/20 bg-transparent text-slate-400 hover:border-white/40'
                    }`}
                  >
                    <span>勉強会に単発参加</span>
                    <span className="text-xs mt-2 font-normal opacity-80">
                      {discountAmount !== null ? (
                        <span className="flex items-center gap-2">
                          <span className="line-through opacity-50">4,400円</span>
                          <span className="text-markey-gold font-bold">{getFinalPrice().toLocaleString()}円 (税込)</span>
                        </span>
                      ) : (
                        "単発 4,000円 (税抜)"
                      )}
                    </span>
                  </button>
                </div>
              </div>

              {/* Coupon Field (Only for Guest Event) */}
              {entryType === 'event' && (
                <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                  <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">招待クーポンをお持ちの方</label>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      value={couponCode}
                      onChange={(e) => { setCouponCode(e.target.value); setIsCouponValid(null); }}
                      className={`flex-grow bg-slate-900 border ${isCouponValid === true ? 'border-green-500/50' : isCouponValid === false ? 'border-red-500/50' : 'border-white/20'} px-4 py-3 focus:outline-none focus:border-markey-gold transition-colors text-white text-sm uppercase`} 
                      placeholder="コードを入力" 
                    />
                    <button 
                      type="button"
                      onClick={handleApplyCoupon}
                      className="bg-markey-gold text-white px-6 py-3 rounded-sm text-xs font-bold hover:bg-opacity-90 active:scale-95 transition-all"
                    >
                      適用
                    </button>
                  </div>
                  {isCouponValid === true && (
                    <p className="text-[10px] text-markey-gold font-bold mt-2 flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      クーポンが適用されました。
                    </p>
                  )}
                  {isCouponValid === false && (
                    <p className="text-[10px] text-red-400 font-bold mt-2">無効なクーポンコードです。</p>
                  )}
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">お名前 <span className="text-red-500">*</span></label>
                  <input required type="text" className="w-full bg-white/5 border border-white/20 px-4 py-3 focus:outline-none focus:border-markey-gold transition-colors text-white text-sm" placeholder="田中 太郎" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">メールアドレス <span className="text-red-500">*</span></label>
                  <input required type="email" className="w-full bg-white/5 border border-white/20 px-4 py-3 focus:outline-none focus:border-markey-gold transition-colors text-white text-sm" placeholder="example@markey.co.jp" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">会社名</label>
                <input type="text" className="w-full bg-white/5 border border-white/20 px-4 py-3 focus:outline-none focus:border-markey-gold transition-colors text-white text-sm" placeholder="〇〇ハウジング株式会社" />
              </div>

              {entryType === 'event' && (
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">参加希望のイベント日</label>
                  <select className="w-full bg-slate-900 border border-white/20 px-4 py-3 focus:outline-none focus:border-markey-gold transition-colors text-white text-sm">
                    <option>2025.04.15 第38回 勉強会</option>
                    <option>2025.05.13 第39回 勉強会</option>
                    <option>その他（お問い合わせにて記載）</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">メッセージ（任意）</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/20 px-4 py-3 focus:outline-none focus:border-markey-gold transition-colors text-white text-sm" placeholder="ご質問などあればご記入ください"></textarea>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <input required type="checkbox" id="privacy" className="rounded border-white/20 bg-white/5 text-markey-gold" />
              <label htmlFor="privacy" className="text-[10px] text-slate-400">
                <a href="#" className="underline hover:text-white transition-colors">プライバシーポリシー</a>に同意する
              </label>
            </div>

            <button 
              type="submit"
              className="w-full bg-markey-gold text-white font-bold py-5 rounded hover:bg-opacity-90 transition-all shadow-xl active:scale-[0.98] flex items-center justify-center gap-2"
            >
              {entryType === 'member' 
                ? '月額会員に申し込む' 
                : `単発参加を申し込む（${getFinalPrice().toLocaleString()}円 税込）`}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <p className="text-center text-[9px] text-slate-500 font-bold tracking-widest uppercase">Secured by Stripe</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
