import { defaultLang, supportedLangs } from './i18nConfig';
import { createSlice } from '@reduxjs/toolkit';
import languageEN from './locates/en/translate.json';
import languageVI from './locates/vi/translate.json';

const initialState = {
    lang: defaultLang,
    supportLangs: { ...supportedLangs },

    translations: {
        en: languageEN,
        vi: languageVI,
    },
};

const i18nSlice = createSlice({
    name: 'i18n',
    initialState,
});

export const selectTranslations = (state) =>
    state.i18n.translations[state.i18n.lang];

export default i18nSlice.reducer;
