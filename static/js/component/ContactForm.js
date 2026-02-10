import React, {
    useEffect
} from "react";
import "../component/css/ContactForm.css";
import {
    useFormContext
} from "../FormContext";

const ContactForm = () => {
    const {
        formData,
        setFormData
    } = useFormContext();
    const [errors, setErrors] = React.useState({});
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitSuccess, setSubmitSuccess] = React.useState(false);

    const handleTitleChange = (title) => {
        setFormData((prev) => ({ ...prev,
            title
        }));
        setErrors((prev) => ({ ...prev,
            title: ""
        }));
    };

    const handleInputChange = (e) => {
        const {
            name,
            value,
            type,
            checked
        } = e.target;
        if (type === "checkbox") {
            setFormData((prev) => ({
                ...prev,
                services: {
                    ...prev.services,
                    [name]: checked,
                },
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
        setErrors((prev) => ({ ...prev,
            [name]: ""
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.title) newErrors.title = "請選擇稱謂";
        if (!formData.firstName) newErrors.firstName = "請輸入名字";
        if (!formData.lastName) newErrors.lastName = "請輸入姓氏";
        if (!formData.email) {
            newErrors.email = "請輸入電郵地址";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "請輸入有效的電郵地址";
        }
        if (!formData.phoneNumber) newErrors.phoneNumber = "請輸入電話號碼";
        if (Object.values(formData.services).every((val) => !val))
            newErrors.services = "請選擇至少一項服務";
        if (!formData.message) newErrors.message = "請輸入留言";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const resetForm = () => {
        setFormData({
            title: "先生",
            firstName: "",
            lastName: "",
            email: "",
            phoneCountry: "+852",
            phoneNumber: "",
            company: "",
            services: {
                webDevelopment: false,
                systemDevelopment: false,
                programDevelopment: false,
                semSeo: false,
            },
            budget: "",
            message: "",
        });
        setErrors({});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            setIsSubmitting(true);
            setSubmitSuccess(false);

            // 準備發送到 Web3Forms 的數據
            const formDataToSend = {
                access_key: "470b5f52-f4f3-41c6-8282-9a76fe08a979", // 請替換為您的 Web3Forms API 密鑰
                title: formData.title,
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: `${formData.phoneCountry} ${formData.phoneNumber}`,
                company: formData.company || "未提供",
                selectedServices: Object.keys(formData.services)
                    .filter((key) => formData.services[key])
                    .join(", "),
                budget: formData.budget || "未提供",
                message: formData.message,
                subject: "網站查詢表單", // 郵件主題
                from_name: `${formData.lastName}${formData.firstName}`, // 寄件人名稱
                to_name: "ZenithSoft", // 收件人名稱
            };

            // 發送到 Web3Forms
            fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(formDataToSend),
                })
                .then((response) => response.json())
                .then((data) => {
                    if (data.success) {
                        setSubmitSuccess(true);
                        resetForm();

                        // 發送 GTM 事件追蹤
                        if (window.dataLayer) {
                            window.dataLayer.push({
                                'event': 'form_submitted',
                                'form_name': 'contact_form',
                                'services_selected': Object.keys(formData.services)
                                    .filter((key) => formData.services[key])
                                    .join(", "),
                                'budget_range': formData.budget || 'not_specified'
                            });
                        }
                    } else {
                        console.error("提交失敗:", data);
                        alert("提交表單時發生錯誤，請稍後再試。");
                    }
                })
                .catch((error) => {
                    console.error("提交錯誤:", error);
                    alert("提交表單時發生錯誤，請稍後再試。");
                })
                .finally(() => {
                    setIsSubmitting(false);
                });
        }
    };

    return ( <
        div className = "contact-container" >
        <
        div className = "contact-form-wrapper" >
        <
        div className = "form-header" >
        <
        h1 > 聯絡我們 < /h1> <
        p className = "form-subtitle" > 讓我們了解你的需求 < /p> <
        /div>

        {
            submitSuccess ? ( <
                div className = "success-message-container" >
                <
                h2 > 謝謝您的查詢！ < /h2> <
                p > 我們已收到您的訊息， 將會盡快回覆您。 < /p> <
                button className = "submit-button"
                onClick = {
                    () => {
                        setSubmitSuccess(false);
                    }
                } >
                提交另一份表單 <
                /button> <
                /div>
            ) : ( <
                form onSubmit = {
                    handleSubmit
                } >
                <
                div className = "form-section" >
                <
                label className = "section-label" >
                稱謂 < span className = "required" > * < /span> <
                /label> <
                div className = "title-options" >
                <
                div className = {
                    `title-option ${formData.title === "先生" ? "selected" : ""
                    }`
                }
                onClick = {
                    () => handleTitleChange("先生")
                } >
                <
                input type = "radio"
                name = "title"
                value = "先生"
                checked = {
                    formData.title === "先生"
                }
                onChange = {
                    () => handleTitleChange("先生")
                }
                /> <
                span > 先生 < /span> <
                /div> <
                div className = {
                    `title-option ${formData.title === "女士" ? "selected" : ""
                    }`
                }
                onClick = {
                    () => handleTitleChange("女士")
                } >
                <
                input type = "radio"
                name = "title"
                value = "女士"
                checked = {
                    formData.title === "女士"
                }
                onChange = {
                    () => handleTitleChange("女士")
                }
                /> <
                span > 女士 < /span> <
                /div> <
                /div> {
                    errors.title && ( <
                        div className = "error-message" > {
                            errors.title
                        } < /div>
                    )
                } <
                /div>

                <
                div className = "form-row" >
                <
                div className = "form-group" >
                <
                label className = "section-label" >
                名字 < span className = "required" > * < /span> <
                /label> <
                input type = "text"
                name = "firstName"
                className = {
                    `form-input ${errors.firstName ? "error" : ""}`
                }
                value = {
                    formData.firstName
                }
                onChange = {
                    handleInputChange
                }
                placeholder = "請輸入名字"
                autoComplete = "off"
                autoCorrect = "off" /
                > {
                    errors.firstName && ( <
                        div className = "error-message" > {
                            errors.firstName
                        } < /div>
                    )
                } <
                /div>

                <
                div className = "form-group" >
                <
                label className = "section-label" >
                姓氏 < span className = "required" > * < /span> <
                /label> <
                input type = "text"
                name = "lastName"
                className = {
                    `form-input ${errors.lastName ? "error" : ""}`
                }
                value = {
                    formData.lastName
                }
                onChange = {
                    handleInputChange
                }
                placeholder = "請輸入姓氏"
                autoComplete = "off"
                autoCorrect = "off" /
                > {
                    errors.lastName && ( <
                        div className = "error-message" > {
                            errors.lastName
                        } < /div>
                    )
                } <
                /div> <
                /div>

                <
                div className = "form-row" >
                <
                div className = "form-group" >
                <
                label className = "section-label" >
                電郵地址 < span className = "required" > * < /span> <
                /label> <
                input type = "email"
                name = "email"
                className = {
                    `form-input ${errors.email ? "error" : ""}`
                }
                value = {
                    formData.email
                }
                onChange = {
                    handleInputChange
                }
                placeholder = "請輸入電郵地址"
                autoComplete = "off"
                autoCorrect = "off" /
                > {
                    errors.email && ( <
                        div className = "error-message" > {
                            errors.email
                        } < /div>
                    )
                } <
                /div>

                <
                div className = "form-group" >
                <
                label className = "section-label" >
                電話號碼 < span className = "required" > * < /span> <
                /label> <
                div className = "phone-group" >
                <
                select className = "country-code"
                name = "phoneCountry"
                value = {
                    formData.phoneCountry
                }
                onChange = {
                    handleInputChange
                } >
                <
                option value = "+852" > +852 < /option> <
                option value = "+86" > +86 < /option> <
                option value = "+1" > +1 < /option> <
                option value = "+81" > +81 < /option> <
                option value = "+82" > +82 < /option> <
                option value = "+65" > +65 < /option> <
                option value = "+60" > +60 < /option> <
                option value = "+886" > +886 < /option> <
                /select> <
                input type = "tel"
                name = "phoneNumber"
                className = {
                    `form-input phone-input ${errors.phoneNumber ? "error" : ""
                      }`
                }
                value = {
                    formData.phoneNumber
                }
                onChange = {
                    handleInputChange
                }
                placeholder = "請輸入電話號碼"
                autoComplete = "off"
                autoCorrect = "off" /
                >
                <
                /div> {
                    errors.phoneNumber && ( <
                        div className = "error-message" > {
                            errors.phoneNumber
                        } < /div>
                    )
                } <
                /div> <
                /div>

                <
                div className = "form-section" >
                <
                label className = "section-label" > 公司名稱 < /label> <
                input type = "text"
                name = "company"
                className = "form-input"
                value = {
                    formData.company
                }
                onChange = {
                    handleInputChange
                }
                placeholder = "請輸入公司名稱"
                autoComplete = "off"
                autoCorrect = "off" /
                >
                <
                /div>

                <
                div className = "form-section" >
                <
                label className = "section-label" >
                服務項目 < span className = "required" > * < /span> <
                /label> <
                div className = "services-row" >
                <
                div className = {
                    `service-option ${formData.services.webDevelopment ? "selected" : ""
                    }`
                } >
                <
                input type = "checkbox"
                name = "webDevelopment"
                checked = {
                    formData.services.webDevelopment
                }
                onChange = {
                    handleInputChange
                }
                /> <
                span > 網頁開發 < /span> <
                /div> <
                div className = {
                    `service-option ${formData.services.systemDevelopment ? "selected" : ""
                    }`
                } >
                <
                input type = "checkbox"
                name = "systemDevelopment"
                checked = {
                    formData.services.systemDevelopment
                }
                onChange = {
                    handleInputChange
                }
                /> <
                span > 系統開發 < /span> <
                /div> <
                div className = {
                    `service-option ${formData.services.programDevelopment ? "selected" : ""
                    }`
                } >
                <
                input type = "checkbox"
                name = "programDevelopment"
                checked = {
                    formData.services.programDevelopment
                }
                onChange = {
                    handleInputChange
                }
                /> <
                span > 程序開發 < /span> <
                /div> <
                div className = {
                    `service-option ${formData.services.semSeo ? "selected" : ""
                    }`
                } >
                <
                input type = "checkbox"
                name = "semSeo"
                checked = {
                    formData.services.semSeo
                }
                onChange = {
                    handleInputChange
                }
                /> <
                span > SEM & SEO < /span> <
                /div> <
                /div> {
                    errors.services && ( <
                        div className = "error-message" > {
                            errors.services
                        } < /div>
                    )
                } <
                /div>

                <
                div className = "form-section" >
                <
                label className = "section-label" > 預算範圍 < /label> <
                select name = "budget"
                className = "form-select"
                value = {
                    formData.budget
                }
                onChange = {
                    handleInputChange
                } >
                <
                option value = "" > 請選擇預算範圍 < /option> <
                option value = "HK$5,000以下" > HK$5, 000 以下 < /option> <
                option value = "HK$5,000 - HK$10,000" >
                HK$5, 000 - HK$10, 000 <
                /option> <
                option value = "HK$10,000 - HK$30,000" >
                HK$10, 000 - HK$30, 000 <
                /option> <
                option value = "HK$30,000 - HK$50,000" >
                HK$30, 000 - HK$50, 000 <
                /option> <
                option value = "HK$50,000 - HK$100,000" >
                HK$50, 000 - HK$100, 000 <
                /option> <
                option value = "HK$100,000以上" > HK$100, 000 以上 < /option> <
                /select> <
                /div>

                <
                div className = "form-section" >
                <
                label className = "section-label" >
                留言 < span className = "required" > * < /span> <
                /label> <
                textarea name = "message"
                className = {
                    `form-textarea ${errors.message ? "error" : ""}`
                }
                value = {
                    formData.message
                }
                onChange = {
                    handleInputChange
                }
                placeholder = "請輸入留言"
                autoComplete = "off"
                autoCorrect = "off"
                rows = "5" /
                > {
                    errors.message && ( <
                        div className = "error-message" > {
                            errors.message
                        } < /div>
                    )
                } <
                /div>

                <
                button type = "submit"
                className = "submit-button"
                disabled = {
                    isSubmitting
                } >
                {
                    isSubmitting ? "提交中..." : "提交"
                } <
                /button> <
                /form>
            )
        } <
        /div> <
        /div>
    );
};

export default ContactForm;