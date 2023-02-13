import { Component } from '@angular/core';
import {Strength} from "../../models";
import {CheckStrengthService} from "../../services/check-strength.service";

@Component({
  selector: 'app-password-field',
  templateUrl: './password-field.component.html',
  styleUrls: ['./password-field.component.scss']
})
export class PasswordFieldComponent {
  value = ''
  // strength: Strength | undefined

  constructor(public checkStrength: CheckStrengthService) {
  }

  check (password: string) {
    this.checkStrength.check(password)
  }
}
