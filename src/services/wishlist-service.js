import axios from "axios";

export function addToWishlist(productId, token) {
    const options = {
        method: "POST",
        url: `https://ecommerce.routemisr.com/api/v1/wishlist`,
        headers: {
            'token': token
        },
        data: {
            productId: productId
        }
    };

    return axios.request(options)
    .then(res => {
        return res.data;
    })
    .catch(error => {
        throw error;
    });
}

export function removeFromWishlist(productId, token) {
    const options = {
        method: "DELETE",
        url: `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
        headers: {
            'token': token
        },

    };

    return axios.request(options)
    .then(res => {
        return res.data;
    })
    .catch(error => {
        throw error;
    });
}

export function getWishlist(token) {
    const options = {
        method: "GET",
        url: `https://ecommerce.routemisr.com/api/v1/wishlist`,
        headers: {
            'token': token
        }
    };

    return axios.request(options)
    .then(res => {
        return res.data;
    })
    .catch(error => {
        throw error;
    });
}
