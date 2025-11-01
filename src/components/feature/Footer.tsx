
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-light text-white mb-6" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>
              お問い合わせ
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <i className="ri-phone-line text-gray-400 mt-1 text-lg"></i>
                <div>
                  <p className="text-gray-300 font-light" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>052-789-1234</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <i className="ri-mail-line text-gray-400 mt-1 text-lg"></i>
                <div>
                  <p className="text-gray-300 font-light" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>info@lab.nagoya-u.ac.jp</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <i className="ri-time-line text-gray-400 mt-1 text-lg"></i>
                <div>
                  <p className="text-gray-300 font-light" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>平日 9:00-17:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-xl font-light text-white mb-6" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>
              所在地
            </h3>
            <div className="space-y-2 text-gray-300 font-light" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>
              <p>〒464-8601</p>
              <p>愛知県名古屋市千種区不老町</p>
              <p>名古屋大学 工学部 工学研究科棟 5階</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-light text-white mb-6" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>
              クイックリンク
            </h3>
            <div className="space-y-3">
              <a href="#news" className="block text-gray-300 hover:text-white transition-colors duration-200 font-light" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>
                ニュース
              </a>
              <a href="#members" className="block text-gray-300 hover:text-white transition-colors duration-200 font-light" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>
                メンバー
              </a>
              <a href="#research" className="block text-gray-300 hover:text-white transition-colors duration-200 font-light" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>
                研究内容
              </a>
              <a href="#publications" className="block text-gray-300 hover:text-white transition-colors duration-200 font-light" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>
                論文・発表
              </a>
              <a href="#access" className="block text-gray-300 hover:text-white transition-colors duration-200 font-light" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>
                アクセス
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm font-light mb-4 md:mb-0" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>
            © 2024 しんいちろう研究所. All rights reserved.
          </p>
          <a 
            href="https://readdy.ai/?origin=logo" 
            className="text-gray-400 hover:text-white text-sm font-light transition-colors duration-200"
            style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}
          >
            Powered by Readdy
          </a>
        </div>
      </div>
    </footer>
  );
}
