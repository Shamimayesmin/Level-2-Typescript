// Pick

interface Person {
	name: string;
	email?: string;
	contactNo: string;
}

type Contact = Pick<Person, "contactNo" | "email">;

// Omit
type Name = Omit<Person, "email" | "contactNo">;

// partial
// To make all the properties be optional type

type Optional = Partial<Person>;

type RequireProps = Required<Person>;

const person: Readonly<Person> = {
	name: "Person",
	email: "abc@gamil.com",
	contactNo: "123556778",
};

person.name = "Forhan";

// Record Type

// type myObj = {
// 	a: string;
// 	b: string;
// 	c: string;
// };

// using index signature

// const obj: myObj = {
// 	[key : 'a' | 'b' |'c']: string
// };

// Record
type myObj = Record<"a" | "b" | "c" | "d", string>;

const obj: myObj = {
	a: "1",
	b: "2",
	c: "3",
	d: "4",
};
