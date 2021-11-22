import axios from 'axios';

const BASE_URI = '';
const client = axios.create({
    baseURL: BASE_URI,
    json: true
});

const APIClient =  {
    getSources() {
        return this.perform('get', '/sources');
    },

    async perform (method, resource, data) {
        return client({
            method,
            url: resource,
            data,
        }).then(req => {
            return req.data
        })
    }
}

export default APIClient;