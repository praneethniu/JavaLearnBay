function Education() {
    this.education = "btech"
}

function main() {
    Person = new Education();
    Person.name = 'xyz'
    Person.surname = 'hicks'
    var Person;
    Person.residence = "bangalore"
    Person.age = 23
    Object.freeze(Person)
    console.log(delete Person.name)
//console.log(Person)
    for(const item in Person){
        console.log(item)
    }
}
main()