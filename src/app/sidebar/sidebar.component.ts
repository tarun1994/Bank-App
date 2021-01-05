import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public BankIFSC: string;
  public logout:string;
  constructor(private routes:Router) { }

  ngOnInit() {
    this.BankIFSC="Bank IFSC";
    this.logout="Logout";
  }
  public logoutUser():void{
    localStorage.removeItem('username');
    this.routes.navigate(['/login']);
  }
}
