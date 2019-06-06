import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'servers-component',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  userName = ''
    
  constructor() { }

  ngOnInit() {
  }


  isUserNameEmpty() {
     return this.userName == '';
  }

  onButtonClick(event: any) {
      
      alert('oi');
      
      this.userName = '';
  }
}
