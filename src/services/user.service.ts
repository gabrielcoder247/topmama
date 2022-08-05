import axios from 'axios';
import authHeader from './auth.header';
// import { useParams } from "react-router-dom";


// const params = useParams();

const API_URL = `https://reqres.in/api/users/`;


class UserService {
  getPublicContent() {
    return axios.get(API_URL, { headers: authHeader() });
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

}

export default new UserService();