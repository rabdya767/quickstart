import { Injectable } from "@angular/core";
//Available only for EmployeeListComponent and HomeComponent
@Injectable()
export class UserPreferenceService {

    constructor(){
        console.log("New Instance of Service is Created!");
    }

    colour : string = 'orange';
}