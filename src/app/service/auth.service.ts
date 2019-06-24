import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';

import { User } from '../functional/auth/user.model'
import { Router } from '@angular/router';

export interface AuthResponseData {
	kind: string;
	idToken: string;
	email: string;
	refreshToken: string;
	expiresIn: string;
	localId: string;
	registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

	user = new BehaviorSubject<User>(null);

	constructor(private httpClient: HttpClient, private router: Router) { }

	signUp(email: string, password: string) {
		return this.httpClient.post<AuthResponseData>(
			'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBjDUek8U9qshphxLNhTmjFWkDu_afyq0o',
			{ email: email, password: password, returnSecureToken: true }
		).pipe(catchError(this.handleError), tap(response => {
			this.handleAuthentication(response.email, response.localId, response.idToken, response.expiresIn);
		}));
	}

	login(email: string, password: string) {
		return this.httpClient.post<AuthResponseData>(
			'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBjDUek8U9qshphxLNhTmjFWkDu_afyq0o',
			{ email: email, password: password, returnSecureToken: true }
		).pipe(catchError(this.handleError), tap(response => {
			this.handleAuthentication(response.email, response.localId, response.idToken, response.expiresIn);
		}));
	}

	private handleAuthentication(email: string, localId: string, idToken: string, expiresIn: string) {
		const expiry = new Date(new Date().getTime() + +expiresIn * 1000);
		const user = new User(email, localId, idToken, expiry);
		this.user.next(user);
	}

	private handleError(errorResponse: HttpErrorResponse) {
		let errorMessage = 'An unknown error occurred.';
		if (!errorResponse.error || !errorResponse.error.error) {
			return throwError(errorMessage);
		}
		switch (errorResponse.error.error.message) {
			case 'EMAIL_EXISTS':
				errorMessage = 'The email you provided already exists.';
				break;
			case 'EMAIL_NOT_FOUND':
				errorMessage = 'The email you provided was not found.';
				break;
			case 'INVALID_PASSWORD':
				errorMessage = 'The password you provided is not valid.';
				break;
		}
		return throwError(errorMessage);
	}

	logout() {
		this.user.next(null);
		this.router.navigate(['/auth']);
	}
}