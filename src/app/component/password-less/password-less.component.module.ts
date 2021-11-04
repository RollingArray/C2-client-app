/**
 * © Rolling Array https://rollingarray.co.in/
 *
 *
 * @summary Password less module
 * @author code@rollingarray.co.in
 *
 * Created at     : 2021-05-18 19:17:20 
 * Last modified  : 2021-05-18 19:17:37
 */


import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/module/shared.module";
import { IonicModule } from "@ionic/angular";
import { PasswordLessComponent } from './password-less.component';
@NgModule({
  imports: [CommonModule, SharedModule, IonicModule],

  declarations: [PasswordLessComponent],
  exports: [PasswordLessComponent],
  entryComponents: [PasswordLessComponent]
})
export class PasswordLessModule {}
