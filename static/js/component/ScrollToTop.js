import {
    useEffect
} from "react";
import {
    useLocation
} from "react-router-dom";

function ScrollToTop() {
    const {
        pathname
    } = useLocation();

    useEffect(() => {
        // 當路由變化時滾動到頂部
        window.scrollTo(0, 0);
    }, [pathname]); // 監聽路徑變化

    useEffect(() => {
        // 當用戶點擊導航欄時，強制滾動到頂部
        const handleNavigationClick = () => {
            window.scrollTo(0, 0);
        };

        // 為導航按鈕添加點擊監聽
        document.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", handleNavigationClick);
        });

        // 清理事件監聽
        return () => {
            document.querySelectorAll("a").forEach((link) => {
                link.removeEventListener("click", handleNavigationClick);
            });
        };
    }, []);

    return null; // 不渲染任何內容
}

export default ScrollToTop;