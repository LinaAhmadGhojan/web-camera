import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { WebcamModule } from 'ngx-webcam';
import { FormComponent } from './form/form.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'form', component: FormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ,WebcamModule
    ,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }








