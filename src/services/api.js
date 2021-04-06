import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.42.130:3234'
})

export default api;