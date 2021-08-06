import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ozw9wlyj0l.execute-api.us-east-1.amazonaws.com/dev'
});

export default api