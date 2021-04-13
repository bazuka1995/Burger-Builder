import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-creater-7a861-default-rtdb.firebaseio.com/'
});

export default instance;