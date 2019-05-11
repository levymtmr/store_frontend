import { Produto } from "./produto.model";

export class Storage {
  constructor(
    public id?: number,
    public product?: Produto,
    public amount?: number,
    public date_storage?: Date
  ) {}

  static createFromJSON(data: any) {
    return Object.assign(new Storage(), data);
  }
}
