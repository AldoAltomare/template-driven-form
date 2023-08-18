import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent {

generi:string[]=['uomo','donna','altro']

  @ViewChild('f',{static:true}) form!:NgForm;

  submit(form:NgForm){
console.log(form)
  }

setDati(){
let datiDaInserire = {
  nome:'Nome Esempio',
  cognome:'Cognome Esempio',
  authData:{
  email:'esempio@esempio.it',
  password:'password'
},
cap:12312
}
this.form.form.patchValue(datiDaInserire)
}

ngOnInit(){
  this.form.statusChanges?.subscribe(status => console.log(status))
}

}
