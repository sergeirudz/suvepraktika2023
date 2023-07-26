// TODO add refresh token in the backend
// todo add expiration date in the backend
export class User {
  constructor(
    public email: string,
    private _token: string,
    private _refreshToken: string,
    private _tokenExpirationDate: Date
  ) {}

  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }

    return this._token;
  }
}
