
export default function AccessSection() {
  return (
    <section id="access" className="py-16 sm:py-24 lg:py-32 bg-gray-50/30 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-4 sm:mb-6" style={{ fontFamily: '"Hiragino Mincho ProN", "Yu Mincho", "YuMincho", "HG Mincho E", "MS PMincho", "MS Mincho", serif' }}>
            Access
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed px-4" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>
            研究室へのアクセス方法と連絡先をご案内いたします
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <div className="bg-white/80 p-6 sm:p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-4 sm:mb-6" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>
              所在地
            </h3>
            <div className="aspect-video w-full mb-4 sm:mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3266.4267842!2d136.9685!3d35.1547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600376e7d4b5e5e5%3A0x3b5b5b5b5b5b5b5b!2z5ZCN5Y-k5bGL5aSn5a2m!5e0!3m2!1sja!2sjp!4v1642234567890!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="研究室所在地"
              ></iframe>
            </div>
            <div className="space-y-1 sm:space-y-2 text-gray-600 font-light text-sm sm:text-base" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>
              <p>〒464-8601</p>
              <p>愛知県名古屋市千種区不老町</p>
              <p>名古屋大学 工学部 工学研究科棟 5階</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Details */}
            <div className="bg-white/80 p-6 sm:p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-4 sm:mb-6" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>
                連絡先
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <i className="ri-phone-line text-gray-600 mt-1 text-lg flex-shrink-0"></i>
                  <div className="min-w-0">
                    <p className="text-gray-900 font-light mb-1 text-sm sm:text-base" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>電話</p>
                    <p className="text-gray-600 font-light text-sm sm:text-base break-all" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>052-789-1234</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <i className="ri-mail-line text-gray-600 mt-1 text-lg flex-shrink-0"></i>
                  <div className="min-w-0">
                    <p className="text-gray-900 font-light mb-1 text-sm sm:text-base" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>メール</p>
                    <p className="text-gray-600 font-light text-sm sm:text-base break-all" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>info@lab.nagoya-u.ac.jp</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <i className="ri-time-line text-gray-600 mt-1 text-lg flex-shrink-0"></i>
                  <div className="min-w-0">
                    <p className="text-gray-900 font-light mb-1 text-sm sm:text-base" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>受付時間</p>
                    <p className="text-gray-600 font-light text-sm sm:text-base" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>平日 9:00-17:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Transportation */}
            <div className="bg-white/80 p-6 sm:p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-4 sm:mb-6" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>
                交通アクセス
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <i className="ri-subway-line text-gray-600 mt-1 text-lg flex-shrink-0"></i>
                  <div className="min-w-0">
                    <p className="text-gray-900 font-light mb-1 text-sm sm:text-base" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>地下鉄名城線</p>
                    <p className="text-gray-600 text-xs sm:text-sm font-light" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>名古屋大学駅より徒歩3分</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <i className="ri-bus-line text-gray-600 mt-1 text-lg flex-shrink-0"></i>
                  <div className="min-w-0">
                    <p className="text-gray-900 font-light mb-1 text-sm sm:text-base" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>市バス</p>
                    <p className="text-gray-600 text-xs sm:text-sm font-light" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>名大正門前バス停より徒歩1分</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <i className="ri-car-line text-gray-600 mt-1 text-lg flex-shrink-0"></i>
                  <div className="min-w-0">
                    <p className="text-gray-900 font-light mb-1 text-sm sm:text-base" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>お車でお越しの場合</p>
                    <p className="text-gray-600 text-xs sm:text-sm font-light leading-relaxed" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>名古屋高速都心環状線 吹上東出口より10分</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visit Information */}
            <div className="bg-gray-50 p-6 sm:p-8 border border-gray-200">
              <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-4 sm:mb-6" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>
                見学について
              </h3>
              <p className="text-gray-600 leading-relaxed font-light mb-4 sm:mb-6 text-sm sm:text-base" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>
                研究室見学をご希望の方は、事前にメールまたはお電話でご連絡ください。研究内容のご紹介や施設見学を行っております。
              </p>
              <a 
                href="mailto:info@lab.nagoya-u.ac.jp"
                className="inline-flex items-center text-gray-700 hover:text-gray-900 font-light transition-colors duration-200 border-b border-gray-300 hover:border-gray-500 text-sm sm:text-base"
                style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}
              >
                見学のお申し込み
                <div className="w-4 sm:w-6 h-px bg-gray-400 ml-2"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
