import { Component } from "@angular/core";
import { IEmployees } from "./employee";
import { EmployeeService } from "./employee.service";
import { ActivatedRoute ,Router} from "@angular/router";
import { Location } from "@angular/common";
import "rxjs/add/operator/retry";
import "rxjs/add/operator/retryWhen";
import "rxjs/add/operator/delay";

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/app.component.html',
    styleUrls: ['app/employee/app.component.css']
    // styles : ['table { color: #369; font-family: Arial; font-size: large;border-collapse: collapse;},td {border: 1px solid black;},th {border: 1px solid black;']
})

export class employee {
    [x: string]: any;

    employee: IEmployees;
    statusMessage: string = 'Loading data. Please wait ...';
    constructor( private _employeeService: EmployeeService, 
                 private _activatedRoute: ActivatedRoute,
                 private location: Location,
                 private _router: Router) {

    }

    ngOnInit() {
        let empLogin: string = this._activatedRoute.snapshot.params['login'];
        this._employeeService.getEmployeesByLogin(empLogin)
        // .retry()//retry(x) retry with 'x' times
        // retryWhen((error)=>error.delay(1000))
        .subscribe(
        // this._employeeService.getEmployeesByLogin(empLogin).then(
            (employeeData) => {
                if (employeeData == null) {
                    this.statusMessage = 'Employee with the specified login doesnot exist';
                } else {
                    this.employee = employeeData
                }
            },
            (error) => {
                this.statusMessage = 'Problem with the service. Please try again after some time';
                console.log(error);
            }
            // ).catch((error) => {
            //     this.statusMessage = 'Problem with the service. Please try again after some time';
            //     console.log(error);
            // });
    )}

    firstName: string = 'Rabdya';
    lastName: string = 'Santhosh';
    gender: string = 'Male';
    age: number = 21;
    colspan: number = 2;
    showDetails: boolean = false;

    toggleDetails(): void {
        this.showDetails = !(this.showDetails);
    }

    gotoEmployees() : void{
        this.location.back();  
    }

    onBackButtonClick() : void{
        this._router.navigate(['/employees/lukas'])
    }

}

