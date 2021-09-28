import { FormGroup, InputLabel, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useThemeDark } from 'utils';

// function Thumb(props) {
//     const [loading, setLoading] = useState(false);
//     const [thumb, setThumb] = useState();
//     useState(() => {
//         if (!props.file) return;
//         let reader = new FileReader();
//         console.log({ file: props.file });
//         reader.onloadstart = () => {
//             setLoading(true);
//         };

//         reader.onloadend = () => {
//             setLoading(false);
//             console.log(reader);
//             setThumb(reader.result);
//         };

//         reader.readAsDataURL(props.file);
//     }, [props.file]);
//     if (!props.file) return null;

//     if (loading) return <div>loading</div>;

//     return (
//         <img
//             onClick={() => console.log(props.file, thumb)}
//             src={thumb}
//             alt={props.file.name}
//             width={200}
//             height={200}
//         />
//     );
// }
class Thumb extends React.Component {
    state = {
        loading: false,
        thumb: undefined,
    };

    componentWillReceiveProps(nextProps) {
        if (!nextProps.file) {
            return;
        }

        this.setState({ loading: true }, () => {
            let reader = new FileReader();

            reader.onloadend = () => {
                this.setState({ loading: false, thumb: reader.result });
            };

            reader.readAsDataURL(nextProps.file);
        });
    }

    render() {
        const { file } = this.props;
        const { loading, thumb } = this.state;

        if (!file) {
            return null;
        }

        if (loading) {
            return <p>loading...</p>;
        }

        return (
            <img
                src={thumb}
                alt={file.name}
                className="img-thumbnail mt-2 object-cover"
                height={400}
                width={400}
            />
        );
    }
}
function FileField(props) {
    const { form, field, type, label, placeholder, disabled } = props;
    const { name, value, onChange, onBlur } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];
    const isDark = useThemeDark();

    const handleChoosenChange = (event) => {
        const changeEvent = {
            target: {
                name: name,
                value: event.currentTarget.files[0],
            },
        };
        field.onChange(changeEvent);
    };

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
                    <InputLabel sx={text} forHtml={name}>
                        {label}
                    </InputLabel>
                </div>
            )}
            <TextField
                type="file"
                id={name}
                style={bg}
                name={name}
                onChange={handleChoosenChange}
                onBlur={onBlur}
                // value={value}
                
                error={showError}
                placeholder={placeholder}
                disabled={disabled}
                invalid={showError}
                helperText={`${showError ? errors[name] : ''}`}
            />
            <div className="border border-gray-300 flex justify-center pb-3">
                <Thumb file={value} />
            </div>
        </FormGroup>
    );
}

export default FileField;
