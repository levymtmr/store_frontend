export class Conta {
  constructor(
    public id?: number,
    public description?: string,
    public payday?: string,
    public price?: number,
    public category?: string
  ) {}

  static createFromJSON(data: any) {
    return Object.assign(new Conta(), data);
  }
}
