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
    private _email: string = "";
    static role: string = "Admin"

    constructor(name: string, age: number, public phone: string) {
        super(name, age)
    }

    getRole(): { read: boolean; write: boolean } {
        return {
            read: this.read,
            write: this.write
        };
    }

    set email(value: string) {
        this._email = value;
    }

    get email(): string {
        return this._email;
    }
}

let admin = new Admin('Adi Munawar', 20, "0815234827348");
admin.email = "adimunawar@gmail.com";
console.log(admin.email);

let role = Admin.role;
console.log(role);


