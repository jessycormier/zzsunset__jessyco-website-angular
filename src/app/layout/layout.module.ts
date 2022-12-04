import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainNavComponent } from './main-nav/main-nav.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    MainNavComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainNavComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
