import { RouterModule, Routes } from '@angular/router';

import { AutoCompleteListComponent } from './components/auto-complete-list/auto-complete-list.component';
import { CounterComponent } from './components/counter/counter.component';
import { FormPracticeComponent } from './components/form-practice/form-practice.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'form-practice', component: FormPracticeComponent },
  { path: 'auto-complete-practice', component: AutoCompleteListComponent },
  { path: '', redirectTo: '/counter', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
