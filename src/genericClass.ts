class List<T> {
    private data: T[];

    constructor(...el: T[]) {
        this.data = el;
    }

    add(el: T): void {
        this.data.push(el);
    }

    addMultiple(...el: T[]): void {
        this.data.push(...el);
    }

    getAll(): T[] {
        return this.data;
    }
}

let random = new List<number | string>(1, "a", "b", 2);
random.add(123);
random.add("abc");
random.addMultiple(321, "asd");
random.getAll();
