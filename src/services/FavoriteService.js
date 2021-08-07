import axios from "axios";

export default class FavoriteService {
  getByUserId(id) {
   return axios.get(
      `http://localhost:8080/api/favorite/GetDetailByUserId?userId=` + id
    );
  }
}
