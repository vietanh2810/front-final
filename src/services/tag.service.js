import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080';

class TagService {
    getTags() {
        return axios.get(API_URL + '/api/tags/', { headers: authHeader() });
    }
}

export default new TagService();