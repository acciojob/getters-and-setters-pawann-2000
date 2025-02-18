//complete this code
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get name(){
        return this.name;
    }

    set name(name){
        this.name = name;
    }

    set age(age){
        this.age = age;
    }
}

class Student extends Person {
    constructor(){
        super();
    }

    study() {
        console.log(this.name + " is studying");
    }
}

class Teacher extends Person {
    constructor(){
        super();
    }

    teach() {
        console.log(this.name + " is teaching");
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
