import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Cookies} from '../models/cookies.class';
import {Router} from '@angular/router';

@Component({
  selector: 'ssb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: FormControl;
  form: FormGroup;
  constructor(private _formbuilder: FormBuilder, private router: Router) {
    const cookie = new Cookies();
    if (cookie.get('username') != null) {
      this.router.navigate(['/order']);
    }
    this.name = _formbuilder.control('');
    this.form = _formbuilder.group({
      name: this.name,
    });
  }

  ngOnInit() {
    const cookie = new Cookies();
    console.log(cookie.get('username'), cookie.get('userid'));
  }

  setNickname() {
    const cookie = new Cookies();
    cookie.set('username', this.name.value);
    cookie.set('userid', Math.floor(Math.random() * 10000));
    this.router.navigate(['/order']);
  }

}
