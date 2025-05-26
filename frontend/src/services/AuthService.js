import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export default {
    async login(credentials) {
        const res = await axios.post(`${API_URL}/auth/login`, credentials);
        localStorage.setItem('token', res.data.token);
    },

    async register(data) {
        await axios.post(`${API_URL}/auth/register`, data);
    },

    logout() {
        localStorage.removeItem('token');
    },

    getToken() {
        return localStorage.getItem('token');
    },

    isAuthenticated() {
        return !!localStorage.getItem('token');
    },
};
