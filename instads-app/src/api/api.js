import axios from "axios";

class Api {
    rootUrl = window.location.href;
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
    async googleLogin(authToken) {
        var response = await axios.post(`${this.rootUrl}auth/google`, authToken);
        this.setToken(response.data.access_token);
        return response.data.username;
    }
    async facebookLogin(authToken) {
        var response = await axios.post(`${this.rootUrl}auth/facebook`, authToken);
        this.setToken(response.data.access_token);
        return response.data;
    }
    async signup(signupData) {
        var response = await axios.post(`${this.rootUrl}auth/signup`, signupData);
        this.setToken(response.data.access_token);
        return response.data.username;
    }
    async completeSocailSignup(signupData) {
        var response = await this.postAuthenticated(`${this.rootUrl}auth/complete`, signupData);
        return response.data.username;
    }
    getUserDetails() {
        return this.getAuthenticated(`${this.rootUrl}user`);
    }
    setToken(token) {
        this.authTokenHeader = { 'Authorization': `Bearer ${token}` };
    }
    async getAuthenticated(url) {
        const options = {
            headers: this.authTokenHeader
        };
        var response = await axios.get(url, options);
        return response.data;
    }
    postAuthenticated(url, body) {
        const options = {
            headers: this.authTokenHeader
        };
        return axios.post(url, body, options);
    }

}
export default Api;