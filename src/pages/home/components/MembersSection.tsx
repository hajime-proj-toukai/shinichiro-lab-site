
import { useEffect, useRef, useState } from 'react';

export default function MembersSection() {
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

  const members = [
    {
      name: "田中 太郎",
      position: "教授・研究室主宰",
      specialization: "人工知能、機械学習",
      email: "tanaka@university.ac.jp"
    },
    {
      name: "佐藤 花子",
      position: "准教授",
      specialization: "バイオテクノロジー、分子生物学",
      email: "sato@university.ac.jp"
    },
    {
      name: "山田 次郎",
      position: "助教",
      specialization: "ナノマテリアル、材料科学",
      email: "yamada@university.ac.jp"
    }
  ];

  const students = [
    { name: "鈴木 一郎", year: "博士課程3年", research: "深層学習アルゴリズムの最適化" },
    { name: "高橋 美咲", year: "博士課程2年", research: "遺伝子編集技術の応用研究" },
    { name: "伊藤 健太", year: "博士課程1年", research: "ナノ粒子の合成と特性評価" },
    { name: "渡辺 由美", year: "修士課程2年", research: "自然言語処理の医療応用" },
    { name: "中村 大輔", year: "修士課程1年", research: "バイオセンサーの開発" },
    { name: "小林 あゆみ", year: "学部4年", research: "機械学習による画像解析" }
  ];

  return (
    <section 
      ref={sectionRef}
      id="members" 
      className="relative py-24 overflow-hidden"
    >
      {/* Beautiful Gray-dominant Gradient Background - reduced opacity */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-slate-100 to-gray-200"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 via-gray-50 to-blue-50 opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-gray-100 via-slate-50 to-gray-50 opacity-30"></div>
        
        {/* Floating gradient elements with reduced opacity */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-slate-200 to-transparent opacity-15 blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-gray-200 to-transparent opacity-20 blur-lg"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-100 to-transparent opacity-10 blur-2xl"></div>
        <div className="absolute top-1/3 left-1/3 w-20 h-20 bg-gradient-to-br from-slate-100 to-gray-100 opacity-15 blur-lg"></div>
        <div className="absolute bottom-1/4 right-1/3 w-28 h-28 bg-gradient-to-br from-gray-150 to-transparent opacity-20 blur-xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6" style={{ fontFamily: '"Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho ProN", serif' }}>
            Members
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-light" style={{ fontFamily: '"Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho ProN", serif' }}>
            多様な専門性を持つ研究者と学生が協力して、革新的な研究に取り組んでいます
          </p>
        </div>

        {/* Faculty Members */}
        <div className="mb-16">
          <h3 className={`text-2xl font-light text-gray-900 mb-8 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ fontFamily: '"Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho ProN", serif', transitionDelay: isVisible ? '200ms' : '0ms' }}>教員</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <div 
                key={index}
                className={`bg-white/90 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-700 border border-white/70 group hover:bg-white ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${(index + 1) * 200}ms` : '0ms'
                }}
              >
                <div className="text-center">
                  {/* Silhouette placeholder */}
                  <div className="w-32 h-32 mx-auto mb-6 bg-gray-300 relative overflow-hidden rounded-full">
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-400 to-gray-500 opacity-60"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-gray-600 rounded-t-full"></div>
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-600 rounded-full"></div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-xl font-normal text-gray-900" style={{ fontFamily: '"Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho ProN", serif' }}>
                      {member.name}
                    </h4>
                    <p className="text-blue-600 font-light" style={{ fontFamily: '"Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho ProN", serif' }}>
                      {member.position}
                    </p>
                    <p className="text-gray-600 font-light text-sm leading-relaxed" style={{ fontFamily: '"Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho ProN", serif' }}>
                      {member.specialization}
                    </p>
                  </div>
                  
                  <div className="pt-6 mt-6 border-t border-gray-100">
                    <a 
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center text-gray-700 hover:text-gray-900 font-light text-sm transition-all duration-300 group-hover:translate-x-2"
                      style={{ fontFamily: '"Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho ProN", serif' }}
                    >
                      <i className="ri-mail-line mr-3"></i>
                      連絡する
                      <span className="ml-3 w-8 h-px bg-gray-400 transition-all duration-300 group-hover:w-12 group-hover:bg-gray-700"></span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Students */}
        <div>
          <h3 className={`text-2xl font-light text-gray-900 mb-8 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ fontFamily: '"Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho ProN", serif', transitionDelay: isVisible ? '800ms' : '0ms' }}>学生</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {students.map((student, index) => (
              <div 
                key={index}
                className={`bg-white/90 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-all duration-700 border border-white/70 group hover:bg-white ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${(index + 4) * 150}ms` : '0ms'
                }}
              >
                <div className="space-y-3">
                  <h4 className="text-lg font-normal text-gray-900" style={{ fontFamily: '"Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho ProN", serif' }}>
                    {student.name}
                  </h4>
                  <p className="text-blue-600 font-light text-sm" style={{ fontFamily: '"Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho ProN", serif' }}>
                    {student.year}
                  </p>
                  <p className="text-gray-600 text-sm font-light leading-relaxed" style={{ fontFamily: '"Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho ProN", serif' }}>
                    {student.research}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
