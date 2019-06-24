import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { DataStorageService } from 'src/app/service/data-storage.service';
import { AuthService } from 'src/app/service/auth.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

	private subscription: Subscription;

	isAuthenticated = false;

	@Output()
	navClicked = new EventEmitter<string>();

	constructor(private dataStorageService: DataStorageService, private authService: AuthService) { }

	ngOnInit() {
		this.subscription = this.authService.user.subscribe(user => {
			this.isAuthenticated = !!user;
		});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	onNavClick(feature: string) {
		this.navClicked.emit(feature);
	}

	onSaveData() {
		this.dataStorageService.storeRecipes();
	}

	onFetchData() {
		this.dataStorageService.fetchRecipes().subscribe();
	}

	onLogout() {
		this.authService.logout();
	}
}
