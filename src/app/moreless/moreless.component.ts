import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'ssb-moreless',
  templateUrl: './moreless.component.html',
  styleUrls: ['./moreless.component.css']
})
export class MorelessComponent implements OnInit {
  @Output() increment = new EventEmitter();
  @Output() decrement = new EventEmitter();
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

  more() {
    this.increment.emit();
  }
  less() {
    this.decrement.emit();
  }
}
