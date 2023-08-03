import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RouterError from './RouterError.tsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <RouterError />,
    },
    {
        path: "/vizirino",
        element: <div>Vizirino</div>
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
