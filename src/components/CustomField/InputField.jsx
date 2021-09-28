import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, InputLabel, TextField } from '@mui/material';
import { Label } from '@mui/icons-material';
import { ErrorMessage } from 'formik';
import { useThemeDark } from 'utils';

function InputField(props) {
    const { form, field, type, label, placeholder, disabled } = props;
    const { name, value, onChange, onBlur } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];
    const isDark = useThemeDark();

    const bg = {
        backgroundColor: `${isDark ? '#ccccccff' : '#ffffff'}`,
        transition: 'all ease 0.3s',
        padding: 0,
        borderRadius: '5px',
    };

    const text = {
        color: `${isDark ? '#f7fafc' : '#2d3748'}`,
        transition: 'all ease 0.3s',
    };
    return (
        <FormGroup>
            {label && (
                <div className="ml-3 mb-1 mt-5">
                    <InputLabel sx={text} for={name}>
                        {label}
                    </InputLabel>
                </div>
            )}
            <TextField
                id={name}
                style={bg}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                error={showError}
                placeholder={placeholder}
                disabled={disabled}
                invalid={showError}
                helperText={`${showError ? errors[name] : ''}`}
            />
        </FormGroup>
    );
}

InputField.propTypes = {};

export default InputField;
