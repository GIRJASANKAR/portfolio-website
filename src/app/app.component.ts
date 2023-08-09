import { Component } from '@angular/core';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 constructor(private _snackBar: MatSnackBar){}
  title = 'Girja';
  list=[
  {
    name:'Name cannot be blank',
    username:'hackSultan',
    content:'This is great stuff right here..'
  },
  {
    name:'Gift Egwuenu ✨',
    username:'lauragift_',
    content:'Your projects are amazing! 👍 💪'
  },
  {
    name:'Champagne Papi',
    username:'loIyparty',
    content:'Man your portfolio is 🔥'
  },
  {
    name:'Ruks 🦍',
    username:'@ruks_ahwin',
    content:'Really impressive man 👏'
  },
  {
    name:'Amarachi Iheanacho',
    username:'amaraIheanach0',
    content:'Your site is elite, lovely work.'
  },
  {
    name:'Moyi.',
    username:'moyiabioye',
    content:'Looking good man 🔥🔥'
  },
  {
    name:'Shula ☘️',
    username:'AsoAmarachi',
    content:'Beautiful site you have! ❤️'
  },
  {
    name:'Amarachi Iheanacho',
    username:'amaraIheanach0',
    content:'Your site is elite, lovely work.'
  },
  {
    name:'Name cannot be blank',
    username:'hackSultan',
    content:'This is great stuff right here..'
  },
  {
    name:'Gift Egwuenu ✨',
    username:'lauragift_',
    content:'Your projects are amazing! 👍 💪'
  },
  {
    name:'Champagne Papi',
    username:'loIyparty',
    content:'Man your portfolio is 🔥'
  },
  {
    name:'Ruks 🦍',
    username:'@ruks_ahwin',
    content:'Really impressive man 👏'
  },
  {
    name:'Amarachi Iheanacho',
    username:'amaraIheanach0',
    content:'Your site is elite, lovely work.'
  },
  {
    name:'Moyi.',
    username:'moyiabioye',
    content:'Looking good man 🔥🔥'
  },
  {
    name:'Shula ☘️',
    username:'AsoAmarachi',
    content:'Beautiful site you have! ❤️'
  },
  ]
  openSnackBar(message="Done", action = 'opened') {
    this._snackBar.open(message, action, {
    duration: 5000,
    verticalPosition: 'bottom',
    horizontalPosition:'center',
  });
}
}
