import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RouterError from './RouterError.tsx';

const BASE_PATH = "/phibry-playground/";

const router = createBrowserRouter([
    {
        path: BASE_PATH,
        element: <App />,
        errorElement: <RouterError />,
    },
    {
        path: BASE_PATH + "vizirino",
        element: <div>Vizirino</div>
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
