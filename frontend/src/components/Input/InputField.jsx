import React from 'react';
import { Field } from 'react-final-form';

const InputField = ({ name, placeholder, validate, type }) => {
    return (
        <>
            <Field name={name} validate={validate}>
                {({ input, meta }) => (
                    <div className='d-flex flex-column col-8'>
                        <input
                            {...input}
                            type={type}
                            placeholder={placeholder}
                            className='my-2 p-2 '
                        />
                        {meta.error && meta.touched && <span className='error text-start'>{meta.error}</span>}
                    </div>
                )}
            </Field>
        </>
    );
};

export default InputField;
