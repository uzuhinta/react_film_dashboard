import { Button, FormGroup } from '@mui/material';
import AreaField from 'components/CustomField/AreaField';
import DatepickerField from 'components/CustomField/DatepickerField';
import FileField from 'components/CustomField/FileField';
import InputField from 'components/CustomField/InputField';
import { FastField, Form, Formik } from 'formik';
import React from 'react';

function ActorForm({ initialValues, validationSchema, onSubmit }) {
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
                            name="name"
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
    );
}

export default ActorForm;
