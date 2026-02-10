import React, {
    useState
} from 'react';
import '../component/css/AppPage.css';
import {
    useNavigate
} from 'react-router-dom';
import Banner from '../component/Banner';

const AppPage = () => {
        const [activeTab, setActiveTab] = useState('scale'); // 'scale' 或 'industry'

        const developmentSteps = [{
                title: "需求溝通",
                description: "深入了解您的業務模式與需求，明確APP功能與目標",
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" / >
                    <
                    /svg>
                )
            },
            {
                title: "方案設計",
                description: "提供專業技術解決方案與報價，確保成本效益最大化",
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" / >
                    <
                    /svg>
                )
            },
            {
                title: "界面設計",
                description: "創造直觀且吸引人的用戶界面，提升用戶體驗與滿意度",
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" / >
                    <
                    /svg>
                )
            },
            {
                title: "技術開發",
                description: "專業團隊根據設計規格進行編碼，確保功能穩定與安全",
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" / >
                    <
                    /svg>
                )
            },
            {
                title: "測試優化",
                description: "全面測試APP各項功能，確保運行順暢且無缺陷",
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
            },
            {
                title: "上線部署",
                description: "協助APP在各大應用商店上線，讓用戶輕鬆下載使用",
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M5 13l4 4L19 7"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" / >
                    <
                    /svg>
                )
            },
            {
                title: "持續維護",
                description: "提供長期技術支持與更新服務，確保APP持續穩定運行",
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" / >
                    <
                    /svg>
                )
            }
        ];

        const appTypes = [{
                title: "原生APP",
                description: "專為iOS或Android平台量身打造的應用程式",
                features: [
                    "充分利用設備硬件性能",
                    "流暢的用戶界面和體驗",
                    "更高的安全性與穩定性",
                    "可整合設備特有功能"
                ],
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" / >
                    <
                    /svg>
                )
            },
            {
                title: "混合APP",
                description: "使用Web技術開發並打包成原生應用",
                features: [
                    "跨平台開發，一次編碼多處運行",
                    "開發成本與時間較低",
                    "更新維護較為便捷",
                    "適合中小型企業應用"
                ],
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" / >
                    <
                    /svg>
                )
            },
            {
                title: "Web APP",
                description: "在瀏覽器中運行的網頁應用程式",
                features: [
                    "無需下載安裝，即開即用",
                    "自動更新，維護簡便",
                    "跨平台兼容性佳",
                    "適合內容展示型應用"
                ],
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" / >
                    <
                    /svg>
                )
            }
        ];

        const customAppSolutions = [
            "商城APP", "電商平台", "外賣點餐", "預約系統",
            "CRM客戶管理", "OA辦公系統", "MRP生產管理", "庫存管理",
            "社交互動", "資訊閱讀", "醫療健康", "教育培訓"
        ];

        const navigate = useNavigate();

        const handleContact = () => {
            navigate("/contact", {
                replace: true
            });
        };

        const handleDemo = () => {
            navigate("/news");
        };

        // 按行業分類的方案
        const industryPricingCards = [{
                title: "電商零售",
                price: "68,000",
                description: "專為電商和零售企業打造的移動商城解決方案",
                features: [
                    "完整購物車與支付功能",
                    "產品目錄與分類管理",
                    "會員積分與優惠券系統",
                    "訂單追蹤與物流查詢",
                    "客戶評價與互動功能",
                    "銷售數據分析儀表板",
                    "庫存管理與提醒",
                    "多語言與貨幣支持",
                    "行銷活動管理工具"
                ],
                highlighted: true,
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" / >
                    <
                    /svg>
                )
            },
            {
                title: "餐飲服務",
                price: "48,000",
                description: "餐廳、咖啡廳和外賣服務的專業APP解決方案",
                features: [
                    "在線點餐與支付功能",
                    "餐廳預訂管理系統",
                    "菜單數字化展示",
                    "會員管理與積分獎勵",
                    "外賣配送流程追蹤",
                    "優惠活動與折扣管理",
                    "顧客反饋與評價系統",
                    "營業數據統計分析"
                ],
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" / >
                    <
                    /svg>
                )
            },
            {
                title: "醫療健康",
                price: "128,000",
                description: "醫療機構和健康服務提供商的專業APP解決方案",
                features: [
                    "線上預約與掛號系統",
                    "電子病歷與就診紀錄",
                    "遠程視訊診療功能",
                    "處方管理與藥物提醒",
                    "健康數據監測與記錄",
                    "醫患溝通即時消息",
                    "檢查報告在線查詢",
                    "醫療知識庫與資訊",
                    "隱私安全保障措施"
                ],
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" / >
                    <
                    /svg>
                )
            }
        ];

        return ( <
                div className = "app-page-container" >
                <
                Banner title = "APP開發"
                description = "量身打造專屬行動應用，從需求分析、UI/UX設計到功能開發與維護，一站式服務滿足各類商業需求。iOS與Android雙平台無縫支援，結合最新技術與用戶體驗設計，為您的品牌創造極具吸引力的數位資產，提升用戶黏著度與轉換率。"
                image = "/images/appBanner.jpeg"
                onLearnMore = {
                    handleContact
                }
                />

                { /* APP優勢介紹 */ } <
                div className = "app-section advantages-section" >
                <
                div className = "section-header" >
                <
                h2 style = {
                    {
                        fontSize: '1.8rem'
                    }
                } > 定制開發APP的優勢 < /h2> <
                p className = "section-subtitle"
                style = {
                    {
                        fontSize: '0.9rem'
                    }
                } > 為何您的企業需要一款專屬APP？ < /p> <
                /div>

                <
                div className = "advantages-container" >
                <
                div className = "advantage-image" > { /* 修改為只顯示一張圖片 */ } <
                div className = "app-showcase-gallery" >
                <
                img src = "/images/app-showcase1.jpg"
                alt = "APP展示"
                className = "app-showcase-img single-app" / >
                <
                div className = "app-showcase-overlay" > < /div> <
                /div> <
                /div>

                <
                div className = "advantage-content" >
                <
                div className = "advantage-card" >
                <
                div className = "advantage-icon" >
                <
                svg viewBox = "0 0 24 24"
                fill = "none"
                stroke = "currentColor"
                strokeWidth = "2" >
                <
                path d = "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                strokeLinecap = "round"
                strokeLinejoin = "round" / >
                <
                /svg> <
                /div> <
                div className = "advantage-text" >
                <
                h3 > 增加業務收入 < /h3> <
                p > APP可作為新的銷售渠道， 24 小時不間斷為企業創造收益， 提高客戶轉化率和復購率 < /p> <
                /div> <
                /div>

                <
                div className = "advantage-card" >
                <
                div className = "advantage-icon" >
                <
                svg viewBox = "0 0 24 24"
                fill = "none"
                stroke = "currentColor"
                strokeWidth = "2" >
                <
                path d = "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                strokeLinecap = "round"
                strokeLinejoin = "round" / >
                <
                /svg> <
                /div> <
                div className = "advantage-text" >
                <
                h3 > 提升客戶互動 < /h3> <
                p > 通過推送通知、 會員積分等功能與客戶保持緊密聯繫， 增強品牌忠誠度和用戶活躍度 < /p> <
                /div> <
                /div>

                <
                div className = "advantage-card" >
                <
                div className = "advantage-icon" >
                <
                svg viewBox = "0 0 24 24"
                fill = "none"
                stroke = "currentColor"
                strokeWidth = "2" >
                <
                path d = "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                strokeLinecap = "round"
                strokeLinejoin = "round" / >
                <
                /svg> <
                /div> <
                div className = "advantage-text" >
                <
                h3 > 數據精準分析 < /h3> <
                p > 收集用戶行為和偏好數據， 為企業決策提供有力支持， 有針對性地優化產品和服務 < /p> <
                /div> <
                /div>

                <
                div className = "advantage-card" >
                <
                div className = "advantage-icon" >
                <
                svg viewBox = "0 0 24 24"
                fill = "none"
                stroke = "currentColor"
                strokeWidth = "2" >
                <
                path d = "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                strokeLinecap = "round"
                strokeLinejoin = "round" / >
                <
                /svg> <
                /div> <
                div className = "advantage-text" >
                <
                h3 > 樹立專業形象 < /h3> <
                p > 定制化APP展現企業專業形象， 提升品牌認知度和美譽度， 在競爭中脫穎而出 < /p> <
                /div> <
                /div> <
                /div> <
                /div>

                <
                div className = "industry-highlights" >
                <
                p className = "highlight-text" >
                <
                span className = "highlight" > 教育、 電商、 醫療、 餐飲、 金融、 旅遊、 房產、 汽車 < /span>等各行業均可通過定制APP實現數字化轉型，提升運營效率 <
                /p> <
                /div> <
                /div>

                { /* APP類型介紹 */ } <
                div className = "app-section types-section" >
                <
                div className = "section-header" >
                <
                h2 style = {
                    {
                        fontSize: '1.8rem'
                    }
                } > 選擇更適合您的APP類型 < /h2> <
                p className = "section-subtitle"
                style = {
                    {
                        fontSize: '0.9rem'
                    }
                } > 20 年經驗， 為數百家企業提供專屬應用解決方案 < /p> <
                /div>

                <
                div className = "app-types-container" > {
                    appTypes.map((type, index) => ( <
                        div key = {
                            index
                        }
                        className = "app-type-card" >
                        <
                        div className = "type-header" >
                        <
                        div className = "type-icon" > {
                            type.icon
                        } < /div> <
                        h3 > {
                            type.title
                        } < /h3> <
                        /div> <
                        p className = "type-description" > {
                            type.description
                        } < /p> <
                        ul className = "type-features" > {
                            type.features.map((feature, fidx) => ( <
                                li key = {
                                    fidx
                                } > {
                                    feature
                                } < /li>
                            ))
                        } <
                        /ul> <
                        /div>
                    ))
                } <
                /div>

                <
                div className = "solutions-container" >
                <
                div className = "solutions-header" >
                <
                h3 > 我們提供的定制APP解決方案 < /h3> <
                /div> <
                div className = "solutions-grid" > {
                    customAppSolutions.map((solution, index) => ( <
                        div key = {
                            index
                        }
                        className = "solution-item" >
                        <
                        span > {
                            solution
                        } < /span> <
                        /div>
                    ))
                } <
                /div> <
                /div> <
                /div>

                { /* 開發流程 */ } <
                div className = "app-section process-section" >
                <
                div className = "section-header" >
                <
                h2 style = {
                    {
                        fontSize: '1.8rem'
                    }
                } > APP開發流程 < /h2> <
                p className = "section-subtitle"
                style = {
                    {
                        fontSize: '0.9rem'
                    }
                } > 一站式服務， 全程1對1專人對接， 隨時調整開發計畫 < /p> <
                /div>

                <
                div className = "process-timeline" > {
                    developmentSteps.map((step, index) => ( <
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
                            /div> <
                            div className = "step-number"
                            style = {
                                {
                                    display: 'none'
                                }
                            } > < /div> {
                                index < developmentSteps.length - 1 && < div className = "step-connector"
                                style = {
                                        {
                                            display: 'none'
                                        }
                                    } > < /div>} <
                                    /div>
                            ))
                    } <
                    /div>

                    <
                    div className = "process-highlights" >
                    <
                    div className = "process-highlight-item" >
                    <
                    div className = "highlight-icon" >
                    <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" / >
                    <
                    /svg> <
                    /div> <
                    p > 省時省心 < /p> <
                    /div> <
                    div className = "process-highlight-item" >
                    <
                    div className = "highlight-icon" >
                    <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" / >
                    <
                    /svg> <
                    /div> <
                    p > 品質保證 < /p> <
                    /div> <
                    div className = "process-highlight-item" >
                    <
                    div className = "highlight-icon" >
                    <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" / >
                    <
                    /svg> <
                    /div> <
                    p > 成本可控 < /p> <
                    /div> <
                    div className = "process-highlight-item" >
                    <
                    div className = "highlight-icon" >
                    <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M13 10V3L4 14h7v7l9-11h-7z"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" / >
                    <
                    /svg> <
                    /div> <
                    p > 快速交付 < /p> <
                    /div> <
                    /div> <
                    /div>

                    { /* 程式開發價目表 */ } <
                    div className = "app-section pricing-section" >
                    <
                    div className = "section-header" >
                    <
                    h2 style = {
                        {
                            fontSize: '1.8rem'
                        }
                    } > 程式開發服務方案 < /h2> <
                    p className = "section-subtitle"
                    style = {
                        {
                            fontSize: '0.9rem'
                        }
                    } > 量身定制的解決方案， 滿足不同規模企業的程式開發需求 < /p> <
                    /div>

                    <
                    div className = "pricing-tabs" >
                    <
                    button
                    className = {
                        `pricing-tab ${activeTab === 'scale' ? 'active' : ''}`
                    }
                    onClick = {
                        () => setActiveTab('scale')
                    } >
                    按規模選擇 <
                    /button> <
                    button
                    className = {
                        `pricing-tab ${activeTab === 'industry' ? 'active' : ''}`
                    }
                    onClick = {
                        () => setActiveTab('industry')
                    } >
                    按行業選擇 <
                    /button> <
                    /div>

                    {
                        activeTab === 'scale' ? ( <
                            div className = "pricing-cards-container" >
                            <
                            div className = "pricing-card" >
                            <
                            div className = "pricing-card-header" >
                            <
                            h3 > 基礎方案 < /h3> <
                            div className = "pricing-amount" >
                            <
                            span className = "price" > $48, 000 < /span> <
                            span className = "term" > 起 < /span> <
                            /div> <
                            p > 適合小型企業和創業團隊， 快速打造您的第一款APP < /p> <
                            /div> <
                            div className = "pricing-card-content" >
                            <
                            h4 > 包含服務 < /h4> <
                            ul className = "pricing-features" >
                            <
                            li >
                            <
                            svg viewBox = "0 0 24 24"
                            fill = "none"
                            stroke = "currentColor"
                            strokeWidth = "2" >
                            <
                            path d = "M5 13l4 4L19 7"
                            strokeLinecap = "round"
                            strokeLinejoin = "round" / >
                            <
                            /svg>
                            專業UI設計(5 - 8 個主要界面) <
                            /li> <
                            li >
                            <
                            svg viewBox = "0 0 24 24"
                            fill = "none"
                            stroke = "currentColor"
                            strokeWidth = "2" >
                            <
                            path d = "M5 13l4 4L19 7"
                            strokeLinecap = "round"
                            strokeLinejoin = "round" / >
                            <
                            /svg>
                            基本功能開發(3 - 5 個核心功能) <
                            /li> <
                            li >
                            <
                            svg viewBox = "0 0 24 24"
                            fill = "none"
                            stroke = "currentColor"
                            strokeWidth = "2" >
                            <
                            path d = "M5 13l4 4L19 7"
                            strokeLinecap = "round"
                            strokeLinejoin = "round" / >
                            <
                            /svg>
                            用戶註冊與登錄系統 <
                            /li> <
                            li >
                            <
                            svg viewBox = "0 0 24 24"
                            fill = "none"
                            stroke = "currentColor"
                            strokeWidth = "2" >
                            <
                            path d = "M5 13l4 4L19 7"
                            strokeLinecap = "round"
                            strokeLinejoin = "round" / >
                            <
                            /svg>
                            簡易管理後台 <
                            /li> <
                            li >
                            <
                            svg viewBox = "0 0 24 24"
                            fill = "none"
                            stroke = "currentColor"
                            strokeWidth = "2" >
                            <
                            path d = "M5 13l4 4L19 7"
                            strokeLinecap = "round"
                            strokeLinejoin = "round" / >
                            <
                            /svg>
                            單平台開發(iOS或Android) <
                            /li> <
                            li >
                            <
                            svg viewBox = "0 0 24 24"
                            fill = "none"
                            stroke = "currentColor"
                            strokeWidth = "2" >
                            <
                            path d = "M5 13l4 4L19 7"
                            strokeLinecap = "round"
                            strokeLinejoin = "round" / >
                            <
                            /svg>
                            基本安全措施與保護 <
                            /li> <
                            li >
                            <
                            svg viewBox = "0 0 24 24"
                            fill = "none"
                            stroke = "currentColor"
                            strokeWidth = "2" >
                            <
                            path d = "M5 13l4 4L19 7"
                            strokeLinecap = "round"
                            strokeLinejoin = "round" / >
                            <
                            /svg>
                            APP商店上架協助 <
                            /li> <
                            li >
                            <
                            svg viewBox = "0 0 24 24"
                            fill = "none"
                            stroke = "currentColor"
                            strokeWidth = "2" >
                            <
                            path d = "M5 13l4 4L19 7"
                            strokeLinecap = "round"
                            strokeLinejoin = "round" / >
                            <
                            /svg>
                            3 個月免費維護支持 <
                            /li> <
                            /ul> <
                            /div> <
                            /div>

                            <
                            div className = "pricing-card highlighted" >
                            <
                            div className = "pricing-tag" > 最受歡迎 < /div> <
                            div className = "pricing-card-header" >
                            <
                            h3 > 專業方案 < /h3> <
                            div className = "pricing-amount" >
                            <
                            span className = "price" > $78, 000 < /span> <
                            span className = "term" > 起 < /span> <
                            /div> <
                            p > 適合中型企業， 提供全面功能與雙平台支持 < /p> <
                            /div> <
                            div className = "pricing-card-content" >
                            <
                            h4 > 包含服務 < /h4> <
                            ul className = "pricing-features" >
                            <
                            li >
                            <
                            svg viewBox = "0 0 24 24"
                            fill = "none"
                            stroke = "currentColor"
                            strokeWidth = "2" >
                            <
                            path d = "M5 13l4 4L19 7"
                            strokeLinecap = "round"
                            strokeLinejoin = "round" / >
                            <
                            /svg>
                            高級UI / UX設計(10 - 15 個界面) <
                            /li> <
                            li >
                            <
                            svg viewBox = "0 0 24 24"
                            fill = "none"
                            stroke = "currentColor"
                            strokeWidth = "2" >
                            <
                            path d = "M5 13l4 4L19 7"
                            strokeLinecap = "round"
                            strokeLinejoin = "round" / >
                            <
                            /svg>
                            全面功能開發(8 - 12 個功能) <
                            /li> <
                            li >
                            <
                            svg viewBox = "0 0 24 24"
                            fill = "none"
                            stroke = "currentColor"
                            strokeWidth = "2" >
                            <
                            path d = "M5 13l4 4L19 7"
                            strokeLinecap = "round"
                            strokeLinejoin = "round" / >
                            <
                            /svg>
                            跨平台開發(iOS和Android) <
                            /li> <
                            li >
                            <
                            svg viewBox = "0 0 24 24"
                            fill = "none"
                            stroke = "currentColor"
                            strokeWidth = "2" >
                            <
                            path d = "M5 13l4 4L19 7"
                            strokeLinecap = "round"
                            strokeLinejoin = "round" / >
                            <
                            /svg>
                            完整後台管理系統 <
                            /li> <
                            li >
                            <
                            svg viewBox = "0 0 24 24"
                            fill = "none"
                            stroke = "currentColor"
                            strokeWidth = "2" >
                            <
                            path d = "M5 13l4 4L19 7"
                            strokeLinecap = "round"
                            strokeLinejoin = "round" / >
                            <
                            /svg>
                            支付系統集成 <
                            /li> <
                            li >
                            <
                            svg viewBox = "0 0 24 24"
                            fill = "none"
                            stroke = "currentColor"
                            strokeWidth = "2" >
                            <
                            path d = "M5 13l4 4L19 7"
                            strokeLinecap = "round"
                            strokeLinejoin = "round" / >
                            <
                            /svg>
                            用戶數據分析與報表 <
                            /li> <
                            li >
                            <
                            svg viewBox = "0 0 24 24"
                            fill = "none"
                            stroke = "currentColor"
                            strokeWidth = "2" >
                            <
                            path d = "M5 13l4 4L19 7"
                            strokeLinecap = "round"
                            strokeLinejoin = "round" / >
                            <
                            /svg>
                            多層次安全防護措施 <
                            /li> <
                            li >
                            <
                            svg viewBox = "0 0 24 24"
                            fill = "none"
                            stroke = "currentColor"
                            strokeWidth = "2" >
                            <
                            path d = "M5 13l4 4L19 7"
                            strokeLinecap = "round"
                            strokeLinejoin = "round" / >
                            <
                            /svg>
                            推送通知功能 <
                            /li> <
                            li >
                            <
                            svg viewBox = "0 0 24 24"
                            fill = "none"
                            stroke = "currentColor"
                            strokeWidth = "2" >
                            <
                            path d = "M5 13l4 4L19 7"
                            strokeLinecap = "round"
                            strokeLinejoin = "round" / >
                            <
                            /svg>
                            6 個月免費維護支持 <
                            /li> <
                            /ul> <
                            /div> <
                            /div>

                            <
                            div className = "pricing-card" >
                            <
                            div className = "pricing-card-header" >
                            <
                            h3 > 企業級方案 < /h3> <
                            div className = "pricing-amount" >
                            <
                            span className = "price" > $128, 000 < /span> <
                            span className = "term" > 起 < /span> <
                            /div> <
                            p > 適合大型企業， 提供高性能與全面定制服務 < /p> <
                            /div> <
                            div className = "pricing-card-content" >
                            <
                            h4 > 包含服務 < /h4> <
                            ul className = "pricing-features" >
                            <
                            li >
                            <
                            svg viewBox = "0 0 24 24"
                            fill = "none"
                            stroke = "currentColor"
                            strokeWidth = "2" >
                            <
                            path d = "M5 13l4 4L19 7"
                            strokeLinecap = "round"
                            strokeLinejoin = "round" / >
                            <
                            /svg>
                            頂級UI / UX設計(無限制界面) <
                            /li> <
                            li >
                            <
                            svg viewBox = "0 0 24 24"
                            fill = "none"
                            stroke = "currentColor"
                            strokeWidth = "2" >
                            <
                            path d = "M5 13l4 4L19 7"
                            strokeLinecap = "round"
                            strokeLinejoin = "round" / >
                            <
                            /svg>
                            全方位功能開發(無限制) <
                            /li> <
                            li >
                            <
                            svg viewBox = "0 0 24 24"
                            fill = "none"
                            stroke = "currentColor"
                            strokeWidth = "2" >
                            <
                            path d = "M5 13l4 4L19 7"
                            strokeLinecap = "round"
                            strokeLinejoin = "round" / >
                            <
                            /svg>
                            跨平台 + 網頁版整合開發 <
                            /li> <
                            li >
                            <
                            svg viewBox = "0 0 24 24"
                            fill = "none"
                            stroke = "currentColor"
                            strokeWidth = "2" >
                            <
                            path d = "M5 13l4 4L19 7"
                            strokeLinecap = "round"
                            strokeLinejoin = "round" / >
                            <
                            /svg>
                            高級後台管理與分析系統 <
                            /li> <
                            li >
                            <
                            svg viewBox = "0 0 24 24"
                            fill = "none"
                            stroke = "currentColor"
                            strokeWidth = "2" >
                            <
                            path d = "M5 13l4 4L19 7"
                            strokeLinecap = "round"
                            strokeLinejoin = "round" / >
                            <
                            /svg>
                            多種支付方式與金流系統 <
                            /li> <
                            li >
                            <
                            svg viewBox = "0 0 24 24"
                            fill = "none"
                            stroke = "currentColor"
                            strokeWidth = "2" >
                            <
                            path d = "M5 13l4 4L19 7"
                            strokeLinecap = "round"
                            strokeLinejoin = "round" / >
                            <
                            /svg>
                            AI智能推薦與個性化 <
                            /li> <
                            li >
                            <
                            svg viewBox = "0 0 24 24"
                            fill = "none"
                            stroke = "currentColor"
                            strokeWidth = "2" >
                            <
                            path d = "M5 13l4 4L19 7"
                            strokeLinecap = "round"
                            strokeLinejoin = "round" / >
                            <
                            /svg>
                            企業級安全防護與認證 <
                            /li> <
                            li >
                            <
                            svg viewBox = "0 0 24 24"
                            fill = "none"
                            stroke = "currentColor"
                            strokeWidth = "2" >
                            <
                            path d = "M5 13l4 4L19 7"
                            strokeLinecap = "round"
                            strokeLinejoin = "round" / >
                            <
                            /svg>
                            第三方系統API整合 <
                            /li> <
                            li >
                            <
                            svg viewBox = "0 0 24 24"
                            fill = "none"
                            stroke = "currentColor"
                            strokeWidth = "2" >
                            <
                            path d = "M5 13l4 4L19 7"
                            strokeLinecap = "round"
                            strokeLinejoin = "round" / >
                            <
                            /svg>
                            線上客服與聊天功能 <
                            /li> <
                            li >
                            <
                            svg viewBox = "0 0 24 24"
                            fill = "none"
                            stroke = "currentColor"
                            strokeWidth = "2" >
                            <
                            path d = "M5 13l4 4L19 7"
                            strokeLinecap = "round"
                            strokeLinejoin = "round" / >
                            <
                            /svg>
                            12 個月免費維護支持 <
                            /li> <
                            /ul> <
                            /div> <
                            /div> <
                            /div>
                        ) : ( <
                            div className = "pricing-cards-container" > {
                                industryPricingCards.map((card, index) => ( <
                                        div key = {
                                            index
                                        }
                                        className = {
                                            `pricing-card ${card.highlighted ? 'highlighted' : ''}`
                                        } > {
                                            card.highlighted && < div className = "pricing-tag" > 最受歡迎 < /div>} <
                                            div className = "pricing-card-header" >
                                            <
                                            div className = "industry-icon" > {
                                                card.icon
                                            } < /div> <
                                            h3 > {
                                                card.title
                                            } < /h3> <
                                            div className = "pricing-amount" >
                                            <
                                            span className = "price" > $ {
                                                card.price
                                            } < /span> <
                                            span className = "term" > 起 < /span> <
                                            /div> <
                                            p > {
                                                card.description
                                            } < /p> <
                                            /div> <
                                            div className = "pricing-card-content" >
                                            <
                                            h4 > 包含服務 < /h4> <
                                            ul className = "pricing-features" > {
                                                card.features.map((feature, fidx) => ( <
                                                    li key = {
                                                        fidx
                                                    } >
                                                    <
                                                    svg viewBox = "0 0 24 24"
                                                    fill = "none"
                                                    stroke = "currentColor"
                                                    strokeWidth = "2" >
                                                    <
                                                    path d = "M5 13l4 4L19 7"
                                                    strokeLinecap = "round"
                                                    strokeLinejoin = "round" / >
                                                    <
                                                    /svg> {
                                                        feature
                                                    } <
                                                    /li>
                                                ))
                                            } <
                                            /ul> <
                                            /div> <
                                            /div>
                                        ))
                                } <
                                /div>
                            )
                        }

                        { /* 移動應用開發價格表 */ } <
                        div className = "mobile-app-pricing-table" >
                            <
                            h3 > APP開發參考價格 < /h3> <
                            div className = "table-responsive" >
                            <
                            table className = "pricing-table" >
                            <
                            thead >
                            <
                            tr >
                            <
                            th > 專案類型 < /th> <
                            th > 價格範圍(HKD) < /th> <
                            th > 開發時間 < /th> <
                            th > 備註 < /th> <
                            /tr> <
                            /thead> <
                            tbody >
                            <
                            tr >
                            <
                            td > 基本應用(單平台) < /td> <
                            td > $80, 000 - $150, 000 < /td> <
                            td > 8 - 12 週 < /td> <
                            td > 簡單功能， 基本UI < /td> <
                            /tr> <
                            tr >
                            <
                            td > 中型應用(單平台) < /td> <
                            td > $150, 000 - $300, 000 < /td> <
                            td > 12 - 20 週 < /td> <
                            td > 中等複雜度， 自定義UI < /td> <
                            /tr> <
                            tr >
                            <
                            td > 跨平台應用 < /td> <
                            td > $200, 000 - $500, 000 + < /td> <
                            td > 16 - 30 週 < /td> <
                            td > iOS & Android， 完整功能 < /td> <
                            /tr> <
                            tr >
                            <
                            td > 企業級應用 < /td> <
                            td > $300, 000 - $800, 000 + < /td> <
                            td > 20 - 40 週 < /td> <
                            td > 高安全性， 複雜後端整合 < /td> <
                            /tr> <
                            /tbody> <
                            /table> <
                            /div> <
                            /div>

                            <
                            div className = "tech-solutions-container" >
                            <
                            h3 > 我們擅長的技術領域 < /h3> <
                            div className = "tech-solutions-grid" >
                            <
                            div className = "tech-solution-item" >
                            <
                            svg viewBox = "0 0 24 24"
                        fill = "none"
                        stroke = "currentColor"
                        strokeWidth = "2" >
                            <
                            path d = "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        strokeLinecap = "round"
                        strokeLinejoin = "round" / >
                            <
                            /svg> <
                            span > 企業ERP系統 < /span> <
                            /div> <
                            div className = "tech-solution-item" >
                            <
                            svg viewBox = "0 0 24 24"
                        fill = "none"
                        stroke = "currentColor"
                        strokeWidth = "2" >
                            <
                            path d = "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        strokeLinecap = "round"
                        strokeLinejoin = "round" / >
                            <
                            /svg> <
                            span > 電商系統開發 < /span> <
                            /div> <
                            div className = "tech-solution-item" >
                            <
                            svg viewBox = "0 0 24 24"
                        fill = "none"
                        stroke = "currentColor"
                        strokeWidth = "2" >
                            <
                            path d = "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        strokeLinecap = "round"
                        strokeLinejoin = "round" / >
                            <
                            /svg> <
                            span > 支付系統集成 < /span> <
                            /div> <
                            div className = "tech-solution-item" >
                            <
                            svg viewBox = "0 0 24 24"
                        fill = "none"
                        stroke = "currentColor"
                        strokeWidth = "2" >
                            <
                            path d = "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        strokeLinecap = "round"
                        strokeLinejoin = "round" / >
                            <
                            /svg> <
                            span > 即時通訊應用 < /span> <
                            /div> <
                            div className = "tech-solution-item" >
                            <
                            svg viewBox = "0 0 24 24"
                        fill = "none"
                        stroke = "currentColor"
                        strokeWidth = "2" >
                            <
                            path d = "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        strokeLinecap = "round"
                        strokeLinejoin = "round" / >
                            <
                            /svg> <
                            span > 網絡安全方案 < /span> <
                            /div> <
                            div className = "tech-solution-item" >
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
                            span > 搜索引擎開發 < /span> <
                            /div> <
                            div className = "tech-solution-item" >
                            <
                            svg viewBox = "0 0 24 24"
                        fill = "none"
                        stroke = "currentColor"
                        strokeWidth = "2" >
                            <
                            path d = "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                        strokeLinecap = "round"
                        strokeLinejoin = "round" / >
                            <
                            /svg> <
                            span > 數據庫設計 < /span> <
                            /div> <
                            div className = "tech-solution-item" >
                            <
                            svg viewBox = "0 0 24 24"
                        fill = "none"
                        stroke = "currentColor"
                        strokeWidth = "2" >
                            <
                            path d = "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        strokeLinecap = "round"
                        strokeLinejoin = "round" / >
                            <
                            /svg> <
                            span > 數據分析平台 < /span> <
                            /div> <
                            /div> <
                            /div>

                            <
                            div className = "pricing-note" >
                            <
                            p > ※實際價格將根據您的具體需求和功能複雜度進行調整， 請與我們聯繫獲取精準報價 < /p> <
                            button className = "contact-quote-button"
                        onClick = {
                                handleContact
                            } >
                            <
                            svg viewBox = "0 0 24 24"
                        fill = "none"
                        stroke = "currentColor"
                        strokeWidth = "2" >
                            <
                            path d = "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        strokeLinecap = "round"
                        strokeLinejoin = "round" / >
                            <
                            /svg>
                        獲取專屬報價
                            <
                            /button> <
                            /div> <
                            /div> <
                            /div>
                    );
                };

                export default AppPage;