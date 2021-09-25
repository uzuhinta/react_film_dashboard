import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTranslations } from './i18nAPI';
import { defaultLang, supportedLangs } from './i18nConfig';

const initialState = {
    status: 'loading',
    lang: defaultLang,
    supportLangs: { ...supportedLangs },

    translations: {},
};

export const setLangAsync = createAsyncThunk(
    'i18n/setLangAsync',
    async (lang, { getState, dispatch }) => {
        const resolvedLang = lang || getState().i18n.lang;
        console.log({ resolvedLang });

        const translations = await fetchTranslations(resolvedLang);
        console.log({ translations });
        dispatch(i18nSlice.actions.setLang(resolvedLang));

        return translations;
    }
);

const i18nSlice = createSlice({
    name: 'i18n',
    initialState,
    reducers: {
        setLang: (state, action) => {
            state.lang = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(setLangAsync.pending, (state) => {
            state.status = 'loading';
        });

        builder.addCase(setLangAsync.fulfilled, (state, action) => {
            state.translations = action.payload;
            state.status = 'idle';
        });

        builder.addCase(setLangAsync.rejected, (state, action) => {
            state.status = 'error';
        });
    },
});

export const { setLang } = i18nSlice.actions;

export const selectTranslations = (state) => state.i18n.translations;

export const selectLang = (state) => state.i18n.lang;

export const selectSupportedLang = (state) => state.i18n.supportLangs;

export default i18nSlice.reducer;
