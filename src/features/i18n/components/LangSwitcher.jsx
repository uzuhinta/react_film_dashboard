import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLang, selectSupportedLang, setLang, setLangAsync } from '../i18nSlice';

export default function LangSwitcher() {
    const lang = useSelector(selectLang);
    const supportedLangs = useSelector(selectSupportedLang);
    const dispatch = useDispatch();
    function handleChange(e) {
        dispatch(setLangAsync(e.target.value));
    }
    return (
        <select value={lang} onChange={handleChange}>
            {Object.entries(supportedLangs).map(([code, name]) => (
                <option key={code} value={code}>
                    {name}
                </option>
            ))}
        </select>
    );
}
