import axios from "axios";

// Get all categories
export function getCategories() {
    const options = {
        method: 'GET',
        url: 'https://ecommerce.routemisr.com/api/v1/categories'
    }
    return axios.request(options)
    .then(res => {
        return res.data;
    }).catch(err => {
        throw err;
    });
}

