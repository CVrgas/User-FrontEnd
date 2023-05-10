import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private appService: AppService, private router: Router) {}

  some: any[] = [];
  user: string = "";
  ngOnInit() {
    this.loadsome();
  }
  loadsome() {
    this.appService.getSome().subscribe((data: any) => {
      this.some = data;
    }) 
  }
}
