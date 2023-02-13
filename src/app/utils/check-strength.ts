import {Strength} from "../models";

export const strengthNumberToTerm = (result: number): Strength | undefined => {
  if (result === 0) {
    return undefined
  } else if (result === 1){
    return "easy"
  } else if (result === 2){
    return "medium"
  } else if (result === 3){
    return "strong"
  }else {
    return undefined
  }
}
