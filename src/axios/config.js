// default axios after logged in

import axios from "axios";
import { JWT_COOKIE_KEY } from "../constants";
import cookie from "react-cookies";

const jwt = cookie.load(JWT_COOKIE_KEY);
export default axios.create(
  {
    baseURL: 'http://localhost:8080/',
    headers: {
      Authorization: 'Bearer ' + jwt
    }
  }
)