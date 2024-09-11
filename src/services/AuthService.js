import axios from "axios";

export const AuthService = {
  getJWT: (username, password) => {
    return axios.post("http://localhost:8080/api/authenticate", {
      "username": username,
      "password": password
    });
  },
}