export class User {
  constructor(
    public name: String,
    public email?: String,
    public password?: String,
    private token?: String
  ) {}

  getToken() {
    return this.token;
  }

  setToken(token: String) {
    this.token = token;
  }
}
