function bind(contex, fn) {
    return function (...args) {
        fn.apply(contex, args)
    }
}

function logPerson  ()  {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = {name: 'Doston', age: 23, job: 'Frontend Developer'}

bind(person1, logPerson)()
