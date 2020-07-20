class User {
  name: string

  constructor(name: string) {
    this.name = name
  }
}


const u = new User('cnloop')

console.warn(u.name)

const arr: Array<number> = [1, 2, 3, 4, 5, 6]


interface LocationP {
  x: number
  y: number
  [k: string]: any
}

const cunstom: LocationP = {
  x: 12,
  y: 13,
  z: 0
}


console.warn(arr)

console.log('\x1B[31m%s\x1B[0m', '这是红色')

console.warn(cunstom.x + cunstom.y)
