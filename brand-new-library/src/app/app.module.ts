import { CommonModule } from '@angular/common';
import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';

import { Routes, RouterModule, Router, ROUTES } from '@angular/router';

import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    //RouterModule.forChild(routes)
  ],
  providers: [
    {
      provide: ROUTES,
      useValue: routes,
      multi: true
    },
    {
      provide: ANALYZE_FOR_ENTRY_COMPONENTS,
      useValue: routes, // provide them here too
      multi: true
    }
  ],
})
export class AppModule { }
