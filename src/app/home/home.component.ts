import { Component } from "@angular/core";
import { UserPreferenceService } from "../employee/userPreference.service";

@Component({
  templateUrl: "app/home/home.component.html",
//   providers:[UserPreferenceService]
})
export class HomeComponent {
  constructor(private _userPreferenceService: UserPreferenceService) {}

  get colour(): string {
    return this._userPreferenceService.colour;
  }

  set colour(value: string) {
    this._userPreferenceService.colour = value;
  }
}
