import React, {
    useState,
    useEffect
} from 'react';
import './css/CaseSection.css';

const CaseSection = ({
    cases
}) => {
    // 只包含需要的三個分類
    const categories = ["網頁開發", "程式開發", "系統開發"];

    // 設置默認為「網頁開發」
    const [selectedCategory, setSelectedCategory] = useState("網頁開發");
    const [filteredCases, setFilteredCases] = useState([]);

    // Dialog 狀態
    const [openDialog, setOpenDialog] = useState(false);
    const [dialogImg, setDialogImg] = useState("");
    const [dialogTitle, setDialogTitle] = useState("");

    // 初始化和分類變更時過濾案例
    useEffect(() => {
        setFilteredCases(cases.filter(item => item.category === selectedCategory));
    }, [selectedCategory, cases]);

    // 點擊圖片開啟 Dialog
    const handleOpenDialog = (img, title) => {
        setDialogImg(img);
        setDialogTitle(title);
        setOpenDialog(true);
    };

    // 關閉 Dialog
    const handleCloseDialog = () => {
        setOpenDialog(false);
        setDialogImg("");
        setDialogTitle("");
    };

    return ( <
        > { /* Dialog 彈窗 */ } {
            openDialog && ( <
                div className = "case-dialog-overlay"
                onClick = {
                    handleCloseDialog
                } >
                <
                div className = "case-dialog"
                onClick = {
                    e => e.stopPropagation()
                } >
                <
                button className = "case-dialog-close"
                onClick = {
                    handleCloseDialog
                } > × < /button> <
                img src = {
                    process.env.PUBLIC_URL + dialogImg
                }
                alt = {
                    dialogTitle
                }
                className = "case-dialog-img" / >
                <
                div className = "case-dialog-title" > {
                    dialogTitle
                } < /div> <
                /div> <
                /div>
            )
        } <
        section className = "cases-section" >
        <
        div className = "case-container" >
        <
        h2 className = "case-title" > 精選案例 < /h2> { /* <p className="case-subtitle">我們為各行業客戶打造的成功數位解決方案</p> */ }

        { /* 分類過濾按鈕 */ } <
        div className = "case-filter" > {
            categories.map(category => ( <
                button key = {
                    category
                }
                className = {
                    `filter-button ${selectedCategory === category ? 'active' : ''}`
                }
                onClick = {
                    () => setSelectedCategory(category)
                } >
                {
                    category
                } <
                /button>
            ))
        } <
        /div>

        <
        div className = "case-display" > {
            filteredCases.map((item, index) => ( <
                div className = {
                    `case-item ${(item.category === "程式開發" || item.category === "網頁開發") ? "app-item" : ""}`
                }
                key = {
                    index
                } >
                <
                div className = "case-image-wrapper" >
                <
                img src = {
                    `${process.env.PUBLIC_URL}${item.image}`
                }
                alt = {
                    item.title
                }
                className = "case-image" /
                >
                <
                div className = "case-text-overlay" >
                <
                h3 className = "case-item-title" > {
                    item.title
                } < /h3> {
                    item.description && ( <
                        p className = "case-item-description" > {
                            item.description
                        } < /p>
                    )
                } <
                /div> <
                /div> <
                /div>
            ))
        } <
        /div> <
        /div> <
        /section> <
        />
    );
};

export default CaseSection;