import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App2 from './App2';
import App3 from './App3';
import { ColorProvider } from "./ColorContext";
;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ColorProvider>
    <App3 />
  </ColorProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
