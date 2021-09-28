import { Button, FormGroup } from '@mui/material';
import AreaField from 'components/CustomField/AreaField';
import DatepickerField from 'components/CustomField/DatepickerField';
import FileField from 'components/CustomField/FileField';
import InputField from 'components/CustomField/InputField';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const initialValues = {
    fullname: '',
    dob: '',
    summary: '',
    fileDatas: '',
};

const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('This field is require'),
    dob: Yup.string().required('This field is require'),
    summary: Yup.string().required('This field is require'),
    fileDatas: Yup.mixed().required('This field is require'),
});

function AddPage() {
    const onSubmit = (value) => {
        console.log('onsubmmit');
        console.log(value);
    };
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {(formikProps) => {
                    const { isSubmitting } = formikProps;
                    return (
                        <Form>
                            <FastField
                                name="fullname"
                                component={InputField}
                                label="Full name"
                                placeholder="Your full name"
                            />
                            <FastField
                                name="dob"
                                component={DatepickerField}
                                label="Birthday"
                                placeholder="yyyy-MM-dd"
                            />
                            <FastField
                                name="summary"
                                component={AreaField}
                                label="Summary"
                                placeholder="Summary..."
                            />
                            <FastField
                                name="fileDatas"
                                component={FileField}
                                label="Image"
                            />

                            <FormGroup>
                                <Button type="submit">Add actor</Button>
                            </FormGroup>
                        </Form>
                    );
                }}
            </Formik>
        </>
    );
}

export default AddPage;
