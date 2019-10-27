export default class PriceOrder {
  private static readonly _values: PriceOrder[] = []

  static readonly NoSelect = new PriceOrder(-1, "未選択")
  static readonly High = new PriceOrder(1, "高い順")
  static readonly Low = new PriceOrder(2, "安い順")

  private constructor(
    readonly id: number,
    readonly name: string,
  ) {
    PriceOrder._values.push(this)
  }

  static fromId(value: number): PriceOrder {
    const priceOrder = PriceOrder._values.find(x => x.id === value)
    if (priceOrder === undefined) {
      throw new Error("priceOrder Enum's id is not found.");
    }
    return priceOrder;
  }

  static values(): PriceOrder[] {
    return  JSON.parse(JSON.stringify(PriceOrder._values));
  }

}