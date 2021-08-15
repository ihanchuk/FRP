import { run } from './operators/index.js';
import { pipe } from './flow/index.js';

class Observable {
    observers = [];
    constructor(){}

    subscribe(observerFunction) {
        this.observers.push(observerFunction);

        return () => {
            this.observers = this.observers.filter( obs => obs!== observerFunction)
        }
    }

    emmit(dataToEmmit) {
        this.observers.forEach(observer => {
            observer(dataToEmmit)
        })
    }
}

const temp = new Observable;

const double = (d) => d *2;

temp.subscribe(pipe(double, run(console.log)))

temp.emmit(2);
temp.emmit(4);
temp.emmit(6);