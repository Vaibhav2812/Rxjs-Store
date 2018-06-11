import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginFormComponent} from '../auth/components/login-form/login-form.component';
import {AppComponent} from "../app.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
