import * as Yup from 'yup';

const phoneRegex = /^(\+2)?01[0125]\d{8}$/;
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

export const SignupSchema = Yup.object().shape({
    name: Yup.string('name must be a string').min(3, 'Name must be at least 3 characters').required('Name is required'),
    email: Yup.string('email must be a string').email('Invalid email').email('Invalid email').required('Email is required'),
    password: Yup.string('password must be a string').matches(passwordRegex, 'password must be at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character').required('Password is required'),
    rePassword: Yup.string('confirmPassword must be a string').oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
    phone: Yup.string('phone must be a string').matches(phoneRegex, 'Invalid phone number. your phone must be egyptian').required('Phone number is required'),
    checkbox: Yup.boolean('checkbox must be a boolean').oneOf([true], 'Checkbox must be checked')
});