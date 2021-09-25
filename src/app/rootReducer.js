import themedReducer from 'features/theme/themeSlice';
import counterReducer from 'features/counter/counterSlice';
import i18nReducer from 'features/i18n/i18nSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    themed: themedReducer,
    counter: counterReducer,
    i18n: i18nReducer,
});

export default rootReducer;
