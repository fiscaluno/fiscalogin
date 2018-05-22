import axios from 'axios';

const api = axios.create({
    baseURL: 'https://fiscaluno-mu.herokuapp.com/users',
});

export default api;