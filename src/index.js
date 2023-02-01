import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { App, router } from './app/app';
import './styles/index.scss';
import {  RouterProvider } from 'react-router-dom';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
		<RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

