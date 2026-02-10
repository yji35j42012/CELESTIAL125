import React, {
    useState
} from 'react';
import '../component/css/WebPage.css';
import {
    useNavigate
} from 'react-router-dom';
import Banner from '../component/Banner';

const WebPage = () => {
        const [activeTab, setActiveTab] = useState('packages'); // 'packages' 或 'industry'

        const webDevProcessSteps = [{
                title: "需求分析",
                description: "深入了解客戶的業務模式、目標受眾和網站需求",
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" / >
                    <
                    /svg>
                )
            },
            {
                title: "界面設計",
                description: "根據品牌形象創建獨特、吸引人的視覺設計",
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" / >
                    <
                    /svg>
                )
            },
            {
                title: "前端開發",
                description: "將設計轉化為響應式網頁，確保良好的用戶體驗",
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" / >
                    <
                    /svg>
                )
            },
            {
                title: "後端整合",
                description: "開發功能性組件，如表單、數據庫和內容管理系統",
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" / >
                    <
                    /svg>
                )
            },
            {
                title: "測試優化",
                description: "確保網站在各種設備和瀏覽器上的兼容性和性能",
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" / >
                    <
                    /svg>
                )
            },
            {
                title: "上線維護",
                description: "部署網站並提供持續的技術支持和維護服務",
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" / >
                    <
                    /svg>
                )
            }
        ];

        const benefits = [{
                title: "提升品牌形象",
                description: "專業的網站設計能夠建立信任感，提升品牌價值",
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" / >
                    <
                    /svg>
                )
            },
            {
                title: "吸引更多客戶",
                description: "優化的網站能夠吸引更多潛在客戶並提高轉化率",
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" / >
                    <
                    /svg>
                )
            },
            {
                title: "增強用戶體驗",
                description: "直觀的界面設計能提高用戶滿意度和網站停留時間",
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" / >
                    <
                    /svg>
                )
            },
            {
                title: "提升搜索排名",
                description: "SEO優化的網站在搜索引擎中獲得更高的曝光率",
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = "2" >
                    <
                    path d = "M13 10V3L4 14h7v7l9-11h-7z" / >
                    <
                    /svg>
                )
            }
        ];

        // 整合後的服務套餐
        const integratedPackages = [{
                name: "初創方案",
                price: "$5888 起",
                description: "適合初創企業和小型網店，快速建立線上形象",
                includes: [
                    "基本響應式網站 (1-5頁)",
                    "域名註冊 1年 (.com/.hk)",
                    "基本託管方案 1年",
                    "SSL證書安裝",
                    "基本SEO優化",
                    "簡易內容管理系統",
                    "Google Analytics整合",
                    "聯絡表單設置"
                ],
                features: {
                    development: "使用現成模板，快速建站",
                    design: "基本UI設計，無UX規劃",
                    uniqueness: "低度客製化",
                    seo: "基礎搜尋引擎優化",
                    maintenance: "基本技術支援 (1個月)",
                    updates: "上線後可修改1次"
                },
                suitableFor: "小型網店、初創企業、個人品牌"
            },
            {
                name: "WordPress 基礎方案",
                price: "HK$2,800 起",
                description: "適合初創企業與個人，快速建立專業網站",
                includes: [
                    "專業響應式網站 (3頁)",
                    "支援一種語言 (額外語言每種 +30%)",
                    "提供1000+高級主題客化製作",
                    "支援響應式網頁設計（手機、平板和電腦適用）",
                    "內置後台 / 內容管理系統（CMS）",
                    "支援動態橫額",
                    "包括基本SEO頁面關鍵字設定",
                    "社交媒體按鈕連結",
                    "Google地圖整合及連結",
                    "建立索引及提交Google搜尋引擎",
                    "包括免授權圖片",
                    "免費首年 .com 域名註冊費",
                    "免費首年 SSL 網站安全認證",
                    "國際雲端網站寄存服務 50% 折扣"
                ],
                features: {
                    development: "WordPress專業開發，快速部署",
                    design: "精選專業主題設計",
                    uniqueness: "基本客製化，符合品牌形象",
                    seo: "基礎SEO優化設置",
                    maintenance: "技術支持與維護 (三個月)",
                    // updates: "上線後可修改2次內容更新"
                },
                suitableFor: "初創企業、個人專業人士、小型企業、freelancer"
            },
            {
                name: "商業方案",
                price: "$18,000 起",
                description: "適合中小型企業，建立專業形象與營銷工具",
                includes: [
                    "專業響應式網站 (10-15頁)",
                    "域名註冊 1年 (.com/.hk)",
                    "企業託管方案 1年",
                    "SSL證書安裝",
                    "Google Workspace基本設置",
                    "內容管理系統",
                    "跨裝置測試優化",
                    "多語言支持 (2種語言)",
                    "社交媒體整合",
                    "進階SEO優化"
                ],
                features: {
                    development: "客製化開發，視覺與功能兼具",
                    design: "專業UI/UX設計",
                    uniqueness: "中度客製化，突顯企業特色",
                    seo: "完整SEO策略",
                    maintenance: "技術支持與維護 (六個月)",
                    updates: "上線後可修改3次內容更新"
                },
                suitableFor: "中小型企業、專業服務公司、地區商家"
            }
        ];

        // 行業特定方案
        const industryPackages = [{
                name: "餐廳網站方案",
                price: "$18,000 起",
                description: "專為餐飲業設計，展示菜單並接收訂位",
                features: [
                    "專業食品攝影展示",
                    "線上菜單系統",
                    "訂位/外賣訂購功能",
                    "餐廳位置地圖整合",
                    "餐廳活動頁面",
                    "顧客評價展示",
                    "與外賣平台連結",
                    "社交媒體整合"
                ]
            },
            {
                name: "電子商務方案",
                price: "$38,000 起",
                description: "專業網店解決方案，高轉化率設計",
                features: [
                    "產品目錄系統",
                    "購物車與結帳功能",
                    "多種支付方式整合",
                    "庫存管理系統",
                    "顧客帳戶功能",
                    "產品評價系統",
                    "行動裝置最佳化購物體驗",
                    "訂單追蹤系統"
                ]
            },
            {
                name: "專業服務方案",
                price: "$25,000 起",
                description: "適合律師、醫生等專業服務提供者",
                features: [
                    "專業形象建立",
                    "服務詳情頁面",
                    "專業資格與認證展示",
                    "案例研究/客戶見證",
                    "預約系統整合",
                    "專業文章發布系統",
                    "安全客戶資料保護",
                    "FAQ與知識庫"
                ]
            },
            {
                name: "教育機構方案",
                price: "$32,000 起",
                description: "適合學校、補習社等教育機構",
                features: [
                    "課程與活動日曆",
                    "教師/導師簡介",
                    "學生作品展示",
                    "線上報名系統",
                    "學校新聞發布",
                    "校園虛擬導覽",
                    "家長/學生入口",
                    "內部通訊整合"
                ]
            }
        ];

        const navigate = useNavigate();

        const handleContactSales = () => {
            navigate("/contact", {
                replace: true
            });
        };

        const handleDemo = () => {
            navigate("news");
        };

        return ( <
            div className = "webpage-container" >
            <
            Banner title = "網站開發"
            description = "融合創意設計與前沿技術，打造引人入勝的網站體驗。從企業官網、電子商務到會員系統，每一個項目皆精心量身定制，確保完美呈現品牌形象與核心價值。採用響應式設計實現跨裝置自適應，配合SEO優化、多語言支持與全球化部署，讓您的網站不僅美觀實用，更能有效吸引目標客群並促進業務增長。"
            image = "/images/webBanner.jpeg"
            onLearnMore = {
                handleContactSales
            }
            />

            { /* 服務介紹 */ } <
            div className = "webpage-section service-intro-section compact" >
            <
            h2 className = "section-title" > 網頁定制服務 < /h2>

            <
            div className = "webpage-content compact" >
            <
            div className = "content-image compact" > { /* 替換為真實照片 */ } <
            img src = "/images/imac-website-display.jpg"
            alt = "專業網站開發展示"
            className = "real-device-photo" /
            >
            <
            /div>

            <
            div className = "content-text compact" >
            <
            div className = "features-compact" >
            <
            div className = "feature-column" >
            <
            div className = "feature-card" >
            <
            h3 > 專屬客製化方案 < /h3> <
            p > 根據您企業的獨特定位與目標客群， 打造完美契合業務需求的專屬網站， 提升品牌識別度。 < /p> <
            /div>

            <
            div className = "feature-card" >
            <
            h3 > 彈性開發流程與成本控制 < /h3> <
            p > 專屬項目經理一對一全程跟進， 開發過程靈活調整， 確保項目進度、 預算與成效達到最佳平衡點。 < /p> <
            /div> <
            /div>

            <
            div className = "feature-column" >
            <
            div className = "feature-card performance-card" >
            <
            h3 > 卓越性能與極致體驗 < /h3> <
            ul className = "feature-list-compact" >
            <
            li > < span className = "feature-highlight" > 速度優化 < /span>：確保網站迅速載入</li >
            <
            li > < span className = "feature-highlight" > 安全加固 < /span>：全方位的安全防護</li >
            <
            li > < span className = "feature-highlight" > 用戶導向 < /span>：貼合目標受眾使用習慣</li >
            <
            li > < span className = "feature-highlight" > 直覺操作 < /span>：簡潔明了的界面設計</li >
            <
            li > < span className = "feature-highlight" > 建立信任 < /span>：專業視覺呈現與流暢體驗</li >
            <
            /ul> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div>

            { /* 網站開發流程 - 橫向流程條 */ } <
            div className = "webpage-section process-section" >
            <
            h2 className = "section-title" > 我們的網站開發流程 < /h2> <
            div className = "process-flow-container" > {
                webDevProcessSteps.map((step, index) => ( <
                    div key = {
                        index
                    }
                    className = "process-flow-step" >
                    <
                    div className = "process-flow-icon" > {
                        step.icon
                    } < /div> <
                    h3 > {
                        step.title
                    } < /h3> <
                    p > {
                        step.description
                    } < /p> {
                        index < webDevProcessSteps.length - 1 && ( <
                            div className = "process-flow-arrow" >
                            <
                            svg viewBox = "0 0 24 24"
                            fill = "none"
                            stroke = "currentColor" >
                            <
                            path d = "M5 12h14M12 5l7 7-7 7"
                            strokeWidth = "2"
                            strokeLinecap = "round"
                            strokeLinejoin = "round" / >
                            <
                            /svg> <
                            /div>
                        )
                    } <
                    /div>
                ))
            } <
            /div> <
            /div>

            { /* 網站優勢 */ } <
            div className = "webpage-section benefits-section" >
            <
            h2 className = "section-title" > 專業網站為您帶來的優勢 < /h2> <
            div className = "benefits-container" > {
                benefits.map((benefit, index) => ( <
                    div key = {
                        index
                    }
                    className = "benefit-card" >
                    <
                    div className = "benefit-icon" > {
                        benefit.icon
                    } < /div> <
                    h3 > {
                        benefit.title
                    } < /h3> <
                    p > {
                        benefit.description
                    } < /p> <
                    /div>
                ))
            } <
            /div> <
            /div>

            { /* 一對一服務 */ } <
            div className = "webpage-section service-approach" >
            <
            h2 className = "section-title" > 我們的一對一服務方式 < /h2> <
            div className = "approach-container" >
            <
            div className = "approach-content" >
            <
            div className = "approach-item" >
            <
            h3 > 專屬項目經理全程跟進 < /h3> <
            p > 從需求討論到網站上線， 專屬項目經理全程一對一服務， 隨時解答疑問 < /p> <
            /div>

            <
            div className = "approach-item" >
            <
            h3 > 定期進度匯報與反饋 < /h3> <
            p > 開發過程中定期匯報進度， 及時根據您的反饋進行調整， 確保最終成果符合期望 < /p> <
            /div>

            <
            div className = "approach-item" >
            <
            h3 > 上線後持續支持 < /h3> <
            p > 網站上線後提供技術支持和維護服務， 確保網站穩定運行並不斷優化 < /p> <
            /div> <
            /div>

            <
            div className = "approach-image" > { /* 替換為真實照片 */ } <
            img src = "/images/one-on-one-consultation.jpg"
            alt = "專屬項目經理一對一服務"
            className = "service-real-photo" /
            >
            <
            /div> <
            /div> <
            /div>

            { /* 整合後的價格方案區塊 */ } <
            div className = "webpage-section pricing-section" >
            <
            h2 className = "section-title" > 網站開發服務方案 < /h2>

            { /* 標籤切換 */ } <
            div className = "pricing-tabs" >
            <
            button className = {
                `tab-button ${activeTab === 'packages' ? 'active' : ''}`
            }
            onClick = {
                () => setActiveTab('packages')
            } >
            按規模選擇 <
            /button> <
            button className = {
                `tab-button ${activeTab === 'industry' ? 'active' : ''}`
            }
            onClick = {
                () => setActiveTab('industry')
            } >
            按行業選擇 <
            /button> <
            /div>

            { /* 按規模的服務套餐 */ } {
                activeTab === 'packages' && ( <
                    div className = "integrated-packages" >
                    <
                    div className = "packages-container" > {
                        integratedPackages.map((pkg, index) => ( <
                                div key = {
                                    index
                                }
                                className = {
                                    `package-card ${index === 1 ? 'featured' : ''}`
                                } > {
                                    index === 1 && < div className = "featured-badge" > 最受歡迎 < /div>} <
                                    h3 className = "package-name" > {
                                        pkg.name
                                    } < /h3> <
                                    div className = "package-price" > {
                                        pkg.price
                                    } < /div> <
                                    p className = "package-description" > {
                                        pkg.description
                                    } < /p>

                                    <
                                    h4 > 包含服務 < /h4> <
                                    ul className = "package-includes" > {
                                        pkg.includes.map((item, i) => ( <
                                            li key = {
                                                i
                                            } > {
                                                item
                                            } < /li>
                                        ))
                                    } <
                                    /ul>

                                    <
                                    h4 > 方案特點 < /h4> <
                                    table className = "package-features" >
                                    <
                                    tbody >
                                    <
                                    tr >
                                    <
                                    td > 開發方式 < /td> <
                                    td > {
                                        pkg.features.development
                                    } < /td> <
                                    /tr> <
                                    tr >
                                    <
                                    td > 設計水平 < /td> <
                                    td > {
                                        pkg.features.design
                                    } < /td> <
                                    /tr> <
                                    tr >
                                    <
                                    td > 獨特性 < /td> <
                                    td > {
                                        pkg.features.uniqueness
                                    } < /td> <
                                    /tr> <
                                    tr >
                                    <
                                    td > SEO優化 < /td> <
                                    td > {
                                        pkg.features.seo
                                    } < /td> <
                                    /tr> <
                                    tr >
                                    <
                                    td > 維護支援 < /td> <
                                    td > {
                                        pkg.features.maintenance
                                    } < /td> <
                                    /tr> <
                                    tr >
                                    <
                                    td > 內容更新 < /td> <
                                    td > {
                                        pkg.features.updates
                                    } < /td> <
                                    /tr> <
                                    /tbody> <
                                    /table>

                                    <
                                    div className = "package-suitable-for" >
                                    <
                                    h4 > 適合對象 < /h4> <
                                    p > {
                                        pkg.suitableFor
                                    } < /p> <
                                    /div>

                                    <
                                    button className = "package-cta"
                                    onClick = {
                                        handleContactSales
                                    } >
                                    立即諮詢 <
                                    /button> <
                                    /div>
                                ))
                        } <
                        /div> <
                        /div>
                    )
                }

                { /* 按行業的服務套餐 */ } {
                    activeTab === 'industry' && ( <
                        div className = "industry-packages" >
                        <
                        p className = "industry-intro" > 我們針對不同行業的特殊需求， 提供專業的網站解決方案。 每個行業方案都包含域名註冊、 網站託管、 SSL證書和基本SEO優化， 並針對行業特性增加專屬功能。 < /p>

                        <
                        div className = "industry-packages-grid" > {
                            industryPackages.map((pkg, index) => ( <
                                div key = {
                                    index
                                }
                                className = "industry-package-card" >
                                <
                                h3 > {
                                    pkg.name
                                } < /h3> <
                                div className = "industry-price" > {
                                    pkg.price
                                } < /div> <
                                p className = "industry-description" > {
                                    pkg.description
                                } < /p>

                                <
                                h4 > 專屬功能 < /h4> <
                                ul className = "industry-features" > {
                                    pkg.features.map((feature, i) => ( <
                                        li key = {
                                            i
                                        } > {
                                            feature
                                        } < /li>
                                    ))
                                } <
                                /ul>

                                <
                                button className = "industry-cta"
                                onClick = {
                                    handleContactSales
                                } >
                                獲取詳情 <
                                /button> <
                                /div>
                            ))
                        } <
                        /div>

                        <
                        div className = "custom-industry-note" >
                        <
                        h3 > 找不到適合您行業的方案？ < /h3> <
                        p > 我們可為任何行業定制專屬網站方案， 立即聯繫我們討論您的獨特需求。 < /p> <
                        button className = "custom-industry-cta"
                        onClick = {
                            handleContactSales
                        } >
                        定制行業方案 <
                        /button> <
                        /div> <
                        /div>
                    )
                }

                <
                div className = "pricing-notes" >
                    <
                    p > * 所有方案均可根據您的實際需求進行客製化調整 < /p> <
                    p > * 所有網站方案均包含響應式設計， 在手機、 平板和電腦上均有最佳顯示效果 < /p> <
                    p > * 價格可能因功能複雜度和需求變更而調整 < /p> <
                    /div> <
                    /div> <
                    /div>
            );
        };

        export default WebPage;