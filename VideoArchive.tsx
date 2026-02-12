
import React, { useState } from 'react';

interface Video {
  id: string;
  youtubeId: string;
  title: string;
  date: string;
  category: string;
  thumbnail?: string;
}

const VideoArchive: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  // ここに動画データを追加するだけで一覧が増えます
  const videos: Video[] = [
    {
      id: '1',
      youtubeId: 'dQw4w9WgXcQ', // サンプルID：ここに実際のYouTube IDを入れます
      title: '第37回：紹介営業を1.5倍にするアフターフォローの極意',
      date: '2025.03.11',
      category: '紹介営業',
    },
    {
      id: '2',
      youtubeId: 'ScMzIvxBSi4', // サンプルID
      title: '第36回：競合他社に差をつける「断熱・性能」の伝え方',
      date: '2025.02.14',
      category: '商品知識',
    },
    {
      id: '3',
      youtubeId: '9bZkp7q19f0', // サンプルID
      title: '第35回：決断を促すクロージング・トークスクリプト',
      date: '2025.01.16',
      category: 'セールススキル',
    },
  ];

  const closeModal = () => setSelectedVideo(null);

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h3 className="text-markey-gold font-bold tracking-widest text-sm mb-4 uppercase">Video Archive</h3>
            <h2 className="text-3xl md:text-4xl font-bold font-serif-jp text-markey-navy leading-snug">
              過去の勉強会アーカイブ
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-md">
            見逃した勉強会や、復習したいテーマをいつでも視聴可能。
            住宅営業の最前線で使われているノウハウが凝縮されています。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="bg-white group cursor-pointer border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 rounded-sm overflow-hidden"
              onClick={() => setSelectedVideo(video)}
            >
              {/* Thumbnail Area */}
              <div className="relative aspect-video overflow-hidden bg-slate-200">
                <img 
                  src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`} 
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-markey-navy/20 group-hover:bg-markey-navy/0 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-markey-gold text-white rounded-full flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="bg-markey-navy/80 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded-sm uppercase tracking-widest font-bold">
                    {video.category}
                  </span>
                </div>
              </div>

              {/* Info Area */}
              <div className="p-6">
                <div className="text-markey-gold text-[11px] font-bold mb-2 tracking-wider">{video.date}</div>
                <h4 className="text-markey-navy font-bold leading-snug group-hover:text-markey-gold transition-colors line-clamp-2">
                  {video.title}
                </h4>
                <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-xs text-slate-400">会員専用コンテンツ</span>
                  <span className="text-xs font-bold text-markey-gold flex items-center gap-1">
                    WATCH NOW
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Overlay */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={closeModal}></div>
          
          <div className="relative w-full max-w-5xl bg-black rounded-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
            {/* Modal Header */}
            <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent z-10 flex justify-between items-start">
              <div>
                <span className="text-markey-gold text-[10px] font-bold tracking-widest uppercase">{selectedVideo.category}</span>
                <h3 className="text-white font-bold md:text-xl">{selectedVideo.title}</h3>
              </div>
              <button 
                onClick={closeModal}
                className="text-white/60 hover:text-white transition-colors p-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* YouTube Embed */}
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="bg-markey-navy p-6 text-white flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-slate-300">
                開催日: {selectedVideo.date} | 住宅営業研究会 限定公開コンテンツ
              </div>
              <button 
                onClick={() => document.getElementById('downloads')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-markey-gold text-white text-xs font-bold px-6 py-2 rounded-sm hover:bg-opacity-90 transition-all shadow-lg"
              >
                この回の資料をダウンロード
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoArchive;
