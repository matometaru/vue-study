import Repository from "@/repositories/Repository";

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
