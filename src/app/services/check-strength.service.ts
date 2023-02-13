import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Strength} from "../models";
import {strengthNumberToTerm} from "../utils/check-strength";
import {containsLetters, containsNumber, containsSymbols} from "../utils/contains-value";

@Injectable({
  providedIn: 'root'
})
export class CheckStrengthService {

  public strength: BehaviorSubject<Strength | undefined> = new BehaviorSubject<Strength | undefined>(undefined)

  constructor() {
  }

  check(password: string) {
    //field is empty
    if (password.length === 0) {
      this.strength.next(undefined)
    } else
      //password is shortest 8 symbols
    if (password.length < 8) {
      this.strength.next("danger")
    } else {
      const hasNumbers = containsNumber(password)
      const hasSymbols = containsSymbols(password)
      const hasLetters = containsLetters(password)

      //calculate strength
      const result = Number(hasNumbers) + Number(hasSymbols) + Number(hasLetters)
      //convert strength number into term
      const strengthValue: Strength | undefined = strengthNumberToTerm(result)

      this.strength.next(strengthValue)
    }
  }
}
