import { ThemeContext } from 'app/themeContext';
import { useContext } from 'react';

export const ToggleTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    function isDark() {
        return theme === 'dark';
    }

    function toggleTheme(e) {
        setTheme(e.target.checked ? 'dark' : 'light');
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
