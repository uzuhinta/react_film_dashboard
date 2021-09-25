import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLang, selectSupportedLang, setLang } from '../i18nSlice';

export default function LangSwitcher() {
    const lang = useSelector(selectLang);
    const supportedLangs = useSelector(selectSupportedLang);
    const dispatch = useDispatch();
    function handleChange(e) {
        dispatch(setLang(e.target.value));
    }
    return (
        <select value={lang} onChange={handleChange}>
            {Object.entries(supportedLangs).map(([code, name]) => (
                <option value={code}>{name}</option>
            ))}
        </select>
    );
}
