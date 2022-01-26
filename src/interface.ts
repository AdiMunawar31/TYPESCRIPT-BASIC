interface Laptop {
    name: string;
    on(): void;
    off(): void;
}

class Asus implements Laptop {
    name: string;
    isGaming: boolean;

    constructor(name: string, isGaming: boolean) {
        this.name = name;
        this.isGaming = isGaming;
    }

    on(): void {
        throw new Error("Method not implemented.");
    }
    off(): void {
        throw new Error("Method not implemented.");
    }

}