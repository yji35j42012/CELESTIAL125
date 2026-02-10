import React from 'react';
import './css/Banner.css';
import {
    useNavigate
} from 'react-router-dom';

const Banner = ({
    title,
    description,
    image,
    onLearnMore,
    hideButton
}) => {
    const navigate = useNavigate();

    const handleContact = () => {
        navigate("/contact", {
            replace: true
        });
    };

    return ( <
        div className = "banner-container" >
        <
        div className = "banner-content" >
        <
        h1 className = "banner-title"
        style = {
            {
                fontSize: "1.5rem"
            }
        } > {
            title
        } < /h1> <
        p className = "banner-description"
        style = {
            {
                fontSize: "0.85rem"
            }
        } > {
            description
        } < /p> {
            !hideButton && ( <
                button className = "banner-button"
                onClick = {
                    onLearnMore || handleContact
                } >
                了解更多 <
                /button>
            )
        } <
        /div> <
        div className = "banner-image" >
        <
        img src = {
            image || "/images/silder1.jpeg"
        }
        alt = "banner" / >
        <
        /div> <
        /div>
    );
};

export default Banner;