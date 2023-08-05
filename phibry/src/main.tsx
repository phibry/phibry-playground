import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter basename={import.meta.env.DEV ? "/" : "phibry-playground/"}>
            <Routes>
                <Route
                    path="/"
                    element=<App />
                />
                <Route
                    path="vizirino"
                    element=<div>Vizirino</div> />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);
