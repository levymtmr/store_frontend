export class Produto {
  constructor(
    public id?: number,
    public name?: string,
    public date?: Date,
    public price?: number
  ) {}

  static createFromJSON(data: any) {
    return Object.assign(new Produto(), data);
  }
}
