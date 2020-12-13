import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddProductComponent } from './add-product.component';

fdescribe('add-product component tests', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;

  // beforeEach() function is executed before each testing is executed
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [AddProductComponent],
      imports: [FormsModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
  });

  // it() method allows you to perform individual test
  it('is add-product component defined', () => {
    expect(component).toBeDefined();
  });

  it('is from valid when empty', () => {
    let itemName = component.rForm.controls['name'];
    itemName.setValue('Moooo');
    let itemPrice = component.rForm.controls['price'];
    itemPrice.setValue('10000');
    let itemShipping = component.rForm.controls['shipping'];
    itemShipping.setValue('100');

    expect(component.rForm.value).toBeTruthy();
  });

  it('is form invalid when price less than 3000', () => {
    let itemName = component.rForm.controls['name'];
    itemName.setValue('Moooo');
    let itemPrice = component.rForm.controls['price'];
    itemPrice.setValue(1000);
    let itemShipping = component.rForm.controls['shipping'];
    itemShipping.setValue('100');

    expect(component.rForm.valid).toBeFalsy();
    expect(component.rForm.controls['price'].valid).toBeFalsy();
    // check the specific validation (which is min) is failed
    expect(itemPrice.errors['min']).toBeDefined();
  });

  it('is form invalid when length of name is less than 3', () => {
    let itemName = component.rForm.controls['name'];
    itemName.setValue('M');
    let itemPrice = component.rForm.controls['price'];
    itemPrice.setValue(10000);
    let itemShipping = component.rForm.controls['shipping'];
    itemShipping.setValue('100');

    expect(component.rForm.invalid).toBeTruthy();
    expect(component.rForm.controls['name'].valid).toBeFalsy();
    // minlength "l" should be lower case
    expect(itemName.errors['minlength']).toBeDefined();
  });
});
