import axios from 'axios';
import config from '@/config';
import QiitaItem from '@/models/QiitaItem';

const baseURL = 'https://qiita.com/api/v2/';

const Repository = axios.create({
  baseURL,
  headers: {
    Authorization: 'Bearer ' + config.qiita.token,
  },
});

export default {
  async getItemsBy(userId: string): Promise<QiitaItem[]> {
    const { data } = await Repository.get(`users/${userId}/items`);
    const qiitaItems = [];
    for (const item of data) {
      qiitaItems.push(new QiitaItem(item.body, item.created_at, item.title, item.url));
    }
    return qiitaItems;
  },
};
