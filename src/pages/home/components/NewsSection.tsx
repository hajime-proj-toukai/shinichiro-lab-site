
import { useEffect, useRef, useState } from 'react';

export default function NewsSection() {
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

  const news = [
    {
      date: "2024.01.15",
      title: "田中教授が日本学術振興会賞を受賞しました",
      summary: "人工知能技術の医療応用に関する先駆的研究が評価され、田中太郎教授が日本学術振興会賞を受賞いたしました。"
    },
    {
      date: "2024.01.10",
      title: "Nature Machine Intelligence誌に論文が掲載されました",
      summary: "深層学習を用いた分子特性予測に関する研究成果が、国際的な学術誌Nature Machine Intelligenceに掲載されました。"
    },
    {
      date: "2024.01.05",
      title: "第3回研究室オープンラボを開催します",
      summary: "2024年2月10日に研究室見学会を開催いたします。最新の研究設備と研究成果をご紹介いたします。"
    }
  ];

  return (
    <section ref={sectionRef} id="news" className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6" style={{ fontFamily: '"Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho ProN", serif' }}>
            News
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light" style={{ fontFamily: '"Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho ProN", serif' }}>
            研究室の最新情報をお知らせいたします
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {news.map((item, index) => (
            <article 
              key={index}
              className={`bg-white overflow-hidden hover:shadow-lg transition-all duration-700 hover:-translate-y-2 border-0 rounded-none group flex flex-col h-full ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 200}ms` : '0ms'
              }}
            >
              <div className="bg-gray-100 h-56"></div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center text-gray-400 text-sm mb-4 font-light" style={{ fontFamily: '"Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho ProN", serif' }}>
                  <i className="ri-calendar-line mr-2"></i>
                  {item.date}
                </div>
                
                <h3 className="text-xl font-normal text-gray-900 mb-4 leading-relaxed" style={{ fontFamily: '"Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho ProN", serif' }}>
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light flex-grow" style={{ fontFamily: '"Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho ProN", serif' }}>
                  {item.summary}
                </p>
                
                <div className="pt-4 border-t border-gray-100 mt-auto">
                  <a 
                    href="#" 
                    className="inline-flex items-center text-gray-700 hover:text-gray-900 font-light text-sm transition-all duration-300 group-hover:translate-x-2"
                    style={{ fontFamily: '"Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho ProN", serif' }}
                  >
                    詳細を見る
                    <span className="ml-3 w-8 h-px bg-gray-400 transition-all duration-300 group-hover:w-12 group-hover:bg-gray-700"></span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible ? '600ms' : '0ms' }}>
          <a 
            href="#" 
            className="inline-flex items-center px-8 py-4 text-gray-700 hover:text-gray-900 font-light border border-gray-300 hover:border-gray-500 transition-all duration-300 whitespace-nowrap group"
            style={{ fontFamily: '"Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho ProN", serif' }}
          >
            すべてのニュースを見る
            <span className="ml-4 w-8 h-px bg-gray-400 transition-all duration-300 group-hover:w-12 group-hover:bg-gray-700"></span>
          </a>
        </div>
      </div>
    </section>
  );
}
