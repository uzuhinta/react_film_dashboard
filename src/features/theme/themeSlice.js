import { createSlice } from '@reduxjs/toolkit';

/**
 * @param theme: type string
 */
const setTheme = (theme) => {
    console.log('in set theme ' + theme);
    const isDark = theme === 'dark';

    const root = window.document.documentElement;

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(isDark ? 'dark' : 'light');
    localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
};

const getInitialTheme = (_) => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('color-theme');
        if (typeof storedPrefs === 'string') {
            console.log({ storedPrefs });
            setTheme(storedPrefs);
            return storedPrefs;
        }

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
        if (userMedia.matches) {
            setTheme('dark');
            return 'dark';
        }
    }

    // If you want to use light theme as the default,
    // return "light" instead
    setTheme('dark');
    return 'dark';
};

const initialState = {
    value: getInitialTheme(),
};

export const themedSlice = createSlice({
    name: 'themed',
    initialState,
    reducers: {
        toggle: (state) => {
            const isDark = state.value === 'dark';
            const nextValue = isDark ? 'light' : 'dark';
            // console.log({ prev: state.value, isDark });
            setTheme(nextValue);
            state.value = nextValue;
        },
    },
});

export const { toggle } = themedSlice.actions;

export const selectTheme = (state) => state.themed.value;

export default themedSlice.reducer;
