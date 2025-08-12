import axios from "axios"

const instance = axios.create({
  baseURL: 'https://asaindus.herokuapp.com/application/',
    // baseURL: 'http://localhost:6969/application/',
});

export default instance