import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public nombreUsuario = "Cristhian Thies"

  color: string = 'red'

  hoy: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }



}
