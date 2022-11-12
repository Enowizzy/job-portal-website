import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public header: HeaderService) { }

  ngOnInit(): void {
    this.header.hide();
  }

}
