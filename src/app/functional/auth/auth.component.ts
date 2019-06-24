import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from 'src/app/service/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

	isLogin = true;
	isLoading = false;
	error: string = null;

	constructor(private authService: AuthService, private router: Router) { }

	onSwitchMode() {
		this.isLogin = !this.isLogin;
	}

	ngOnInit() {
	}

	onSubmit(form: NgForm) {
		if (!form.valid) {
			return;
		}

		let authObservable: Observable<AuthResponseData>;

		const email = form.value.email;
		const password = form.value.password;

		this.isLoading = true;

		if (this.isLogin) {
			authObservable = this.authService.login(email, password);
		} else {
			authObservable = this.authService.signUp(email, password);
		}

		authObservable.subscribe(
			responseData => {
				console.log(responseData);
				this.isLoading = false;
				this.router.navigate(['/recipebook']);
			}, errorMessage => {
				console.log(errorMessage);
				this.error = errorMessage;
				this.isLoading = false;
			}
		);

		form.reset();
	}
}
