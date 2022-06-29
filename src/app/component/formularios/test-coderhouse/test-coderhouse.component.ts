import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, AbstractControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-test-coderhouse',
  templateUrl: './test-coderhouse.component.html',
  styleUrls: ['./test-coderhouse.component.scss']
})
export class TestCoderhouseComponent implements OnInit {

  autor: string='Cristhian Thies Aresti'
  curso: string='Curso Angular - Coerhouse'

  @Output() nombrePersona: string = '';

  testForm!: FormGroup;
  submitted=false;

  public Paises = [
    {id: 1, name:'Chile'},
    {id: 2, name:'Parú'},
    {id: 3, name:'Argentina'},
    {id: 4, name:'Brasil'},
    {id: 5, name:'Bolivia'}
    ];

  constructor(private formBuilder: FormBuilder){}

  ngOnInit() {
    this.testForm = this.formBuilder.group({
      formNombre: ['',[Validators.required, Validators.minLength(2)]],
      formApellido: ['',[Validators.required,Validators.minLength(2)]],
      formCorreo: ['', [Validators.required, Validators.email]],
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.testForm.controls;
  }

  onSubmit(){
    this.submitted=true
    if (this.testForm.invalid){
      return
    }
    alert('success')
    console.log("Form Submitted")
    console.log(this.testForm.value)
  }

  onReset(): void {
    this.submitted = false;
    this.testForm.reset();
  }

}
