import { selectTranslations } from 'features/i18n/i18nSlice';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggle, selectTheme, setTheme } from '../themeSlice';

export const ToggleTheme = () => {
    const theme = useSelector(selectTheme);
    const dispatch = useDispatch();
    const t = useSelector(selectTranslations);

    function isDark() {
        return theme === 'dark';
    }

    function toggleTheme(e) {
        dispatch(toggle());
        console.log(e.target.checked ? 'dark' : 'light');
    }

    useEffect(() => {
        setTheme(theme);
        
    }, []);

    return (
        <label>
            <input
                type="checkbox"
                checked={isDark()}
                onChange={(e) => toggleTheme(e)}
            />
            {t.counters.darkMode}
        </label>
    );
};
