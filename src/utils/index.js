import { selectTheme } from 'features/theme/themeSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

/**
 * @returns true if theme is dark, other false
 */
export function useThemeDark() {
    const theme = useSelector(selectTheme);
    useEffect(() => {
        console.log('usethemedark');
    }, [theme]);
    return theme === 'dark';
}
