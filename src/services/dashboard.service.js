import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080';

class DashboardService {
    getDashBoard(req) {
        return axios.post(API_URL + '/api/dashboard/', req, { headers: authHeader() });
    }
}

export default new DashboardService();