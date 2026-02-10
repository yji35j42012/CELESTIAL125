import React, {
    useState,
    useEffect
} from "react";
import {
    Link
} from "react-router-dom";
import {
    useMediaQuery
} from "react-responsive";
import "./css/NavBar.css";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = useMediaQuery({
        maxWidth: 767
    });

    // 關閉菜單的函數
    const handleLinkClick = () => {
        if (isMobile) {
            setIsMenuOpen(false);
        }
    };

    // 當頁面滾動時關閉導航菜單
    useEffect(() => {
        const handleScroll = () => {
            if (isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMenuOpen]);

    return ( <
        nav className = "navbar" >
        <
        div className = "nav-container" > { /* Logo 部分 - 使用圖片替換文字 */ } <
        div className = "logo-container" >
        <
        Link to = "/"
        className = "zenithsoft-logo"
        onClick = {
            handleLinkClick
        } >
        <
        img src = "../images/logo2.jpeg"
        alt = "Zenith Soft"
        className = "logo-image" / >
        <
        /Link> <
        /div>

        { /* 導航部分 */ } <
        div className = "nav-right" > { /* 漢堡菜單按钮 */ } <
        div className = {
            `menu-button ${isMenuOpen ? "active" : ""}`
        }
        onClick = {
            () => setIsMenuOpen(!isMenuOpen)
        }
        aria - label = "導航菜單" >
        <
        span > < /span> <
        span > < /span> <
        span > < /span> <
        /div>

        { /* 導航菜單（放回nav-right內部） */ } <
        div className = {
            `nav-links ${isMenuOpen ? "active" : ""}`
        } >
        <
        Link to = "/web"
        onClick = {
            handleLinkClick
        }
        className = "nav-link" >
        網頁開發 <
        /Link> <
        Link to = "/app"
        onClick = {
            handleLinkClick
        }
        className = "nav-link" >
        APP開發 <
        /Link> <
        Link to = "/system"
        onClick = {
            handleLinkClick
        }
        className = "nav-link" >
        系統開發 <
        /Link> <
        Link to = "/seo"
        onClick = {
            handleLinkClick
        }
        className = "nav-link" >
        SEO / SEM <
        /Link> <
        Link to = "/about"
        onClick = {
            handleLinkClick
        }
        className = "nav-link" >
        關於我們 <
        /Link> <
        Link to = "/contact"
        onClick = {
            handleLinkClick
        }
        className = "nav-link contact-link" >
        聯絡我們 <
        /Link> <
        /div> <
        /div> <
        /div> <
        /nav>
    );
};

export default NavBar;