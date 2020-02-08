export default class QiitaItem {
  constructor(
    public body: string,
    public created_at: string,
    public title: string,
    public url: string,
  ) {}

  shortTitle(): string {
    return this.title.substr(0, 20) + '...';
  }
}
