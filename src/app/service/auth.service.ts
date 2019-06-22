import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

interface AuthResponseData {
	kind: string;
	idToken: string;
	email: string;
	refreshToken: string;
	expiresIn: string;
	localId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

	constructor(private httpClient: HttpClient) { }

	signUp(email: string, password: string) {
		return this.httpClient.post<AuthResponseData>(
			'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBjDUek8U9qshphxLNhTmjFWkDu_afyq0o',
			{ email: email, password: password, returnSecureToken: true }
		).pipe(catchError(errorResponseData => {
			let errorMessage = 'An unknown error occurred.';
			if (!errorResponseData.error || !errorResponseData.error.error) {
				return throwError(errorMessage);
			}
			switch (errorResponseData.error.error.message) {
				case 'EMAIL_EXISTS':
					errorMessage = 'The email you provided already exists.';
			}
			return throwError(errorMessage);
		}));
	}

	login() {

	}
}