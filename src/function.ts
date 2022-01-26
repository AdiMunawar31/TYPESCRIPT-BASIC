// Tipe data pada balikan function

// with argument type
function getName(name: string): string {
    return name;
}

function getAge(): number {
    return 20;
}

function printName(): void {
    console.log("Print Name");
    
}

console.log(getName("Adi Munawar"));


// function as types
type Tambah = (val1: number, val2: number) => number;

const add: Tambah = (val1: number, val2: number): number => {
    return val1 * val2;
}

// default parameter
const fullName = (first: string = "Adi", last: string = "Munawar"): string => {
    return `${first}-${last}`;
}

console.log(fullName("D2Y", "CHANNEL"));


// optional parameter
/**
 *  Optional parameter tidak bisa di implementasikan pada type data number
 */
const getNames = (first?: string, last?: string): string => {
    return first + last;
}

console.log(getNames("Adi"));
