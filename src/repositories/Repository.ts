import axios from "axios";

const baseURL = "https://qiita.com/api/v2/";
import config from "@/config";

export default axios.create({
  baseURL,
  headers: {
    Authorization: "Bearer " + config.token
  }
});
