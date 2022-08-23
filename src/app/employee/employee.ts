export interface IEmployee {
    code: number;
    name: string;
    gender: string;
    dob: string;
    role: number;
    salary: number;
    city: string;

    computeMonthlySalary?(salary: number): number;
}

// export class Employee implements IEmployee {
//     // public code: number;
//     // public name: string;
//     // public gender: string;
//     // public dob: string;
//     // public role: number;
//     // public salary: number;
//     // public city: string;

//     constructor(public code: number; public name: string; public gender: string;
//         public dob: string; public role: number; public salary: number;
//         public city: string) {
//         // this.code = code;
//         // this.name = name;
//         // this.gender = gender;
//         // this.dob = dob;
//         // this.role = role;
//         // this.salary = salary;
//         // this.city = city;
//     }

//     computeMonthlySalary(salary: number): number {
//         return salary/12;
//     }
// }

// export class TestClass{
//     // private firstName : string;
//     // private lastName : string;

//     constructor(private firstName : string; private lastName: string){
//         // this.firstName=firstName;
//         // this.lastName=lastName;
//     }
// }

export interface IEmployees {

    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string
    followers_url: string
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url:string;
    received_events_url: string;
    type: "User";
    site_admin: boolean;  

}