import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //topics = ['Angular', 'React', 'Vue'];

  public isSubmitted = false;
  public array: any = [];

  userModel = new User(
    'Nihar',
    'rob@test.com',
    5555566666,
    '',
    'evening',
    true
  );

  @ViewChild('f') userForm: NgForm;

  onSubmit() {
    console.log('hi');
    this.isSubmitted = true;

    const id = Date.now();
    const data = {
      id,
      ...this.userForm.value,
    };
    this.array.push(data);
    console.log(this.array);
    this.userForm.reset;
  }

  onDelete(index: any) {
    console.log('deleted');
    this.array.removeAt(index);
  }
}
