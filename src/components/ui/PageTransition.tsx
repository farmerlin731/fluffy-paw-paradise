import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [fadeState, setFadeState] = useState<'visible' | 'fading-out' | 'fading-in'>('visible');
  const prevLocationRef = useRef(location.pathname);

  useEffect(() => {
    // 只有當路徑真的改變時才執行動畫
    if (prevLocationRef.current !== location.pathname) {
      // 開始淡出當前頁面
      setFadeState('fading-out');

      // 等待淡出完成後更新內容並開始淡入
      const updateTimeout = setTimeout(() => {
        setDisplayChildren(children);
        setFadeState('fading-in');
        
        // 短暫延遲後完成淡入
        setTimeout(() => {
          setFadeState('visible');
        }, 50);
      }, 250);

      prevLocationRef.current = location.pathname;

      return () => {
        clearTimeout(updateTimeout);
      };
    } else {
      // 如果路徑沒有改變，直接更新內容
      setDisplayChildren(children);
      setFadeState('visible');
    }
  }, [location.pathname, children]);

  return (
    <div className="relative min-h-screen">
      <div
        className={`
          transition-all duration-500 ease-out
          ${fadeState === 'fading-out' ? 'opacity-0 translate-x-8' : 
            fadeState === 'fading-in' ? 'opacity-0 translate-x-8' :
            'opacity-100 translate-x-0'
          }
        `}
      >
        {displayChildren}
      </div>
      
      {/* 可選：添加一個微妙的載入指示器 */}
      {fadeState !== 'visible' && (
        <div className="fixed top-0 left-0 right-0 z-50">
          <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent opacity-60" />
        </div>
      )}
    </div>
  );
};

export default PageTransition;