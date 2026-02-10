import React from 'react';
import {
    createRoot
} from 'react-dom/client';
import './index.css'; // 修正文件名大小寫
import App from './App';
import {
    FormProvider
} from './FormContext';

const root = createRoot(document.getElementById('root'));
root.render( <
    React.StrictMode >
    <
    FormProvider >
    <
    App / >
    <
    /FormProvider> <
    /React.StrictMode>
);