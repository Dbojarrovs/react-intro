import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://pizzapal-c296e-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;