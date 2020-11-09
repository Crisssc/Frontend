import { RouterModule, Routes } from '@angular/router';

import { CounterComponent } from './components/counter/counter.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: '', redirectTo: '/counter', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
