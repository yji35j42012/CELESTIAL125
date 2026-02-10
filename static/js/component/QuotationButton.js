import React, {
    useState
} from "react";
import {
    useNavigate
} from "react-router-dom";
import '../App.css';

const QuotationButton = () => {
    const [isContactPageVisible, setContactPageVisible] = useState(false);
    const navigate = useNavigate();

    // 點擊按鈕後跳轉到 Contact 頁面
    const handleButtonClick = () => {
        console.log("Quotation Button clicked!");
        navigate("/contact");
    };

    return ( <
        >
        <
        button onClick = {
            handleButtonClick
        }
        className = "quotation-button" >
        獲取報價 <
        /button> <
        />
    );
};

export default QuotationButton;