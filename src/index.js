import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './Components/API/Context';
import App from './App';
import { store } from './App/Store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
