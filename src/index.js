import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/tailwind.generated.css';
import App from './App';
import { persistor, store } from './app/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate
                loading={<div>loading persis</div>}
                persistor={persistor}
            >
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
