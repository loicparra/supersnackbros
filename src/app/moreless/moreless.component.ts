import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {Moreless} from '../models/moreless.model';

@Component({
  selector: 'ssb-moreless',
  templateUrl: './moreless.component.html',
  styleUrls: ['./moreless.component.css']
})
export class MorelessComponent implements OnInit {
  @Input() moreless: Moreless;
  form: FormGroup;
  lessCtrl: FormControl;
  moreCtrl: FormControl;
  constructor(private _formbuilder: FormBuilder) {
    this.lessCtrl = _formbuilder.control('');
    this.moreCtrl = _formbuilder.control('');
    this.form = _formbuilder.group({
      less: this.lessCtrl,
      more: this.moreCtrl,
    });
  }

  ngOnInit() {
  }
}
