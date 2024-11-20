import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store'
import { Provider } from 'react-redux'
import { throttle } from 'lodash';
import { saveState } from './store/localStorage'

import { registerLocale, setDefaultLocale } from "react-datepicker";
import ru from 'date-fns/locale/ru';

import App from './App';

store.subscribe(throttle(() => {
  saveState(store.getState())
}, 1000));

registerLocale('ru', ru)
setDefaultLocale('ru', ru)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);