import { FormControl, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useThemeDark } from 'utils';
import { selectLang, selectSupportedLang, setLang } from '../i18nSlice';

export default function LangSwitcher() {
    const lang = useSelector(selectLang);
    const supportedLangs = useSelector(selectSupportedLang);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        dispatch(setLang(e.target.value));
    };
    return (
        <Select
            variant="standard"
            value={lang}
            onChange={handleChange}
            autoWidth
            sx={{
                color: `${useThemeDark() ? 'white' : 'black'}`,
            }}
        >
            {Object.entries(supportedLangs).map(([code, name]) => (
                <MenuItem className="text-white" key={code} value={code}>
                    {name}
                </MenuItem>
            ))}
        </Select>
    );
}
