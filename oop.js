class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.name = _firstName
    this.lastName = _lastName
    this.age = _age
    this.location = _location
  }
  oldest = function (otherUser) {
    if (this.age > otherUser.age) {
      return `${this.name} è più grande di ${otherUser.name}`
    } else {
      return `${otherUser.name} è più grande di ${this.name}`
    }
  }
}

const x = new User("Salvatore", "Pepe", 34, "Basilicata")
console.log("x", x)
const y = new User("Saverio", "Pepe", 33, "Basilicata")
console.log("Y", y)

console.log(x.oldest(y))
