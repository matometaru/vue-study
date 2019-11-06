export default class Item {
  code: number;
  name: string;
  price: number;

  constructor(code: number, name: string, price: number) {
    this.code = code;
    this.name = name;
    this.price = price;
  }

  isCode(code: string): boolean {
    return this.code === Number(code);
  }

  isMorePrice(price: string): boolean {
    return this.price >= Number(price);
  }
}
