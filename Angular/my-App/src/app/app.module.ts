import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AutoCompleteListComponent } from './components/auto-complete-list/auto-complete-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { CounterComponent } from './components/counter/counter.component';
import { FormPracticeComponent } from './components/form-practice/form-practice.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HeaderComponent,
    FormPracticeComponent,
    AutoCompleteListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
