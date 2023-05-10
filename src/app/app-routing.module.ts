import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { NewUserComponent } from './Components/new-user/new-user.component';
import { ViewUserComponent } from './Components/view-user/view-user.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent
  },
  {
    path: 'user/add',
    component: NewUserComponent
  },
  {
    path: 'home',
    component: HeaderComponent
  },
  {
    path: 'user/view/:id',
    component: ViewUserComponent
  },
  {
    path: 'home/user/view/:id',
    component: ViewUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
