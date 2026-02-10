import React, {
    useState
} from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";
import ContactPage from "./pages/ContactPage.js";
import SystemPage from "./pages/SystemPage.js";
import WebPage from "./pages/WebPage.js";
import AppPage from "./pages/AppPage.js";
import SeoSemPage from "./pages/SeoSemPage.js";
import {
    FormProvider
} from "./FormContext";
import Slider from "./component/slider/Slider.js";
import ServiceSection from "./component/ServiceSection";
import CaseSection from "./component/CaseSection";
import NavBar from "./component/NavBar";
import WtsButton from "./component/WtsButton.js";
import QuotationButton from "./component/QuotationButton.js";
import ScrollToTop from './component/ScrollToTop';
import AboutPage from "./pages/AboutPage";
import Footer from "./component/Footer";
import "./App.css";

const App = () => {
        const slides = [{
                id: 1,
                url: "/images/silder1.jpeg",
                title: "專業網頁設計服務",
                subtitle: "為您打造獨特品牌形象，低至 $2,800 起",
                description: "響應式設計 | UI/UX優化 | 品牌定制",
            },
            {
                id: 2,
                url: "/images/silder2.jpeg",
                title: "定制化手機應用開發",
                subtitle: "iOS 及 Android 全平台支援，低至 $48,000起",
                description: "雙平台兼容 | 雲端同步 | 專人技術支援",
            },
            {
                id: 3,
                url: "/images/silder3.jpeg",
                title: "企業系統開發",
                subtitle: "為您的企業提供完整技術解決方案，定制方案 $60,000 起",
                description: "ERP系統 | CRM客戶管理 | 數據分析",
            }
        ];

        const services = [{
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    className = "service-icon"
                    fill = "none"
                    stroke = "currentColor" >
                    <
                    path d = "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                    strokeWidth = "1.5" /
                    >
                    <
                    circle cx = "12"
                    cy = "12"
                    r = "1"
                    fill = "currentColor" / >
                    <
                    /svg>
                ),
                title: "網站開發專家",
                description: "量身打造高效網頁，確保用戶體驗與業務目標完美結合",
            },
            {
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    className = "service-icon"
                    fill = "none"
                    stroke = "currentColor" >
                    <
                    rect x = "3"
                    y = "3"
                    width = "18"
                    height = "18"
                    rx = "2" / >
                    <
                    path d = "M7 8h10M7 12h10M7 16h10" / >
                    <
                    /svg>
                ),
                title: "App創新團隊",
                description: "跨平台應用開發，實現您的創意從構思到上線",
            },
            {
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    className = "service-icon"
                    fill = "none"
                    stroke = "currentColor" >
                    <
                    circle cx = "12"
                    cy = "12"
                    r = "10" / >
                    <
                    path d = "M12 16l4-4-4-4" / >
                    <
                    /svg>
                ),
                title: "系統整合能手",
                description: "定制企業管理系統，優化工作流程提升營運效率",
            },
            {
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    className = "service-icon"
                    fill = "none"
                    stroke = "currentColor" >
                    <
                    path d = "M12 5v14M5 12h14" / >
                    <
                    /svg>
                ),
                title: "精準行銷策略",
                description: "廣告規劃與執行，確保投放精準，效果倍增",
            },
            {
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    className = "service-icon"
                    fill = "none"
                    stroke = "currentColor" >
                    <
                    path d = "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" / >
                    <
                    /svg>
                ),
                title: "智能化未來",
                description: "AI驅動自動化系統，為您的業務注入未來競爭力",
            },
            {
                icon: ( <
                    svg viewBox = "0 0 24 24"
                    className = "service-icon"
                    fill = "none"
                    stroke = "currentColor" >
                    <
                    rect x = "3"
                    y = "3"
                    width = "18"
                    height = "18"
                    rx = "2"
                    ry = "2" / >
                    <
                    path d = "M8 12h8" / >
                    <
                    /svg>
                ),
                title: "持續優化承諾",
                description: "定期維護更新，讓您的數碼資產持續增值",
            },
        ];

        // 修改案例數據，根據您的圖片分類
        const cases = [{
                title: "醫療網站",
                category: "網頁開發",
                logo: "/images/web1.png",
                image: "/images/web1.png",
                // description: "響應式購物體驗，優化轉化路徑",
            },
            {
                title: "產品銷售網站",
                category: "網頁開發",
                logo: "/images/web2.png",
                image: "/images/web2.png",
                // description: "現代品牌展示，突顯企業核心價值",
            },
            {
                title: "言語治療網站",
                category: "網頁開發",
                logo: "/images/web3.png",
                image: "/images/web3.png",
                // description: "高轉化率設計，提升產品魅力",
            },
            {
                title: "會計服務網站",
                category: "網頁開發",
                logo: "/images/web5.png",
                image: "/images/web5.png",
                // description: "用戶管理與互動，增強客戶黏性",
            },
            {
                title: "場地預訂網站",
                category: "網頁開發",
                logo: "/images/web6.png",
                image: "/images/web6.png",
                // description: "用戶管理與互動，增強客戶黏性",
            },
            {
                title: "電子商務網站",
                category: "網頁開發",
                logo: "/images/web7.png",
                image: "/images/web7.png",
                // description: "用戶管理與互動，增強客戶黏性",
            },


            {
                title: "網店app ",
                category: "程式開發",
                logo: "/images/app1.jpeg",
                image: "/images/app1.jpeg",
                // description: "個人健康數據管理與分析",
            },
            {
                title: "健康app",
                category: "程式開發",
                logo: "/images/app2.jpeg",
                image: "/images/app2.jpeg",
                // description: "便捷的線上點餐與外送服務",
            },
            {
                title: "網店app",
                category: "程式開發",
                logo: "/images/app3.jpeg",
                image: "/images/app3.jpeg",
                // description: "便捷的線上點餐與外送服務",
            },
            {
                title: "網店app",
                category: "程式開發",
                logo: "/images/app4.jpeg",
                image: "/images/app4.jpeg",
                // description: "便捷的線上點餐與外送服務",
            },
            {
                title: "ERP管理系統",
                category: "系統開發",
                logo: "/images/system1.jpeg",
                image: "/images/system1.jpeg",
                // description: "企業資源整合與流程優化",
            },
            {
                title: "POS系統",
                category: "系統開發",
                logo: "/images/system2.jpeg",
                image: "/images/system2.jpeg",
                // description: "客戶關係管理與業務跟進",
            },
            {
                title: "POS系統",
                category: "系統開發",
                logo: "/images/system3.jpeg",
                image: "/images/system3.jpeg",
                // description: "智能庫存控制與補貨預警",
            },
            {
                title: "CRM系統",
                category: "系統開發",
                logo: "/images/system4.jpeg",
                image: "/images/system4.jpeg",
                // description: "商業智能與數據可視化",
            },
        ];

        const HomePage = () => ( <
            >
            <
            Slider slides = {
                slides
            }
            /> <
            ServiceSection services = {
                services
            }
            /> <
            CaseSection cases = {
                cases
            }
            /> <
            />
        );

        return ( <
                FormProvider >
                <
                Router >
                <
                div className = "main-container" >
                <
                NavBar / >
                <
                ScrollToTop / >
                <
                Routes >
                <
                Route path = "/"
                element = { < HomePage / >
                }
                /> <
                Route path = "/system"
                element = { < SystemPage / >
                }
                /> <
                Route path = "/web"
                element = { < WebPage / >
                }
                /> <
                Route path = "/app"
                element = { < AppPage / >
                }
                /> <
                Route path = "/seo"
                element = { < SeoSemPage / >
                }
                /> <
                Route path = "/partners"
                element = { < div > 合作夥伴頁面 < /div>} / >
                    <
                    Route path = "/news"
                    element = { < div > 最新資訊頁面 < /div>} / >
                        <
                        Route path = "/contact"
                        element = { < ContactPage / >
                        }
                        /> <
                        Route path = "/about"
                        element = { < AboutPage / >
                        }
                        /> <
                        /Routes>

                        <
                        WtsButton / >
                        <
                        QuotationButton / >
                        <
                        Footer / >
                        <
                        /div> <
                        /Router> <
                        /FormProvider>
                    );
                };

                export default App;