import axios from "axios";

const request = axios.create({
    baseURL: 'https://api.thedogapi.com/v1/images/search',
});

export default request;