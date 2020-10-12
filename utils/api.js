import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.timeout = 20000;

// TODO Add interceptor for error handling

export default axios;
