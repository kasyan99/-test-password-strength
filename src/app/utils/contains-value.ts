export const containsValue = (str:string, value: RegExp):boolean => {
  if(str.search(value) !== -1){
    return true
  } else{
    return false
  }
}

export const containsNumber = (str:string) => containsValue(str,/[0-9]/)
export const containsLetters = (str:string) => containsValue(str,/[a-z,A-Z]/)
export const containsSymbols = (str:string) => containsValue(str,/[!@#$%^&*()_+<>{}?]/)
