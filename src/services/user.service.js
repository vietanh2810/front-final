import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080';

class UserService {
    validateUser(userId) {
        return axios.put(API_URL + '/api/users/validate/' + userId,null, { headers: authHeader() });
    }

    getAdminBoard() {
        return axios.get(API_URL + '/api/users/', { headers: authHeader() });
    }
}

export default new UserService();