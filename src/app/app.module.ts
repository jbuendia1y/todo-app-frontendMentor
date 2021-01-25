import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './components/app/app.component';
import { ListComponent } from './components/list/list.component';
import { NewWorkFormComponent } from './components/new-work-form/new-work-form.component';
import { ListFiltersComponent } from './components/list-filters/list-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NewWorkFormComponent,
    ListFiltersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
