import { configureStore } from '@reduxjs/toolkit';
import themedReducer from 'features/theme/themeSlice';
import counterReducer from 'features/counter/counterSlice';
import i18nReducer from 'features/i18n/i18nSlice';

export const store = configureStore({
    reducer: {
        themed: themedReducer,
        counter: counterReducer,
        i18n: i18nReducer,
    },
});
