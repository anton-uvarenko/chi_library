enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}

function getActivity(day: Days): string {
    switch (day) {
        case Days.Monday, Days.Tuesday, Days.Wednesday, Days.Thursday, Days.Friday:
            return "Go to work"
        case Days.Saturday, Days.Sunday:
            return "Relax"
    }
}

class Queue<T> {
    private queue = [];
    public enqueue(elem: T): void {
        this.queue.push(elem);
    }

    public dequeue(): T {
        return this.queue.pop();
    }
}

const queue: Queue<number> = new Queue();
queue.enqueue(1);
queue.enqueue(2);

console.log(queue.dequeue());

type StringOrNumber = string | number;

function combine(input1: StringOrNumber, input2: StringOrNumber): string | number {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    }
    if (typeof input1 === "string" && typeof input2 === "string") {
        return input1.toString() + input2.toString();
    }

    throw new Error("Invalid input");
}

interface IPerson {
    name: string;
    age: number;
}

interface IWorker extends IPerson {
    position: string;
    salary: number;
}

class PersonWorker implements IWorker {
    changeSalary(salary: number): void {
        this.salary = salary;
    }

    getSalary(): number {
        return this.salary;
    }

    age: number;
    name: string;
    position: string;
    salary: number;
}