import axios from "axios";

export const AuthService = {
  getJWT: (username, password) => {
    return axios.post("api/authenticate", {
      "username": username,
      "password": password
    });
  },
}