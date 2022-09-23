import { Component, OnInit } from '@angular/core';
import { UnicornsService } from '../factory/unicorns.service';
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";

@Component({
  selector: 'app-form-factory',
  templateUrl: './form-factory.component.html',
  styleUrls: ['./form-factory.component.scss']
})
export class FormFactoryComponent implements OnInit {
  addUnicornForm: FormGroup;
  constructor(
    private _unicornService: UnicornsService,
  ) { }

  ngOnInit() {
    this.addUnicornForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.maxLength(200)]),
      color: new FormControl(null, [Validators.required, Validators.maxLength(7)]),
      gender: new FormControl(null, [Validators.required, Validators.maxLength(200)]),
      age: new FormControl(null, [Validators.required, Validators.maxLength(200)]),
    })
  }

  submitUnicorn(form): void {
    this._unicornService.AddUnicorn(form.value);
  }

}
