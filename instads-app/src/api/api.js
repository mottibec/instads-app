import axios from "axios";

class Api {
    rootUrl = "https://instads.herokuapp.com/";
    authTokenHeader;
    async getUsers() {
        var response = await axios.get(`${this.rootUrl}users`);
        return response.data;
    }
    async login(auth) {
        var response = await axios.post(`${this.rootUrl}auth/login`, auth);
        this.setToken(response.data.access_token);
        return response.data.username;
    }
    async signup(signupData) {
        var response = await axios.post(`${this.rootUrl}auth/signup`, signupData);
        this.setToken(response.data.access_token);
        return response.data.username;
    }
    setToken(token) {
        this.authTokenHeader = `Authorization: Bearer ${token}`;
    }
    getAuthenticated(url) {
        return axios.get(url, { headers: this.authTokenHeader });
    }
    postAuthenticated(url, body) {
        return axios.post(url, body, { headers: this.authTokenHeader });
    }

}
export default Api;