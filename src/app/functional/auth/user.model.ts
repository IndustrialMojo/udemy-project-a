export class User {
	constructor(
		public email: string,
		public id: string,
		private _authToken: string,
		private _authTokenExpiry: Date) {

	}

	get authToken() {
		if (!this._authTokenExpiry || new Date() > this._authTokenExpiry) {
			return null;
		}

		return this._authToken;
	}

	getAuthTokenExpiry() {
		return this._authTokenExpiry;
	}

}