import firebase from 'firebase';

export default class CityRepository {
  ref: firebase.firestore.CollectionReference;
  query: firebase.firestore.Query | null;

  constructor() {
    this.ref = firebase.firestore().collection('cities');
    this.query = null;
  }

  async get(): Promise<any[]> {
    if (this.query === null) {
      throw new Error('this query is not found.');
    }
    const querySnapshot = await this.query.get();
    return querySnapshot.docs.map((doc) => {
      return doc.data();
    });
  }

  async getSnapshot(): Promise<any[]> {
    if (this.query === null) {
      throw new Error('this query is not found.');
    }
    const cities: any[] = [];
    await this.query.onSnapshot((querySnapshot) => {
      cities.length = 0;
      querySnapshot.docs.map((doc) => {
        cities.push(doc.data());
      });
    });
    return cities;
  }

  async getAll(): Promise<any[]> {
    const querySnapshot = await this.ref.get();
    return querySnapshot.docs.map((doc) => {
      return doc.data();
    });
  }

  /**
   * Realtimeで更新されたデータを取得
   */
  async getSnapshotAll(): Promise<any[]> {
    const cities: any[] = [];
    await this.ref.onSnapshot((querySnapshot) => {
      cities.length = 0;
      querySnapshot.docs.map((doc) => {
        cities.push(doc.data());
      });
    });
    return cities;
  }

  async getCityBy(key: string): Promise<any> {
    const doc = await this.ref.doc(key).get();
    return doc.data();
  }

  async getCitySnapshotBy(key: string): Promise<any> {
    await this.ref.doc(key).onSnapshot((doc) => {
      return doc.data();
    });
  }

  async update(key: string, data: any): Promise<void> {
    await this.ref.doc(key).update(data);
  }

  where(fieldPath: string, op: firebase.firestore.WhereFilterOp, value: any): CityRepository {
    if (this.query === null) {
      this.query = this.ref.where(fieldPath, op, value);
    } else {
      this.query = this.query.where(fieldPath, op, value);
    }
    return this;
  }
}
