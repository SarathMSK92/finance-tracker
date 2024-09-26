import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/configStore';
// import Routes from './Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
// ReactDOM.render(<Routes />, document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

