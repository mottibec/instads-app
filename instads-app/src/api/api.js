import axios from "axios";

class Api {
    async getUsers() {
        var response = await axios.get("https://instads.herokuapp.com/users");
        return response.data;
    }
}
export default Api;