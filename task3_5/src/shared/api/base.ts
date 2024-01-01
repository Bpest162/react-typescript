import axios from "axios";


const BASE = 'https://jsonplaceholder.typicode.com'

const apiClient = axios.create({
    baseURL: BASE,
    headers: {
        "Content-type": "application/json"
    }
});

export  default apiClient;

