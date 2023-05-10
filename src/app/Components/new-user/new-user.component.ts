import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})

export class NewUserComponent {
  
  constructor(private appService: AppService, private router: Router){}

  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });

  userCount = 0;

  onSubmit(){
    this.appService.addSome(this.userForm.value).subscribe((data =>{
      console.log('message:::', data)
      console.log(this.userCount);
      this.userForm.reset();
      this.appService.getSome();
      this.router.navigate(['home'])
    }))
  }
}
