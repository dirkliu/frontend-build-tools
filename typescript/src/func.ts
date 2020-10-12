function add (x: number, y: number): number {
  return x + y
}

let myAdd = function (x: number, y: number): number {
  return x  + y
}

function buildName (firstName: string, lastName?: string): string {
  let fullName: string = firstName

  if (lastName) {
    fullName = fullName + ' ' + lastName
  }
  return fullName
}


function defaultName (firstName: string, lastName: string = 'Jackson'): string {
  return firstName + ' ' + lastName
}

function restName (firstName: string, ...restOfName: string[]): string {
  return firstName + ' ' + restOfName.join(' ')
}

