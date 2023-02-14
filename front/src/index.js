import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import UserProvider from './context/UserProvider';
import CartProvider from './context/cart/CartProvider';
import {PayPalScriptProvider} from '@paypal/react-paypal-js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<PayPalScriptProvider options={{"client-id":'ATZU78METxvRsHbnBQkeXgNyUrOmIXtAG12Fb2RYWEMTdeKxEgOkycJU6K0S2x_Y84v8ebqeKMMZvB_C'}}>
 <BrowserRouter>
 <UserProvider>
 <CartProvider>
    <App />
 </CartProvider>
 </UserProvider>
 </BrowserRouter>
 </PayPalScriptProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
