import React, {
    useState,
    useEffect,
    useCallback
} from 'react';
import {
    useNavigate
} from 'react-router-dom';
import './Slider.css';

const Slider = ({
    slides
}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const navigate = useNavigate();

    // 自動輪播
    useEffect(() => {
        if (!isPaused) {
            const timer = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
            }, 10000);

            return () => {
                clearInterval(timer);
            };
        }
    }, [slides.length, isPaused]);

    const handleContactSales = () => {
        navigate("/contact");
    };

    const handleLearnMore = (index) => {
        switch (index) {
            case 0:
                navigate("/web");
                break;
            case 1:
                navigate("/app");
                break;
            case 2:
                navigate("/system");
                break;
            default:
                navigate("/web");
        }
    };

    // 處理滑鼠懸停事件
    const handleMouseEnter = useCallback(() => {
        setIsPaused(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsPaused(false);
    }, []);

    // 樣式定義
    const containerStyle = {
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#000' // 確保基本背景為黑色
    };

    // 完全替換原有的幻燈片實現，使用更簡單的邏輯
    return ( <
        div className = "slider-container"
        data - paused = {
            isPaused
        } > {
            slides.map((slide, index) => ( <
                div key = {
                    slide.id
                }
                className = {
                    `slide ${index === currentSlide ? 'active' : ''}`
                } >
                <
                div className = "slide-bg"
                style = {
                    {
                        backgroundImage: `url(${process.env.PUBLIC_URL}${slide.url})`
                    }
                }
                /> <
                div className = "slide-overlay" / >
                <
                div className = "slide-content" >
                <
                h1 > {
                    slide.title
                } < /h1> <
                h2 > {
                    slide.subtitle
                } < /h2> <
                div className = "slide-price" > {
                    slide.price
                } < /div> <
                div className = "slide-description" > {
                    slide.description
                } < /div> <
                div className = "buttons"
                onMouseEnter = {
                    handleMouseEnter
                }
                onMouseLeave = {
                    handleMouseLeave
                } >
                <
                button className = "btn-primary"
                onClick = {
                    () => handleLearnMore(index)
                } >
                瞭解更多 <
                /button> <
                button className = "btn-secondary"
                onClick = {
                    handleContactSales
                } >
                聯絡我們 <
                /button> <
                /div> <
                /div> <
                /div>
            ))
        }

        { /* Navigation Dots */ } <
        div className = "slider-navigation" > {
            slides.map((_, index) => ( <
                button key = {
                    index
                }
                className = {
                    `nav-dot ${index === currentSlide ? 'active' : ''}`
                }
                onClick = {
                    () => setCurrentSlide(index)
                }
                />
            ))
        } <
        /div>

        { /* Navigation Buttons */ } <
        div className = "slider-nav-buttons" >
        <
        button className = "slider-prev-btn"
        onClick = {
            () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        }
        /> <
        button className = "slider-next-btn"
        onClick = {
            () => setCurrentSlide((prev) => (prev + 1) % slides.length)
        }
        /> <
        /div> <
        /div>
    );
};

export default Slider;