// src/FormContext.js
import React, {
    createContext,
    useContext,
    useState
} from 'react';

// 創建上下文
const FormContext = createContext();

// 初始表單數據
const initialFormData = {
    title: '先生',
    firstName: '',
    lastName: '',
    email: '',
    phoneCountry: '+852',
    phoneNumber: '',
    company: '',
    services: {
        webDesign: false,
        mobileDevelopment: false,
        tvpTechnology: false,
        onlineStore: false,
        website: false,
        enterpriseSystem: false,
        customWeb: false,
        whatsappApi: false,
        chatbot: false,
        bookingSystem: false,
        memberSystem: false,
        storageSystem: false,
        hrSystem: false,
        other: false
    },
    budget: '',
    message: ''
};

// 上下文提供者組件
export const FormProvider = ({
    children
}) => {
    const [formData, setFormData] = useState(initialFormData);

    // 重置表單的函數
    const resetForm = () => {
        setFormData(initialFormData);
    };

    // 用於單一字段更新的輔助函數
    const updateField = (fieldName, value) => {
        setFormData(prev => ({
            ...prev,
            [fieldName]: value
        }));
    };

    // 用於服務選項更新的輔助函數
    const toggleService = (serviceName) => {
        setFormData(prev => ({
            ...prev,
            services: {
                ...prev.services,
                [serviceName]: !prev.services[serviceName]
            }
        }));
    };

    // 將所有表單相關函數和數據傳遞給消費者
    const contextValue = {
        formData,
        setFormData,
        resetForm,
        updateField,
        toggleService
    };

    // console.log('FormProvider rendered', formData);

    return ( <
        FormContext.Provider value = {
            contextValue
        } > {
            children
        } <
        /FormContext.Provider>
    );
};

// 自定義鉤子，用於訪問上下文
export const useFormContext = () => {
    const context = useContext(FormContext);
    if (context === undefined) {
        throw new Error('useFormContext must be used within a FormProvider');
    }
    return context;
};

export default FormContext;