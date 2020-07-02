import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-4f426.firebaseio.com/'
})

export default instance