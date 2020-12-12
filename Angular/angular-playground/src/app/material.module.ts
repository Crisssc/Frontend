import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from "@angular/core";

@NgModule({
  imports: [
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  exports: [
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
  ]
})
export class MaterialModule { }