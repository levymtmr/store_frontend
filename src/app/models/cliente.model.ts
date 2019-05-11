export class Cliente {
  constructor(
    public id?: number,
    public name?: string,
    public phone?: string,
    public addres?: string
  ) {}

  static createFromJSON(data: any) {
    return Object.assign(new Cliente(), data);
  }
}
