
interface Student {
    name: string;
    gender: boolean;
    age: number;
}

let fields: keyof Student;

fields = "name";

class Zoe {
    [x: string]: string;

    abc: string;

    constructor(name: string) {
        this.abc = name;
    }
}

// let mytype: Zoe & keyof Student = "name";

// mytype[0] = "zoe";

type zoe = Student[keyof Student];

const zk: Student["age"] = 33;

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const zoes: Student = { name: 'zoe', gender: false, age: 33 };

const n = getProperty(zoes, "age");

