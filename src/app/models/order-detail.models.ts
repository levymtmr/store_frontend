export class OrderDetail {
  constructor(
    public id: number,
    public price: number,
    public quantity: number,
    public discount: number,
    public products: number,
    public user: number,
    public total: number
  ) {}
}
