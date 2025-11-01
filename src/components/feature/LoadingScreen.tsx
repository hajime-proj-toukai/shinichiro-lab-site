
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onLoadingComplete();
      }, 500); // フェードアウト時間
    }, 500); // 0.5秒間表示に短縮

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-50 via-gray-50 to-blue-100 animate-fade-out">
        <div className="text-center space-y-6">
          <h1 
            className="text-4xl md:text-6xl text-gray-700 text-center"
            style={{ 
              fontFamily: '"Yu Mincho", "YuMincho", "Hiragino Mincho Pro", "ヒラギノ明朝 Pro", "MS PMincho", "MS 明朝", serif'
            }}
          >
            名古屋大学
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-50 via-gray-50 to-blue-100">
      <div className="relative z-10 text-center space-y-6">
        <h1 
          className="text-4xl md:text-6xl text-gray-700 text-center"
          style={{ 
            fontFamily: '"Yu Mincho", "YuMincho", "Hiragino Mincho Pro", "ヒラギノ明朝 Pro", "MS PMincho", "MS 明朝", serif'
          }}
        >
          名古屋大学
        </h1>
      </div>
    </div>
  );
}
