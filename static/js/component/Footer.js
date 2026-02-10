import React from 'react';
import {
    FaEnvelope,
    FaInstagram,
    FaWhatsapp,
    FaWeixin,
    FaFacebookF
} from 'react-icons/fa';
import '../component/css/Footer.css';

const Footer = () => {
    return ( <
        footer className = "footer" >
        <
        div className = "footer-content" >
        <
        div className = "contact-info" >
        <
        h3 > 聯絡我們 < /h3> <
        div className = "contact-items" >
        <
        a href = "mailto:info@zenithsoft.org"
        className = "contact-item" >
        <
        FaEnvelope / > info @zenithsoft.org <
        /a> <
        a href = "https://instagram.com/your_instagram"
        className = "contact-item" >
        <
        FaInstagram / > @Zenithsoft <
        /a> <
        a href = "https://wa.me/85294429080"
        className = "contact-item" >
        <
        FaWhatsapp / > +852 9442 9080 <
        /a> {
            /* <a href="#" className="contact-item">
                          <FaWeixin /> WeChat ID */
        } { /* </a> */ } <
        a href = "https://facebook.com/your_facebook"
        className = "contact-item" >
        <
        FaFacebookF / > Zenithsoft <
        /a> <
        /div> <
        /div> <
        div className = "copyright" >
        <
        p > ©{
            new Date().getFullYear()
        }
        ZenithSoft Limited < /p> <
        /div> <
        /div> <
        /footer>
    );
};

export default Footer;