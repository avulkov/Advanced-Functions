function solve() {
    let result=[]
    class Person {
        constructor(firstName,lastName,age,email){
            this.firstName=firstName
            this.lastName=lastName
            this.age=age
            this.email=email
        }
        toString(){
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }

    let maria=new Person('Maria','Petrova',22,'mp@yahoo.com')
    let softuni=new Person('SoftUni')
    let stef=new Person('Stephan','Nikolov',25)
    let pepi=new Person('Peter','Kolev',24,'ptr@gmail.com')
    result.push(maria)
    result.push(softuni)
    result.push(stef)
    result.push(pepi)
    return result

}

console.log(solve());