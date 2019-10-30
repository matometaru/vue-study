import axios from "axios";
import config from "@/config";

const baseURL = "https://qiita.com/api/v2/";

const Repository = axios.create({
  baseURL,
  headers: {
    Authorization: "Bearer " + config.token
  }
});

type qiitaItem = {
  body: string;
  created_at: string;
  title: string;
  url: string;
  [key: string]: any;
};

export default {
  async getItemsBy(userId: number): Promise<qiitaItem[]> {
    const { data } = await Repository.get(`users/${userId}/items`);
    return data;
  }
};
