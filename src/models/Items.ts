import Item from '@/models/Item'
import { PriceOrder } from "@/models/enums"

export default class Items {
  items: Item[];

  constructor(items: Item[]) {
    this.items = items;
  }

  get(): Item[] {
    return this.items;
  }

  filterByCode(code: string): Items {
    if (code === "") {
      return this;
    }
    
    return new Items(
      this.items.filter((item) => {
        return item.isCode(code);
      }
    ))
  }

  filterByPrice(price: string): Items {
    if (price === "") {
      return this;
    }

    return new Items(
      this.items.filter((item) => {
        return item.isMorePrice(price);
      }
    ))
  }

  sortByPrice(order: PriceOrder): Items {
    let items: Item[];
    if (order.id === PriceOrder.High.id) {
      this.items = this.items.sort((a, b) => {
        return b.price - a.price;
      });
    } else {
      this.items = this.items.sort((a, b) => {
        return a.price - b.price;
      });
    }
    return this;
  }
}