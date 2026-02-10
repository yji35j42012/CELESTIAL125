import React from 'react';
import '../component/css/AboutPage.css';
import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaVuejs,
    FaAngular,
    FaNodeJs,
    FaPython,
    FaJava,
    FaAws,
    FaGoogle,
    FaMicrosoft
} from 'react-icons/fa';
import {
    SiTypescript,
    SiMongodb,
    SiPostgresql,
    SiMysql,
    SiFirebase
} from 'react-icons/si';
import Banner from '../component/Banner';

const AboutPage = () => {

    return ( <
        div className = "about-page-container"
        style = {
            {
                minHeight: '100vh'
            }
        } >
        <
        Banner title = "關於我們"
        description = "致力於科技創新與數位轉型的專業團隊，集結多年產業經驗，為企業提供前瞻性解決方案。我們不只是服務供應商，更是您值得信賴的長期合作夥伴，助您在瞬息萬變的數位時代保持競爭優勢。"
        image = "/images/aboutBanner.jpeg" /
        >

        { /* 公司簡介 */ } <
        div className = "about-section company-intro" >
        <
        div className = "section-content" >
        <
        h2 > 公司簡介 < /h2> <
        p className = "intro-text" >
        我們是一家充滿活力的科技初創公司， 專注於為企業提供創新的數位解決方案。 雖然我們是初創公司， 但我們的團隊擁有豐富的行業經驗和專業知識， 致力於為客戶提供高品質的網站開發、 移動應用程式和系統整合服務。 <
        /p> <
        div className = "company-stats" >
        <
        div className = "stat-item" >
        <
        h3 > 3 + < /h3> <
        p > 年行業經驗 < /p> <
        /div> <
        div className = "stat-item" >
        <
        h3 > 20 + < /h3> <
        p > 成功案例 < /p> <
        /div> <
        div className = "stat-item" >
        <
        h3 > 5 + < /h3> <
        p > 專業團隊 < /p> <
        /div> <
        /div> <
        /div> <
        /div>

        { /* 核心價值 */ } <
        div className = "about-section core-values" >
        <
        div className = "section-content" >
        <
        h2 > 核心價值 < /h2> <
        div className = "values-grid" >
        <
        div className = "value-item" >
        <
        div className = "value-icon" >
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
        h3 > 專業品質 < /h3> <
        p > 堅持高標準的開發規範， 確保每個項目都能達到最佳品質 < /p> <
        /div> <
        div className = "value-item" >
        <
        div className = "value-icon" >
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
        h3 > 創新思維 < /h3> <
        p > 持續追求技術創新， 為客戶帶來具有競爭力的解決方案 < /p> <
        /div> <
        div className = "value-item" >
        <
        div className = "value-icon" >
        <
        svg viewBox = "0 0 24 24"
        fill = "none"
        stroke = "currentColor"
        strokeWidth = "2" >
        <
        path d = "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        strokeLinecap = "round"
        strokeLinejoin = "round" / >
        <
        /svg> <
        /div> <
        h3 > 用戶至上 < /h3> <
        p > 以用戶需求為核心， 打造直觀且高效的數位體驗 < /p> <
        /div> <
        div className = "value-item" >
        <
        div className = "value-icon" >
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
        h3 > 持續成長 < /h3> <
        p > 不斷學習和進步， 為客戶提供最新的技術解決方案 < /p> <
        /div> <
        /div> <
        /div> <
        /div>

        { /* 技術支持 */ } <
        div className = "about-section tech-support" >
        <
        div className = "section-content" >
        <
        h2 > 技術支持 < /h2> <
        div className = "tech-grid" >
        <
        div className = "tech-category" >
        <
        h3 > 前端技術 < /h3> <
        div className = "tech-icons" >
        <
        FaHtml5 className = "tech-icon html"
        title = "HTML5" / >
        <
        FaCss3Alt className = "tech-icon css"
        title = "CSS3" / >
        <
        FaReact className = "tech-icon react"
        title = "React" / >
        <
        FaVuejs className = "tech-icon vue"
        title = "Vue.js" / >
        <
        FaAngular className = "tech-icon angular"
        title = "Angular" / >
        <
        SiTypescript className = "tech-icon typescript"
        title = "TypeScript" / >
        <
        /div> <
        /div> <
        div className = "tech-category" >
        <
        h3 > 後端技術 < /h3> <
        div className = "tech-icons" >
        <
        FaNodeJs className = "tech-icon nodejs"
        title = "Node.js" / >
        <
        FaPython className = "tech-icon python"
        title = "Python" / >
        <
        FaJava className = "tech-icon java"
        title = "Java" / >
        <
        /div> <
        /div> <
        div className = "tech-category" >
        <
        h3 > 數據庫 < /h3> <
        div className = "tech-icons" >
        <
        SiMongodb className = "tech-icon mongodb"
        title = "MongoDB" / >
        <
        SiPostgresql className = "tech-icon postgresql"
        title = "PostgreSQL" / >
        <
        SiMysql className = "tech-icon mysql"
        title = "MySQL" / >
        <
        SiFirebase className = "tech-icon firebase"
        title = "Firebase" / >
        <
        /div> <
        /div> <
        div className = "tech-category" >
        <
        h3 > 雲端服務 < /h3> <
        div className = "tech-icons" >
        <
        FaAws className = "tech-icon aws"
        title = "AWS" / >
        <
        FaGoogle className = "tech-icon gcp"
        title = "Google Cloud Platform" / >
        <
        FaMicrosoft className = "tech-icon azure"
        title = "Microsoft Azure" / >
        <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div>
    );
};

export default AboutPage;