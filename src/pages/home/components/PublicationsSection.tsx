
export default function PublicationsSection() {
  const publications = [
    {
      title: "Deep Learning Approaches for Molecular Property Prediction",
      authors: "田中太郎, 鈴木一郎, 佐藤花子",
      journal: "Nature Machine Intelligence",
      year: "2024",
      type: "論文"
    },
    {
      title: "CRISPR-Cas9を用いた新規遺伝子編集手法の開発",
      authors: "佐藤花子, 高橋美咲, 田中太郎",
      journal: "Cell",
      year: "2024",
      type: "論文"
    },
    {
      title: "Synthesis and Characterization of Novel Nanomaterials for Energy Storage",
      authors: "山田次郎, 伊藤健太, 田中太郎",
      journal: "Advanced Materials",
      year: "2023",
      type: "論文"
    },
    {
      title: "機械学習による医療画像診断の精度向上",
      authors: "田中太郎, 渡辺由美",
      journal: "第46回日本医用画像工学会大会",
      year: "2024",
      type: "学会発表"
    }
  ];

  return (
    <section id="publications" className="py-32 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6" style={{ fontFamily: '"Hiragino Mincho ProN", "Yu Mincho", "YuMincho", "HG Mincho E", "MS PMincho", "MS Mincho", serif' }}>
            Publications
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>
            国際的な学術誌への論文発表と学会での研究成果発表を積極的に行い、<br />
            世界最高水準の研究成果を継続的に発信しています
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            {/* Publication 1 */}
            <div className="bg-white/80 p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300 group">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-normal text-gray-900 leading-relaxed group-hover:text-blue-600 transition-colors duration-300" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>
                    量子コンピューティングにおける新しいアルゴリズムの開発
                  </h3>
                </div>
                <p className="text-gray-600 text-sm font-light leading-relaxed" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>
                  Nature Quantum Information, Vol.15, pp.123-145
                </p>
              </div>
            </div>

            {/* Publication 2 */}
            <div className="bg-white/80 p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300 group">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-normal text-gray-900 leading-relaxed group-hover:text-blue-600 transition-colors duration-300" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>
                    機械学習を用いた材料設計の最適化手法
                  </h3>
                </div>
                <p className="text-gray-600 text-sm font-light leading-relaxed" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>
                  International Conference on Materials Science, pp.456-467
                </p>
              </div>
            </div>

            {/* Publication 3 */}
            <div className="bg-white/80 p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300 group">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-normal text-gray-900 leading-relaxed group-hover:text-blue-600 transition-colors duration-300" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>
                    ナノスケール材料の特性評価に関する新手法
                  </h3>
                </div>
                <p className="text-gray-600 text-sm font-light leading-relaxed" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>
                  Advanced Materials Research, Vol.42, pp.789-801
                </p>
              </div>
            </div>

            {/* Publication 4 */}
            <div className="bg-white/80 p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300 group">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-normal text-gray-900 leading-relaxed group-hover:text-blue-600 transition-colors duration-300" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>
                    持続可能なエネルギーシステムの統合的アプローチ
                  </h3>
                </div>
                <p className="text-gray-600 text-sm font-light leading-relaxed" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>
                  Energy Science &amp; Technology, Vol.28, pp.234-256
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <a 
              href="#all-publications" 
              className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 group whitespace-nowrap"
              style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}
            >
              その他論文はこちら
              <div className="ml-4 w-6 h-px bg-gray-400 group-hover:bg-gray-600 group-hover:w-8 transition-all duration-300"></div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
