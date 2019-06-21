import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from 'src/app/service/data-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    @Output()
    navClicked = new EventEmitter<string>();

    constructor(private dataStorageService: DataStorageService) { }

    ngOnInit() {
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
}
