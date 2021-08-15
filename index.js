class Observable {
    observers = [];
    constructor(){}

    subscribe(observerFunction) {
        this.observers.push(observerFunction);
    }

    emmit(dataToEmmit) {
        this.observers.forEach(observer => {
            observer(dataToEmmit)
        })
    }
}

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