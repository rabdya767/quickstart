import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { IEmployees } from "./employee";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/Observable/throw";
import "rxjs/add/operator/toPromise";

@Injectable()
export class EmployeeService {

    constructor(private _http: Http) { }

    getEmployees(): Observable<IEmployees[]> {
        return this._http.get("https://api.github.com/users")
            .map((response: Response) => <IEmployees[]>response.json())
            .catch(this.handleError);}
            // [
                //         { code: 18, name: "virat", gender: "Male", dob: "November 23, 1980", role: 1, salary: 68872.988, city: "Mumbai" },
                //         { code: 23, name: "mirza", gender: "Female", dob: "June 02,1989", role: 2, salary: 57012.342, city: "Hyderabad" },
                //         { code: 45, name: "rohith", gender: "Male", dob: "July 07,1983", role: 5, salary: 59587.231, city: "Mumbai" },
                //         { code: 56, name: "saina", gender: "Female", dob: "December 12,1976", role: 3, salary: 72538.983, city: "Chennai" },
                //         { code: 71, name: "dhoni", gender: "Male", dob: "March 15,1978", role: 4, salary: 65412.942, city: "Delhi" },
                //         { code: 17, name: "kaur", gender: "Female", dob: "April 19,1967", role: 2, salary: 60849.456, city: "Hyderabad" }
                // ]
    getEmployeesByLogin(empLogin: string): Observable<IEmployees> {
        return this._http.get("https://api.github.com/users/" + empLogin)
            .map((response: Response) => <IEmployees>response.json())
            .catch(this.handleError);
    }

    handleError(err: Response) {
        console.error(err);
        return Observable.throw(err);
    }
    // getEmployeesByLogin(empLogin: string): Promise<void | IEmployees> {
    //     return this._http.get("https://api.github.com/users/" + empLogin)
    //         .map((response: Response) => <IEmployees>response.json())
    //         .toPromise()
    //         .catch(this.handlePromiseError);
    // }

    // handlePromiseError(err: Response) {
    //     console.error(err);
    //     throw (err);
    // }
}