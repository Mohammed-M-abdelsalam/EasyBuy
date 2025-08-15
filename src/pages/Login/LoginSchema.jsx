import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
    email: Yup.string('email must be a string').email('Invalid email').required('Email is required'),
    password: Yup.string('password must be a string').required('Password is required'),
    checkbox: Yup.boolean('checkbox must be a boolean')
});