import axios from 'axios';
import AuthService from './services/AuthService';

const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
});

instance.interceptors.request.use((config) => {
    const token = AuthService.getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default instance;
