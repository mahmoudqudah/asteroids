import { Component, OnInit } from '@angular/core';
import {Persons} from './Persons';

@Component({
  selector: 'app-mahmpudqudah',
  templateUrl: './mahmpudqudah.component.html',
  styleUrls: ['./mahmpudqudah.component.css']
})
export class MahmpudqudahComponent implements OnInit {

  person:Persons;
  persons:Persons[];

  myNumber = 300 ;
  classCss = true ;


myEvent(event){
  console.log(event);
}


name:string = "mahmoud";
lname = "qudah";
age:any = 25 ;
names:string[]=['mahmoud','odeh','qudah'];

myArr = ['hisdsdm','mahsdsdmoud','odedfdfh'];


marioLogo ="https://vignette.wikia.nocookie.net/fantendo/images/6/6e/Small-mario.png";

buttonStatus = false ;

mahmoudInfo ={job : "Angular Developer" , company : "Google "};

// --------------------------------------------------------------------------------------
  constructor() { 
    this.name = "Ahmad";

    this.person={
      id:2,
      name:'MahmoudOdeh',
      lname:'Qudah',
      age:25
    } 
    this.persons = [
      {id:1,
      name:'AhmadOdeh',
      lname:'Qudah',
      age:25}
      ,
      {id:2,
      name:'ZaidOdeh',
      lname:'Qudah',
      age:25}
        ,
      {id:3,
      name:'hamoodehOdeh',
      lname:'Qudah',
      age:25} ];

  }

  ngOnInit() {
    this.name = "Ahmad qudah";
    this.age = "hala";
  }

}
