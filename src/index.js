import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import { render } from "react-dom";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store = {store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// const rootElement = document.getElementById('root'); // Замените 'root' на ID вашего корневого элемента
// createRoot(rootElement).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
