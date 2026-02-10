import React from 'react';
import ContactForm from '../component/ContactForm';
import '../component/css/ContactPage.css';
import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaWeixin,
    FaLine
} from 'react-icons/fa'; // 引入React Icons
import Banner from '../component/Banner';

const ContactPage = () => {
    return ( <
        div className = "contact-page" > { /* 使用Banner組件取代原有的contact-hero */ } <
        Banner title = "聯絡我們"
        description = "隨時傾聽您的聲音，提供量身定制的專業諮詢與技術支援。無論您是初創企業尋求數位突破，或成熟品牌期待技術升級，我們的專家團隊將以豐富經驗與創新思維，為您規劃最適切的發展藍圖，共創數位成功。"
        image = "/images/contactBanner.jpeg"
        hideButton = {
            true
        }
        />

        <
        div className = "contact-container" > { /* 使用 ContactForm.js 渲染表單 */ } <
        div className = "form-card" >
        <
        ContactForm / >
        <
        /div>

        { /* 公司信息卡片 - 置中顯示 */ } <
        div className = "company-info-section" >
        <
        div className = "company-info-header text-center" >
        <
        h3 > 公司資料 < /h3> <
        /div> <
        div className = "company-cards" >
        <
        div className = "company-card text-center" >
        <
        h4 > ZenithSoft Limited < /h4> { /* <p><i className="fas fa-map-marker-alt"></i> 觀塘富德中心 </p> */ } <
        p > < i className = "fas fa-phone" > < /i> (852) 94429080</p >
        <
        p >
        <
        i className = "fas fa-envelope" > < /i> <
        a href = "mailto:info@zenithsoft.org"
        className = "email-link" > info @zenithsoft.org < /a> <
        /p> <
        /div> <
        /div>

        { /* 社交媒體圖標 - 已更新為可點擊並使用React Icons */ } <
        div className = "social-media-section" >
        <
        h4 className = "text-center" > 關注我們 < /h4> <
        div className = "social-icons-container" >
        <
        a href = "https://www.facebook.com/profile.php?id=61576803092687"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "social-icon facebook" >
        <
        FaFacebookF / >
        <
        /a> <
        a href = "https://www.instagram.com/zenithsoft_hk/"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "social-icon instagram" >
        <
        FaInstagram / >
        <
        /a> <
        a href = "https://wa.me/85294429080"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "social-icon whatsapp" >
        <
        FaWhatsapp / >
        <
        /a> {
            /* <a href="#" onClick={(e) => { e.preventDefault(); alert('WeChat ID: yourcompany') }} className="social-icon wechat">
                            <FaWeixin />
                          </a> */
        } {
            /* <a href="https://line.me/ti/p/~yourcompany" target="_blank" rel="noopener noreferrer" className="social-icon line">
                            <FaLine />
                          </a> */
        } <
        /div> <
        /div> <
        /div> <
        /div>

        { /* 地圖 */ } {
            /* <div className="map-container">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.0956235706397!2d114.16211231541228!3d22.31501604782868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040179b2e36d7f%3A0x22b006dd4a65a2fa!2sMidtown%2C%201180%20Hay%20St%2C%20Tsim%20Sha%20Tsui!5e0!3m2!1sen!2shk!4v1624954438654!5m2!1sen!2shk"
                      width="100%"
                      height="350"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div> */
        } <
        /div>
    );
};

export default ContactPage;