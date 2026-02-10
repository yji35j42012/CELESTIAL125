import React, {
    useState
} from 'react';
import '../component/css/SeoSemPage.css';
import {
    useNavigate
} from 'react-router-dom';
import Banner from '../component/Banner';

const SeoSemPage = () => {
        // 切換標籤狀態管理
        const [activeTab, setActiveTab] = useState('seo');

        const navigate = useNavigate();

        const handleContact = () => {
            navigate("/contact", {
                replace: true
            });
        };

        // SEO優勢
        const seoFeatures = [{
                title: "提升網站排名",
                description: "讓您的網站在Google、百度等搜尋引擎的自然排名中名列前茅，獲得源源不絕的免費流量",
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" / >
                    <
                    /svg>
                )
            },
            {
                title: "增加目標訪客",
                description: "吸引真正對您的產品或服務感興趣的潛在客戶，提高網站轉化率和投資回報率",
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" / >
                    <
                    /svg>
                )
            },
            {
                title: "建立品牌權威",
                description: "在搜尋結果中的優勢地位不僅帶來流量，還增強了品牌的可信度和行業權威性",
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" / >
                    <
                    /svg>
                )
            }
        ];

        // SEM優勢
        const semFeatures = [{
                title: "立即提升曝光",
                description: "不同於SEO需要時間積累，SEM廣告讓您的網站立刻出現在搜索結果的最顯眼位置",
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M13 10V3L4 14h7v7l9-11h-7z"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" / >
                    <
                    /svg>
                )
            },
            {
                title: "精準目標客戶",
                description: "通過關鍵詞、地理位置、裝置、時間等多維度定位，確保廣告展示給最有可能轉化的潛在客戶",
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" / >
                    <
                    /svg>
                )
            },
            {
                title: "精確預算控制",
                description: "完全掌控每日廣告支出，按點擊付費模式確保您只為實際的訪客流量付費",
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" / >
                    <
                    /svg>
                )
            }
        ];

        // 統計數據
        const seoStats = [{
                value: "93%",
                label: "的網絡體驗始於搜索引擎"
            },
            {
                value: "75%",
                label: "的用戶不會點擊第二頁結果"
            },
            {
                value: "70-80%",
                label: "的用戶忽略付費廣告，專注自然搜索結果"
            },
            {
                value: "10x",
                label: "自然流量轉化率高於社交媒體"
            }
        ];

        const semStats = [{
                value: "65%",
                label: "的高商業意圖關鍵詞點擊來自付費廣告"
            },
            {
                value: "200%",
                label: "平均廣告投資回報率(ROAS)"
            },
            {
                value: "50%",
                label: "的搜索用戶無法區分付費與自然結果"
            },
            {
                value: "2x",
                label: "競價廣告可為品牌認知度提升2倍"
            }
        ];

        // SEO服務流程
        const seoProcess = [{
                title: "網站診斷分析",
                description: "全面評估您網站目前的SEO狀況，發現問題和機會",
                details: [
                    "技術SEO審查（網站結構、加載速度、移動適配性）",
                    "關鍵詞定位與競爭分析",
                    "內容質量評估",
                    "外部鏈接檔案分析",
                    "用戶體驗測試"
                ],
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" / >
                    <
                    /svg>
                )
            },
            {
                title: "戰略規劃制定",
                description: "根據分析結果，為您量身定制全面的SEO優化策略",
                details: [
                    "核心關鍵詞選擇與佈局",
                    "內容創作與優化計劃",
                    "技術問題修復路線圖",
                    "鏈接建設策略",
                    "本地SEO（如適用）優化方案"
                ],
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" / >
                    <
                    /svg>
                )
            },
            {
                title: "技術SEO優化",
                description: "確保您的網站從技術層面完全符合搜索引擎的標準",
                details: [
                    "網站結構優化與網站地圖提交",
                    "頁面加載速度優化",
                    "移動端兼容性提升",
                    "HTTP狀態碼修正",
                    "URL結構優化與重定向設置"
                ],
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" / >
                    <
                    path d = "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" / >
                    <
                    /svg>
                )
            },
            {
                title: "內容優化與創作",
                description: "開發高品質、針對關鍵詞優化的內容，吸引訪客和搜索引擎",
                details: [
                    "現有頁面內容優化（Meta標籤、標題、描述）",
                    "高質量原創文章和博客撰寫",
                    "多媒體內容（圖片、視頻、信息圖）優化",
                    "內部鏈接結構改進",
                    "用戶意圖匹配度提升"
                ],
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" / >
                    <
                    /svg>
                )
            },
            {
                title: "外部鏈接建設",
                description: "通過高質量的外部鏈接提升您網站的權威性和可信度",
                details: [
                    "高質量反向鏈接獲取",
                    "社交媒體信號優化",
                    "行業目錄提交與管理",
                    "PR發布與媒體曝光",
                    "競爭對手鏈接分析與機會把握"
                ],
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" / >
                    <
                    /svg>
                )
            },
            {
                title: "效果監測與報告",
                description: "持續追蹤、分析和報告您網站在SEO方面的表現",
                details: [
                    "關鍵詞排名監控",
                    "流量分析與用戶行為研究",
                    "轉化率追蹤與優化",
                    "每月專業SEO報告",
                    "ROI分析與策略調整"
                ],
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" / >
                    <
                    /svg>
                )
            }
        ];

        // SEM服務流程
        const semProcess = [{
                title: "廣告需求分析",
                description: "深入了解您的業務目標、目標受眾和關鍵績效指標",
                details: [
                    "業務目標與廣告預期明確化",
                    "目標受眾人群畫像分析",
                    "競爭對手廣告策略研究",
                    "預算評估與ROI目標設定",
                    "廣告平台選擇評估"
                ],
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" / >
                    <
                    /svg>
                )
            },
            {
                title: "關鍵詞研究與規劃",
                description: "發掘高價值關鍵詞，設計結構合理的廣告系列架構",
                details: [
                    "競爭性與商業意圖關鍵詞研究",
                    "長尾關鍵詞機會發掘",
                    "否定關鍵詞清單建立",
                    "關鍵詞分組與匹配方式策略",
                    "廣告系列與廣告組架構設計"
                ],
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" / >
                    <
                    /svg>
                )
            },
            {
                title: "廣告創意製作",
                description: "開發吸引人的廣告文案、標題和擴展，提高點擊率",
                details: [
                    "引人注目的廣告標題創作",
                    "說服力強的廣告描述撰寫",
                    "多種廣告擴展設置",
                    "A/B測試文案設計",
                    "符合平台規範的廣告創意審核"
                ],
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" / >
                    <
                    /svg>
                )
            },
            {
                title: "落地頁優化",
                description: "確保廣告指向的頁面能夠最大化轉化率",
                details: [
                    "廣告與落地頁內容一致性檢查",
                    "落地頁加載速度優化",
                    "行動裝置體驗優化",
                    "轉化要素佈局優化",
                    "A/B測試不同落地頁版本"
                ],
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" / >
                    <
                    /svg>
                )
            },
            {
                title: "競價與預算管理",
                description: "優化競價策略和預算分配，實現最佳ROI",
                details: [
                    "智能出價策略設置",
                    "預算分配優化",
                    "競價調整因素使用",
                    "日間/周間出價調整",
                    "轉化價值追蹤與優化"
                ],
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" / >
                    <
                    /svg>
                )
            },
            {
                title: "定期優化與報告",
                description: "持續監控、優化和報告廣告活動表現",
                details: [
                    "關鍵指標追蹤與分析",
                    "競爭對手動態監控",
                    "質量得分提升優化",
                    "廣告系列性能數據報告",
                    "持續A/B測試與優化"
                ],
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" / >
                    <
                    /svg>
                )
            }
        ];

        // 綜合服務方案
        const servicePackages = [{
                name: "基礎優化",
                price: "3,999HKD",
                period: "起/季度",
                features: [
                    "核心關鍵詞優化 (5個)",
                    "網站技術審計與基礎優化",
                    "Meta標籤優化",
                    "Google Ads基礎設置",
                    "小預算廣告測試",
                    "每月SEO與SEM表現報告"
                ],
                isPopular: false,
                btnText: "了解詳情"
            },
            {
                name: "標準方案",
                price: "7,999HKD",
                period: "起/季度",
                features: [
                    "核心關鍵詞優化 (15個)",
                    "全面技術SEO優化",
                    "每月2篇SEO內容創作",
                    "完整Google Ads帳戶搭建",
                    "再營銷活動設置",
                    "廣告A/B測試",
                    "每月詳細績效分析報告"
                ],
                isPopular: true,
                btnText: "最受歡迎"
            },
            {
                name: "企業定制",
                price: "12,999HKD",
                period: "起/季度",
                features: [
                    "核心關鍵詞優化 (30+)",
                    "高級技術SEO優化",
                    "每月4篇專業內容創作",
                    "高質量外部鏈接建設",
                    "多平台搜索廣告管理",
                    "廣告系列持續優化",
                    "轉化率優化建議",
                    "專屬SEO與SEM顧問"
                ],
                isPopular: false,
                btnText: "聯繫我們"
            }
        ];

        // 適用行業
        const serviceIndustries = [
            "電子商務", "教育機構", "金融服務", "醫療健康", "旅遊酒店",
            "房地產", "科技創新", "法律服務", "餐飲服務", "製造業"
        ];

        // 常見問題
        const faqItems = [{
                question: "SEO和SEM有什麼區別？我應該選擇哪個？",
                answer: "SEO(搜索引擎優化)專注於提高網站在搜索引擎自然(免費)結果中的排名，是長期策略，效果持續穩定；SEM(搜索引擎營銷)主要是通過付費方式在搜索引擎上投放廣告，可立即獲得流量。理想狀態是兩者結合使用：SEM能夠帶來即時流量，同時用SEO建立長期穩定的訪問來源。對於新網站或競爭激烈的行業，建議先啟動SEM獲得即時曝光，同時同步進行SEO優化，逐步建立長期的自然流量。"
            },
            {
                question: "SEO和SEM需要多長時間才能看到效果？",
                answer: "SEM見效非常迅速，設置完成後幾小時內廣告即可上線，立即帶來流量。SEO則是長期策略，通常需要3-6個月才能看到明顯效果，具體時間取決於網站現狀、競爭程度和優化力度。SEO初期會進行技術優化，可能在1-2個月內看到一些排名提升，但持續穩定的成效需要更長時間。這也是為什麼我們通常建議SEO和SEM結合使用，以平衡短期和長期效果。"
            },
            {
                question: "如何確定我的搜索營銷預算分配？",
                answer: "搜索營銷預算分配應基於您的業務目標、行業競爭程度和營銷時間線。對於需要快速結果的企業，可將較大比例(如70%)分配給SEM；對於著眼長期發展的企業，可將較大預算(如60-70%)分配給SEO。理想情況下，新業務可以從50/50的分配開始，然後根據數據分析調整。我們的專業團隊會分析您的具體情況，提供個性化的預算分配建議，並隨著營銷效果不斷優化資源分配。"
            },
            {
                question: "我們已經做了SEO，還需要投放搜索廣告嗎？",
                answer: "即使您的SEO表現良好，SEM仍然可以帶來額外價值。研究表明，同時出現在自然結果和付費廣告中的品牌，點擊率會提高45%以上。SEM可以幫助您搶佔更多SERP版面，測試新關鍵詞，並在競爭激烈的關鍵詞上保持可見性。此外，SEM對於季節性促銷、新產品發布或特定營銷活動尤其有效，可以提供SEO無法實現的精確控制和即時性。最佳策略是將SEO和SEM視為互補工具，共同優化您的搜索營銷效果。"
            },
            {
                question: "你們如何衡量SEO和SEM的成效？",
                answer: "我們使用多維度指標全面衡量搜索營銷成效。對於SEO，我們追蹤關鍵詞排名變化、自然流量增長、入站鏈接質量、頁面停留時間以及最終轉化率。對於SEM，我們關注廣告點擊率(CTR)、平均點擊成本(CPC)、轉化率、廣告質量得分和廣告投資回報率(ROAS)。我們提供綜合的月度報告，不僅展示這些技術指標，還將其與您的業務KPI相關聯，清晰展示搜索營銷對業務增長的貢獻，並提供持續優化的策略建議。"
            }
        ];

        const seoSemDifference = [{
                aspect: "見效時間",
                seo: "3-6個月，長期累積效果",
                sem: "即時生效，廣告快速上線"
            },
            {
                aspect: "費用模式",
                seo: "前期投入，長期受益",
                sem: "按點擊付費，停止投放即停止效果"
            },
            {
                aspect: "排名位置",
                seo: "自然搜索結果區域",
                sem: "付費廣告區域(頁面頂部和底部)"
            },
            {
                aspect: "可控性",
                seo: "受搜索引擎算法影響大",
                sem: "高度可控，可精準定向"
            },
            {
                aspect: "信任度",
                seo: "用戶信任度較高",
                sem: "部分用戶可能對廣告持懷疑態度"
            },
            {
                aspect: "適用場景",
                seo: "長期品牌建設，持續流量獲取",
                sem: "產品發布，促銷活動，快速測試市場"
            }
        ];

        return ( <
            div className = "seo-sem-page" >
            <
            Banner title = "搜索引擎營銷服務"
            description = "整合SEO自然搜索優化與SEM付費推廣策略，打造全方位搜索引擎行銷方案。透過關鍵字分析、競品研究、內容優化與精準投放，提升品牌在搜索結果的曝光率與排名，將潛在客戶引導至您的網站，最大化轉化率與投資回報。"
            image = "/images/SemBanner.png" /
            >

            { /* 數據統計 */ } <
            div className = "seo-stats-container" >
            <
            div className = "seo-stats-wrap" >
            <
            div className = "stats-tabs" >
            <
            button className = {
                `stats-tab ${activeTab === 'seo' ? 'active' : ''}`
            }
            onClick = {
                () => setActiveTab('seo')
            } >
            SEO 數據洞察 <
            /button> <
            button className = {
                `stats-tab ${activeTab === 'sem' ? 'active' : ''}`
            }
            onClick = {
                () => setActiveTab('sem')
            } >
            SEM 數據洞察 <
            /button> <
            /div> <
            div className = "stats-content" > {
                activeTab === 'seo' ? ( <
                    div className = "stats-grid" > {
                        seoStats.map((stat, index) => ( <
                            div key = {
                                index
                            }
                            className = "seo-stat-card" >
                            <
                            div className = "stat-value" > {
                                stat.value
                            } < /div> <
                            div className = "stat-label" > {
                                stat.label
                            } < /div> <
                            /div>
                        ))
                    } <
                    /div>
                ) : ( <
                    div className = "stats-grid" > {
                        semStats.map((stat, index) => ( <
                            div key = {
                                index
                            }
                            className = "seo-stat-card" >
                            <
                            div className = "stat-value" > {
                                stat.value
                            } < /div> <
                            div className = "stat-label" > {
                                stat.label
                            } < /div> <
                            /div>
                        ))
                    } <
                    /div>
                )
            } <
            /div> <
            /div> <
            /div>

            { /* SEO & SEM 對比 */ } <
            section className = "seo-sem-comparison" >
            <
            div className = "section-header" >
            <
            h2 > SEO與SEM： 完美結合的搜索策略 < /h2> <
            p > 了解這兩種強大工具的區別和協同效應 < /p> <
            /div>

            <
            div className = "comparison-container" >
            <
            div className = "comparison-header" >
            <
            div className = "comparison-aspect" > 營銷方面 < /div> <
            div className = "comparison-seo" > SEO 自然排名 < /div> <
            div className = "comparison-sem" > SEM 付費廣告 < /div> <
            /div>

            {
                seoSemDifference.map((item, index) => ( <
                    div key = {
                        index
                    }
                    className = "comparison-row" >
                    <
                    div className = "comparison-aspect" > {
                        item.aspect
                    } < /div> <
                    div className = "comparison-seo" > {
                        item.seo
                    } < /div> <
                    div className = "comparison-sem" > {
                        item.sem
                    } < /div> <
                    /div>
                ))
            } <
            /div>

            <
            div className = "comparison-visual" >
            <
            div className = "serp-mockup" >
            <
            div className = "search-bar" >
            <
            div className = "search-icon" >
            <
            svg viewBox = "0 0 24 24"
            fill = "none"
            stroke = "currentColor"
            strokeWidth = "2" >
            <
            path d = "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            strokeLinecap = "round"
            strokeLinejoin = "round" / >
            <
            /svg> <
            /div> <
            div className = "search-input" > 您的目標關鍵詞 < /div> <
            /div> <
            div className = "search-results" >
            <
            div className = "search-result ad" >
            <
            div className = "ad-badge" > 廣告 < /div> <
            div className = "result-title" > 您的SEM廣告 - 專業服務與解決方案 < /div> <
            div className = "result-url" > www.yourwebsite.com < /div> <
            div className = "result-desc" > 引人注目的廣告文案， 展示您的獨特賣點... < /div> <
            div className = "result-extensions" >
            <
            span > 專業服務 < /span> · <span>24小時支援</span > · < span > 免費諮詢 < /span> <
            /div> <
            /div>

            <
            div className = "search-result your-site" >
            <
            div className = "result-title" > 您的SEO結果 - 專業服務與解決方案 < /div> <
            div className = "result-url" > www.yourwebsite.com < /div> <
            div className = "result-desc" > 完美匹配用戶搜索意圖的專業描述， 吸引更多點擊... < /div> <
            div className = "result-badge" > 您的網站 < /div> <
            /div>

            <
            div className = "search-result competitor" >
            <
            div className = "result-title" > 競爭對手網站 < /div> <
            div className = "result-url" > www.competitor.com < /div> <
            div className = "result-desc" > 結合SEO和SEM策略的網站能夠最大化搜索結果的佔有率... < /div> <
            /div>

            <
            div className = "search-overlay" >
            <
            div className = "search-overlay-content" >
            <
            h3 > 佔據更多搜索結果版面 < /h3> <
            p > 同時使用SEO和SEM， 讓您的網站在搜索結果中獲得最大曝光 < /p> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            /section>

            { /* 服務優勢 */ } <
            section className = "services-benefits" >
            <
            div className = "section-header" >
            <
            h2 > 搜索引擎營銷的關鍵優勢 < /h2> <
            p > 結合SEO與SEM策略為您的業務帶來全方位線上增長 < /p> <
            /div>

            <
            div className = "services-tabs" >
            <
            button className = {
                `service-tab ${activeTab === 'seo' ? 'active' : ''}`
            }
            onClick = {
                () => setActiveTab('seo')
            } >
            SEO優勢 <
            /button> <
            button className = {
                `service-tab ${activeTab === 'sem' ? 'active' : ''}`
            }
            onClick = {
                () => setActiveTab('sem')
            } >
            SEM優勢 <
            /button> <
            /div>

            <
            div className = "benefits-container" > {
                activeTab === 'seo' ? ( <
                    div className = "benefits-grid" > {
                        seoFeatures.map((feature, index) => ( <
                            div key = {
                                index
                            }
                            className = "benefit-card" >
                            <
                            div className = "benefit-icon" > {
                                feature.icon
                            } < /div> <
                            h3 > {
                                feature.title
                            } < /h3> <
                            p > {
                                feature.description
                            } < /p> <
                            /div>
                        ))
                    } <
                    /div>
                ) : ( <
                    div className = "benefits-grid" > {
                        semFeatures.map((feature, index) => ( <
                            div key = {
                                index
                            }
                            className = "benefit-card" >
                            <
                            div className = "benefit-icon sem" > {
                                feature.icon
                            } < /div> <
                            h3 > {
                                feature.title
                            } < /h3> <
                            p > {
                                feature.description
                            } < /p> <
                            /div>
                        ))
                    } <
                    /div>
                )
            } <
            /div> <
            /section>

            { /* 服務流程 */ } <
            section className = "seo-process" >
            <
            div className = "section-header" >
            <
            h2 > 我們的專業服務流程 < /h2> <
            p > 系統化方法確保您的搜索營銷策略取得最佳效果 < /p> <
            /div>

            <
            div className = "process-tabs" >
            <
            button className = {
                `process-tab ${activeTab === 'seo' ? 'active' : ''}`
            }
            onClick = {
                () => setActiveTab('seo')
            } >
            SEO服務流程 <
            /button> <
            button className = {
                `process-tab ${activeTab === 'sem' ? 'active' : ''}`
            }
            onClick = {
                () => setActiveTab('sem')
            } >
            SEM服務流程 <
            /button> <
            /div>

            <
            div className = "process-timeline" > {
                activeTab === 'seo' ?
                seoProcess.map((step, index) => ( <
                    div key = {
                        index
                    }
                    className = "process-step" >
                    <
                    div className = "step-icon" > {
                        step.icon
                    } < /div> <
                    div className = "step-content" >
                    <
                    h3 > {
                        step.title
                    } < /h3> <
                    p > {
                        step.description
                    } < /p> <
                    ul className = "step-details" > {
                        step.details.map((detail, idx) => ( <
                            li key = {
                                idx
                            } > {
                                detail
                            } < /li>
                        ))
                    } <
                    /ul> <
                    /div> <
                    /div>
                )) : semProcess.map((step, index) => ( <
                    div key = {
                        index
                    }
                    className = "process-step" >
                    <
                    div className = "step-icon sem" > {
                        step.icon
                    } < /div> <
                    div className = "step-content" >
                    <
                    h3 > {
                        step.title
                    } < /h3> <
                    p > {
                        step.description
                    } < /p> <
                    ul className = "step-details" > {
                        step.details.map((detail, idx) => ( <
                            li key = {
                                idx
                            } > {
                                detail
                            } < /li>
                        ))
                    } <
                    /ul> <
                    /div> <
                    /div>
                ))
            } <
            /div> <
            /section>

            { /* 綜合服務方案 */ } <
            section className = "seo-packages" >
            <
            div className = "section-header" >
            <
            h2 > 搜索營銷綜合方案 < /h2> <
            p > 結合SEO與SEM的完整解決方案， 滿足不同業務需求 < /p> <
            /div>

            <
            div className = "packages-container" > {
                servicePackages.map((pkg, index) => ( <
                        div key = {
                            index
                        }
                        className = {
                            `package-card ${pkg.isPopular ? 'popular' : ''}`
                        } > {
                            pkg.isPopular && < div className = "popular-badge" > 最佳選擇 < /div>} <
                            h3 > {
                                pkg.name
                            } < /h3> <
                            div className = "package-price" >
                            <
                            span className = "price" > {
                                pkg.price
                            } < /span> <
                            span className = "period" > {
                                pkg.period
                            } < /span> <
                            /div> <
                            div className = "package-features" > {
                                pkg.features.map((feature, fidx) => ( <
                                    li key = {
                                        fidx
                                    } > {
                                        feature
                                    } < /li>
                                ))
                            } <
                            /div> <
                            button className = {
                                `package-btn ${pkg.isPopular ? 'primary' : 'secondary'}`
                            }
                            onClick = {
                                handleContact
                            } > {
                                pkg.btnText
                            } < /button> <
                            /div>
                        ))
                } <
                /div> <
                /section>

                { /* 適用行業 */ } <
                section className = "seo-industries" >
                <
                div className = "section-header" >
                <
                h2 > 適用於各行各業 < /h2> <
                p > 我們的搜索營銷服務已成功幫助各行業客戶提升線上表現 < /p> <
                /div>

                <
                div className = "industries-grid" > {
                    serviceIndustries.map((industry, index) => ( <
                        div key = {
                            index
                        }
                        className = "industry-tag" > {
                            industry
                        } < /div>
                    ))
                } <
                /div>

                <
                div className = "industries-cta" >
                <
                p > 無論您的企業規模大小， 我們都有適合您的搜索營銷解決方案 < /p> <
                button className = "seo-btn primary"
                onClick = {
                    handleContact
                } > 預約免費咨詢 < /button> <
                /div> <
                /section>

                { /* 常見問題 */ } <
                section className = "seo-faq" >
                <
                div className = "section-header" >
                <
                h2 > 搜索營銷常見問題 < /h2> <
                p > 對SEO和SEM還有疑問？ 我們已經為您準備好了答案 < /p> <
                /div>

                <
                div className = "faq-container" > {
                    faqItems.map((item, index) => ( <
                        div key = {
                            index
                        }
                        className = "faq-item" >
                        <
                        div className = "faq-question" >
                        <
                        h3 > {
                            item.question
                        } < /h3> <
                        div className = "faq-toggle" >
                        <
                        svg viewBox = "0 0 24 24"
                        fill = "none"
                        stroke = "currentColor"
                        strokeWidth = "2" >
                        <
                        path d = "M19 9l-7 7-7-7"
                        strokeLinecap = "round"
                        strokeLinejoin = "round" / >
                        <
                        /svg> <
                        /div> <
                        /div> <
                        div className = "faq-answer" >
                        <
                        p > {
                            item.answer
                        } < /p> <
                        /div> <
                        /div>
                    ))
                } <
                /div> <
                /section>

                { /* 行動召喚 */ } {
                    /* <section className="seo-cta">
                            <div className="cta-content">
                              <h2>準備好提升您的搜索引擎表現了嗎？</h2>
                              <p>立即獲取免費搜索營銷審核，了解如何結合SEO與SEM獲得最大效益</p>
                              <form className="cta-form">
                                <input type="text" placeholder="您的網站網址" />
                                <input type="email" placeholder="您的電子郵件" />
                                <button type="submit" className="seo-btn primary" onClick={(e) => { e.preventDefault(); handleContact(); }}>獲取免費分析</button>
                              </form>
                              <div className="cta-guarantee">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p>我們承諾：不收集垃圾郵件，您的信息安全受到保護</p>
                              </div>
                            </div>
                          </section> */
                } <
                /div>
            );
        };

        export default SeoSemPage;