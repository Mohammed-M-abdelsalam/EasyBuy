import axios from "axios";

// signup
export function sendDataToSignup(values){
    const options = {
        url: 'https://ecommerce.routemisr.com/api/v1/auth/signup',
        method: 'POST',
        data: {
            name: values.name,
            email: values.email,
            password: values.password,
            rePassword: values.rePassword,
            phone: values.phone
        }
    }

    return axios.request(options)
    .then(res => {
        return res.data;
    }).catch(err => {
        throw err;
    })
}

// login
export function sendDataToLogin(values) {
    const options = {
        url: 'https://ecommerce.routemisr.com/api/v1/auth/signin',
        method: 'POST',
        data: {
            email: values.email,
            password: values.password
        }
    }

    return axios.request(options)
    .then(res => {
        console.log(res.data);
        return res.data;
    }).catch(err => {
        throw err;
    })
}