import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://smoothie-b822b-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;