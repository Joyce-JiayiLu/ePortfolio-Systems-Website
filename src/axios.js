import axios from "axios";

// Set config defaults when creating the instance
var instance = axios.create({
    baseURL: "https://geniusolio.herokuapp.com"
    // baseURL: "http://localhost:3000/api"

});


instance.interceptors.request.use((request) => {
    console.log(request);
    return request;
}, error => {
    console.log(error);
    Promise.reject(error);
});

export default instance;