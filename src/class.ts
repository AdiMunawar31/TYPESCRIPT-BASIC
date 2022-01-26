export class User {
    constructor(public name: string, public age: number) { }

    setName(name: string): void {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }
}

class Admin extends User {
    read: boolean = true;
    write: boolean = true;

    getRole(): { read: boolean; write: boolean } {
        return {
            read: this.read,
            write: this.write
        };
    }
}

let admin = new Admin('Adi Munawar', 20);
admin.getRole()
