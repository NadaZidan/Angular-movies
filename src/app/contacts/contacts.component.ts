import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators} from '@angular/forms'
import { from } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contactsForm=new FormGroup({
    clientName:new FormControl('',
    [Validators.required,Validators.minLength(2),Validators.maxLength(10)]),
    clientAge:new FormControl('',[Validators.min(10),Validators.max(100)]),
    clientMail:new FormControl('',[Validators.email]),
    messageTitle:new FormControl('',[Validators.pattern(/^[A-Z]/)]),
    messageBody:new FormControl('')
 });
 contactList=[];
saveForm(){
  this.contactList.push(this.contactsForm);
  localStorage.setItem("contacts",JSON.stringify(this.contactList))
}

  constructor() {


   }

  ngOnInit(): void {
  }

}
