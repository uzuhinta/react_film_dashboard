import { Button, FormGroup } from '@mui/material';
import InputField from 'components/CustomField/InputField';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const initialValues = {
    fullname: '',
};

const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('This field is require'),
});

function AddPage() {
    const onSubmit = (value) => {
        console.log(value);
    };
    return (
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
                        <FormGroup>
                            <Button type="submit">Add actor</Button>
                        </FormGroup>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default AddPage;
