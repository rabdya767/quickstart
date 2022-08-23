import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  // template: `Your Text : <input type="text"  [(ngModel)]='userText'/>
  //             <br /><br />
  //             <h1>You entered : {{userText}} </h1>`,
              //For others folder
  // template:     `<div>
  // <h1>Name : <input type='text' [(ngModel)]='name'/> </h1>
  // <h1>You entered : {{name}}</h1>
  //                 <h1>{{pageHeader}}</h1>
  //                 <my-employee>Loading employee details</my-employee>
  //               </div>`,
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  userText : string="rabdya";
  //  name : string = 'Rabdya Santhosh';
  //  from component class property to html elements -- interpolation (Moving data in one direction)
      pageHeader : string = 'Employee Details';
      imagePath : string = 'https://vegibit.com/wp-content/uploads/2018/11/AngularJS.png';
      name : string = 'Hello '
      firstName : string = 'Rabdya';
      lastName : string = 'Santhosh';
      getFullName() : string {
          return this.firstName + ' '+ this.lastName;
      }
    }