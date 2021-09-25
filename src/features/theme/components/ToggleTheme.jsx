import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggle, selectTheme } from '../themeSlice';

export const ToggleTheme = () => {
    const theme = useSelector(selectTheme);
    const dispatch = useDispatch();
    function isDark() {
        return theme === 'dark';
    }

    console.log(theme);

    function toggleTheme(e) {
        dispatch(toggle());
        console.log(e.target.checked ? 'dark' : 'light');
    }

    return (
        <label>
            <input
                type="checkbox"
                checked={isDark()}
                onChange={(e) => toggleTheme(e)}
            />
            Dark Mode
        </label>
    );
};
