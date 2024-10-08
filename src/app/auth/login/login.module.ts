import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { SplashScreenPageModule } from 'src/app/components/splash-screen/splash-screen.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    SplashScreenPageModule
  ],
  declarations: [LoginPage],
  exports:[LoginPage]
})
export class LoginPageModule {}
