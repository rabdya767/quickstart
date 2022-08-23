//parent Component
import { Component,OnInit } from "@angular/core"
// import { IEmployee } from './employee'
import {IEmployees} from './employee'
import { EmployeeService } from "./employee.service";
import { UserPreferenceService } from "./userPreference.service";

@Component({

    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css'],
    providers:[ EmployeeService]
                // UserPreferenceService]//Not a good practice

})

export class employeeList {
    
    selectedEmployeeCountRadioButton: string = 'All';
    employees : IEmployees[];
    statusMessage : string = 'Loading data. Please wait...';
    constructor(private _employeeService: EmployeeService,private _userPreferenceService: UserPreferenceService) {
        this._employeeService.getEmployees()
                                .subscribe((employeeData)=>this.employees=employeeData,
                                (error)=>{
                                    this.statusMessage = 'Problem with the service, Please try again';
                                    console.error(error);
                                    
                                });}
    
        get colour(): string {
            return this._userPreferenceService.colour;
        }
                            
        set colour(value: string) {
            this._userPreferenceService.colour = value;
        }

    
    
    // OnInit(){
    //     this.employees  = this._employeeService.getEmployees();
    // }
    // employees: IEmployee[] = this._employeeService.getEmployees();
    // OnInit(){
    //     this._employeeService.getEmployees()
    //                             .subscribe((employeeData)=>this.x=employeeData);
    //                             this.employees = this.x;
    //                         }
        // this._employeeService.getEmployees().subscribe((employeeData)=>this.employees=employeeData);
                                ;

    // getEmployees(): void {
    //     this.employees = [
    //         { code: 18, name: "virat", gender: "Male", dob: "November 23, 1980", role: 1, salary: 68872.988, city: "Mumbai" },
    //         { code: 23, name: "mirza", gender: "Female", dob: "June 02,1989", role: 2, salary: 57012.342, city: "Hyderabad" },
    //         { code: 45, name: "rohith", gender: "Male", dob: "July 07,1983", role: 5, salary: 59587.231, city: "Mumbai" },
    //         { code: 56, name: "saina", gender: "Female", dob: "December 12,1976", role: 3, salary: 72538.983, city: "Chennai" },
    //         { code: 71, name: "dhoni", gender: "Male", dob: "March 15,1978", role: 4, salary: 65412.942, city: "Delhi" },
    //         { code: 17, name: "kaur", gender: "Female", dob: "April 19,1967", role: 2, salary: 60849.456, city: "Hyderabad" },
    //         { code: 10, name: "Messi", gender: "Male", dob: "January 29,1999", role: 4, salary: 57332.456, city: "Kolkatha" },
    //         { code: 29, name: "perry", gender: "Female", dob: "September 18,2001", role: 1, salary: 98765.987, city: "Bengalore" },
    //     ];
    //      this.employees.push({ code: 10, name: "Messi", dob: "January 29,1999", role: 4, salary: 57332.456, city: "Kolkatha" });
    //      this.employees.push({ code: 29, name: "Ronaldo", dob: "September 18,2001", role: 1, salary: 98765.987, city: "Bengalore" });
    // }

    // trackByCode(index: number, employee: any): string {
    //     return employee.code;
    // }

    getTotalEmployeesCount(): number {
        // console.log(this._employeeService.getEmployees().length)
        return this.employees.length;
    }
    showNodeId : boolean = false;
    toggleNodeId(): void {
        this.showNodeId = !(this.showNodeId);
    }
    // getTotalMaleEmployeesCount(): number {
    //     return this.employees.filter(e => e.gender === 'Male').length;
    // }

    // getTotalFemaleEmployeesCount(): number {
    //     return this.employees.filter(e => e.gender === 'Female').length;
    // }

    // onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
    //     this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    // }

}
