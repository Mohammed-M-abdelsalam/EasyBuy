import axios from "axios";

export function getAllProducts(params={}) {
    const options = {
        method: 'GET',
        url: 'https://ecommerce.routemisr.com/api/v1/products',
        params: params
    }
   return axios.request(options)
   .then(res => {
       return res.data;
   }).catch(err => {
       throw err;
   });
}


// get specific product by id
export function getProductById(id) {
    const options = {
        method: 'GET',
        url: `https://ecommerce.routemisr.com/api/v1/products/${id}`
    }
    return axios.request(options)
    .then(res => {
        return res.data;
    }).catch(err => {
        throw err;
    });
}
