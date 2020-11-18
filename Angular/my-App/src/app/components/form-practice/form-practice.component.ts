import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-practice',
  templateUrl: './form-practice.component.html',
  styleUrls: ['./form-practice.component.scss'],
})
export class FormPracticeComponent {
  count = {
    like: {
      count: 100,
      clicked: false,
    },
    dislike: {
      count: 100,
      clicked: false,
    },
  };

  myForm = this.fb.group({
    firstName: [''],
    lastName: [''],
  });

  constructor(private fb: FormBuilder) {}

  clickLike() {
    if (this.count.like.clicked) {
      this.count.like.clicked = false;
      this.count.like.count--;
    } else {
      this.count.like.clicked = true;
      this.count.like.count++;
      if (this.count.dislike.clicked) {
        this.count.dislike.clicked = false;
        this.count.dislike.count--;
      }
    }
  }

  clickDislike() {
    if (this.count.dislike.clicked) {
      this.count.dislike.clicked = false;
      this.count.dislike.count--;
    } else {
      this.count.dislike.clicked = true;
      this.count.dislike.count++;
      if (this.count.like.clicked) {
        this.count.like.clicked = false;
        this.count.like.count--;
      }
    }
  }
}
