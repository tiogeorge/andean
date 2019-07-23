import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../componentes/login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { MaterialModule } from '../material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class LoginModule { }