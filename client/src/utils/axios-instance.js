import axios from 'axios';



export const client =  (token) => {
    // console.log('inside client',token)
    const defaultOptions = {
        headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : '',
        },
    };

    return {
        get: async (url, options = {}) => await axios.get(url, { ...defaultOptions, ...options }),
        post: async (url, data={}, options = {}) => await axios.post(url, data, { ...defaultOptions, ...options }),
    };
};
