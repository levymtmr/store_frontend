export class Product {
  constructor(
      public id: number,
    public name: string,
    public price: number,
    public date: Date,
    public description: string,
    public quantity: number,
    public category: string,
    public unity: string
  ) {}
}
