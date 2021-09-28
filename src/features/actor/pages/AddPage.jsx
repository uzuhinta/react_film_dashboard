import { Button, Dialog, DialogTitle, FormGroup } from '@mui/material';
import { createActor } from 'api/actorApi';
import AreaField from 'components/CustomField/AreaField';
import DatepickerField from 'components/CustomField/DatepickerField';
import FileField from 'components/CustomField/FileField';
import InputField from 'components/CustomField/InputField';
import { FastField, Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import ActorForm from './components/ActorForm';

const initialValues = {
    name: '',
    dob: '',
    summary: '',
    fileDatas: '',
};

const validationSchema = Yup.object().shape({
    name: Yup.string().required('This field is require'),
    dob: Yup.string().required('This field is require'),
    summary: Yup.string().required('This field is require'),
    fileDatas: Yup.mixed().required('This field is require'),
});

function AddPage() {
    const [open, setOpen] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = async (value) => {
        const formData = new FormData();
        formData.append('name', value.name);
        formData.append('dob', value.dob);
        formData.append('summary', value.summary);
        formData.append('fileDatas', value.fileDatas);
        try {
            const res = await createActor(formData);
            setIsSuccess(true);
            setOpen(true);
        } catch (e) {
            console.log(e);
            setIsSuccess(false);
            setOpen(true);
        }
    };
    return (
        <>
            <Dialog onClose={handleClose} open={open}>
                <div className="bg-primary shadow-xl px-5 py-3">
                    <div className="text-center text-primary font-bold text-2xl pb-3 border-b border-gray-600">
                        Information
                    </div>
                    <div className="mt-3 px-11 text-primary">
                        {isSuccess
                            ? 'Create actor successfully'
                            : 'Error, Try again'}
                    </div>
                    <div className="flex justify-center">
                        <Button onClick={handleClose}>Close</Button>
                    </div>
                </div>
            </Dialog>
            <ActorForm
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            />
            <Button variant="contained" onClick={handleClickOpen}>
                Toggle
            </Button>
        </>
    );
}

export default AddPage;
