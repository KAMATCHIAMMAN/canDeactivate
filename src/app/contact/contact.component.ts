import { Component,OnInit,NgModule, } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  public firstname:any;
  public lastname:any;
  constructor(){}
  ngOnInit(): void {
    
  }
  canExit(){
    if(this.firstname || this.lastname){
      return confirm('you have unsaved changes.Are you want to discard?');
    }
    else{
      return true;
    }
  }

}
