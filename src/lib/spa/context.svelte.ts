type Runner = () => void;
type Primitive = number;

export default class {
    runners: Runner[];
    values: { [key: string]: Primitive } = $state({});

    constructor() {
        this.runners = [];
    }

    addRunner(runner: any) {
        this.runners.push(runner);
    }

    run() {
        this.runners.forEach((e) => e())
    }

}