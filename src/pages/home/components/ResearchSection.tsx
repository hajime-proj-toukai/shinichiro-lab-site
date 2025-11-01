
import { useEffect, useRef, useState } from 'react';

export default function ResearchSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="research" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6" style={{ fontFamily: '"Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho ProN", serif' }}>
            Research
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light" style={{ fontFamily: '"Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho ProN", serif' }}>
            最先端技術と学際的アプローチで、未来を切り拓く研究に取り組んでいます
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* movie */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative overflow-hidden group">
              {/* ローディング中は静止画を表示 */}
              {/* <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                <img
                  src="https://static.readdy.ai/image/e4cbf0de708db933b95718301e951dff/44bf19991958d9165af7658436431935.jpeg"
                  alt="研究室の様子（ローディング中）"
                  className="w-full h-96 object-cover blur-sm transition-opacity duration-700"
                />
              </div> */}

              {/* メイン動画 */}
              <video
                src={`${import.meta.env.BASE_URL}mv/AdobeStock_505553864_silent.webm`}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105 opacity-0 transition-opacity duration-1000"
                onLoadedData={(e) => e.currentTarget.classList.remove('opacity-0')}
              />

              {/* ホバー時のオーバーレイ */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed font-light" style={{ fontFamily: '"Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho ProN", serif' }}>
                当研究室では、人工知能、バイオテクノロジー、ナノマテリアルの3つの主要分野において、革新的な研究を推進しています。機械学習アルゴリズムの開発から遺伝子編集技術の応用まで、幅広い領域で成果を上げています。
              </p>
              
              <p className="text-gray-700 leading-relaxed font-light" style={{ fontFamily: '"Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho ProN", serif' }}>
                学際的なアプローチを重視し、異なる分野の知見を融合させることで、従来の枠組みを超えた新しい発見を目指しています。国際的な研究機関との連携も積極的に行い、グローバルな視点での研究活動を展開しています。
              </p>
              
              <p className="text-gray-700 leading-relaxed font-light" style={{ fontFamily: '"Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho ProN", serif' }}>
                研究成果は国際的な学術誌への論文発表や学会での発表を通じて広く発信し、社会への還元を図っています。次世代の研究者育成にも力を入れ、創造性豊かな人材の輩出に貢献しています。
              </p>
              
              <div className="pt-8">
                <a 
                  href="#" 
                  className="inline-flex items-center px-8 py-4 text-gray-700 hover:text-gray-900 font-light border border-gray-300 hover:border-gray-500 transition-all duration-300 whitespace-nowrap group"
                  style={{ fontFamily: '"Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho ProN", serif' }}
                >
                  研究についてはこちら
                  <span className="ml-4 w-8 h-px bg-gray-400 transition-all duration-300 group-hover:w-12 group-hover:bg-gray-700"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
