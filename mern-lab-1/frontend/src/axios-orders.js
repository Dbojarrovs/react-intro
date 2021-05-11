import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://smoothie-5f668-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;