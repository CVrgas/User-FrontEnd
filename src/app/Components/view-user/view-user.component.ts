import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { user } from 'src/app/Models/user.model';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements  OnInit{

  userdetail: user ={
    id: '',
    firstName: '',
    lastName: ''
  };

  constructor(private route: ActivatedRoute, private appServices: AppService, private router: Router){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if(id) {
          this.appServices.getThis(id).subscribe({
            next: (Response) => {
              this.userdetail = Response;
            }
          });
        }
      }
    })
  };

  deleteUser(){
    this.appServices.deleteUser(this.userdetail.id)
    .subscribe({
      next: (Response) => {
        console.log("deleted")
        this.router.navigate(['home']);
      }
    });
  };
  updateUser() {
    this.appServices.updateUser(this.userdetail.id, this.userdetail)
    .subscribe({
      next: (Response) => {
        this.router.navigate(['home']);
      }
    });
  };  
}