import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  activeSideBar!:boolean;

  constructor() {
    this.activeSideBar = false;
  }

  ngOnInit(): void {
  }

  toggleSideBar(){
    this.activeSideBar = !this.activeSideBar;
  }

}
