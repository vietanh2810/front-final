import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080';

class EventsService {
    getEventTypes() {
        return axios.get(API_URL + '/api/event/types', { headers: authHeader() });
    }
}

export default new EventsService();