import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ContextContainerComponent } from './context-container/context-container.component';
import { NgModule } from '@angular/core';
import { ContextComponent } from './components/context/context.component';

@NgModule({
  declarations: [
    AppComponent,
    ContextContainerComponent,
    ContextComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
