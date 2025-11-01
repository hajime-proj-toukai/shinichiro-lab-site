
import Button from '../../../components/base/Button';

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-8 sm:py-16 lg:py-0"
    >
      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 via-white to-gray-50 opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-white via-gray-100 to-white opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Enhanced Floating Elements with More Movement */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-100 to-transparent opacity-30 blur-xl floating-gradient"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-gray-100 to-transparent opacity-40 blur-lg floating-gradient" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-50 to-transparent opacity-25 blur-2xl floating-gradient" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-20 h-20 bg-gradient-to-br from-white to-gray-50 opacity-20 blur-lg floating-gradient" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-28 h-28 bg-gradient-to-br from-gray-50 to-transparent opacity-30 blur-xl floating-gradient" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage: `url('https://static.readdy.ai/image/e4cbf0de708db933b95718301e951dff/e689cbe5672876fbf210bfa869e1e217.jpeg')`
        }}
      ></div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Content - Main Text with Animation */}
          <div className="text-left space-y-6 sm:space-y-8 hero-content-left">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-white/60 backdrop-blur-sm text-gray-7000 text-xs sm:text-sm font-light tracking-wide hero-badge" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>
                Advanced Research
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-light text-blue-600 leading-tight tracking-wider hero-title" style={{ fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif' }}>
                <span className="text-float">S</span><span className="text-float-delay-1">h</span><span className="text-float-delay-2">i</span><span className="text-float">n</span><span className="text-float-delay-1">i</span><span className="text-float-delay-2">c</span><span className="text-float">h</span><span className="text-float-delay-1">i</span><span className="text-float-delay-2">r</span><span className="text-float">o</span>
                <br />
                <span className="text-gray-400 font-light">
                  <span className="text-float">R</span><span className="text-float-delay-1">e</span><span className="text-float-delay-2">s</span><span className="text-float">e</span><span className="text-float-delay-1">a</span><span className="text-float-delay-2">r</span><span className="text-float">c</span><span className="text-float-delay-1">h</span>
                  <br />
                  <span className="text-float-delay-2">I</span><span className="text-float">n</span><span className="text-float-delay-1">s</span><span className="text-float-delay-2">t</span><span className="text-float">i</span><span className="text-float-delay-1">t</span><span className="text-float-delay-2">u</span><span className="text-float">t</span><span className="text-float-delay-1">e</span>
                </span>
              </h1>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-extralight max-w-lg hero-subtitle" style={{ fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif' }}>
              わたしたちの研究室についてご紹介します
            </p>
          </div>
          
          {/* Right Navigation Links */}
          <div className="relative hero-content-right">
            <div className="space-y-4 sm:space-y-6">
              <nav className="space-y-3 sm:space-y-4">
                <a 
                  href="#news" 
                  className="block group p-4 sm:p-6 bg-white/40 backdrop-blur-sm hover:bg-white/60 transition-all duration-500 transform hover:scale-105 hover:translate-x-2 nav-item"
                  style={{ animationDelay: '0.2s' }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg sm:text-2xl font-light text-gray-800 group-hover:text-blue-600 transition-colors duration-300" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>
                      News
                    </span>
                    <div className="w-6 h-px bg-gray-400 group-hover:bg-blue-600 group-hover:w-8 transition-all duration-300"></div>
                  </div>
                </a>
                
                <a 
                  href="#members" 
                  className="block group p-4 sm:p-6 bg-white/40 backdrop-blur-sm hover:bg-white/60 transition-all duration-500 transform hover:scale-105 hover:translate-x-2 nav-item"
                  style={{ animationDelay: '0.4s' }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg sm:text-2xl font-light text-gray-800 group-hover:text-blue-600 transition-colors duration-300" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>
                      Members
                    </span>
                    <div className="w-6 h-px bg-gray-400 group-hover:bg-blue-600 group-hover:w-8 transition-all duration-300"></div>
                  </div>
                </a>
                
                <a 
                  href="#research" 
                  className="block group p-4 sm:p-6 bg-white/40 backdrop-blur-sm hover:bg-white/60 transition-all duration-500 transform hover:scale-105 hover:translate-x-2 nav-item"
                  style={{ animationDelay: '0.6s' }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg sm:text-2xl font-light text-gray-800 group-hover:text-blue-600 transition-colors duration-300" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>
                      Research
                    </span>
                    <div className="w-6 h-px bg-gray-400 group-hover:bg-blue-600 group-hover:w-8 transition-all duration-300"></div>
                  </div>
                </a>
                
                <a 
                  href="#publications" 
                  className="block group p-4 sm:p-6 bg-white/40 backdrop-blur-sm hover:bg-white/60 transition-all duration-500 transform hover:scale-105 hover:translate-x-2 nav-item"
                  style={{ animationDelay: '0.8s' }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg sm:text-2xl font-light text-gray-800 group-hover:text-blue-600 transition-colors duration-300" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>
                      Publications
                    </span>
                    <div className="w-6 h-px bg-gray-400 group-hover:bg-blue-600 group-hover:w-8 transition-all duration-300"></div>
                  </div>
                </a>
                
                <a 
                  href="#access" 
                  className="block group p-4 sm:p-6 bg-white/40 backdrop-blur-sm hover:bg-white/60 transition-all duration-500 transform hover:scale-105 hover:translate-x-2 nav-item"
                  style={{ animationDelay: '1.0s' }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg sm:text-2xl font-light text-gray-800 group-hover:text-blue-600 transition-colors duration-300" style={{ fontFamily: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif' }}>
                      Access
                    </span>
                    <div className="w-6 h-px bg-gray-400 group-hover:bg-blue-600 group-hover:w-8 transition-all duration-300"></div>
                  </div>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce scroll-indicator">
        <a href="#news" className="text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-125">
          <div className="w-px h-6 sm:h-8 bg-gray-600 mx-auto mb-2"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full mx-auto"></div>
        </a>
      </div>
    </section>
  );
}
