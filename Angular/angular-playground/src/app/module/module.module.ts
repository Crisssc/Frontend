import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { GithubSearchService } from '../shared/services/github-search.service';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from '../material.module';
import { NgModule } from "@angular/core";
import { SearchAndDisplayComponent } from './components/search-and-display/search-and-display.component';

@NgModule({
  imports: [FormsModule, BrowserModule, ReactiveFormsModule, MaterialModule],
  declarations: [HomeComponent, SearchAndDisplayComponent],
  exports: [HomeComponent, SearchAndDisplayComponent],
  providers: [GithubSearchService]
})
export class ModuleModule { }