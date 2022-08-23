import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";
import { TestModule } from "./test.module";

import { employee } from "./employee/app.component";
import { employeeList } from "./employee/employeeList.component";
import { EmployeeTitlePipe } from "./employee/employeeTitle.pipe";
import { EmployeeCountComponent } from "./employee/EmployeeCount.component";
import { SimpleComponent } from "./others/simple.component";
import { HttpModule } from "@angular/http";
import { HomeComponent } from "./home/home.component";
import { pageNotFoundComponent } from "./others/pageNotFound.component";

import { EmployeeService } from "./employee/employee.service";
import { UserPreferenceService } from "./employee/userPreference.service";
const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "employees", component: employeeList },
  { path: "employees/:login", component: employee },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: pageNotFoundComponent },
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TestModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
  ],
  declarations: [
    AppComponent,
    employee,
    employeeList,
    EmployeeTitlePipe,
    EmployeeCountComponent,
    SimpleComponent,
    HomeComponent,
    pageNotFoundComponent,
  ],
  bootstrap: [AppComponent],
  providers: [EmployeeService]
        // , UserPreferenceService],
})
export class AppModule {}
