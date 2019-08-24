export class Order {
    constructor(
    public order_date: String,
    public ship_date: String,
    public payment: number,
    public active: boolean,
    public user: number,
    public order_details: number
    ) {}
}
