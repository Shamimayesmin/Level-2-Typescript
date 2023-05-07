// generic interface

interface CrushInterface<T, U = null> {
	name: string;
	husband: T;
	wife?: U;
}

const crush2: CrushInterface<boolean, string> = {
	name: "Alan",
	husband: true,
	wife: "jorina",
};

const crush3: CrushInterface<string> = {
	name: "Alan",
	husband: "persian cat",
};

interface HusbandInterface {
	name: string;
	salary: number;
}
const crush4: CrushInterface<HusbandInterface> = {
	name: "Alan",
	husband: {
		name: "persian cat",
		salary: 1000,
	},
};

interface personInterface {
	name: string;
	age: number;
}

const crush5: CrushInterface<personInterface, personInterface> = {
	name: "Alan",
	husband: {
		name: "persian cat",
		age: 1000,
	},
	wife: {
		name: "ALina",
		age: 40,
	},
};

type GenericArray<T> = Array<T>;

const rollNumbers: GenericArray<number> = [333, 55, 60];
const rollNumbers2: GenericArray<string> = ["333", "55", "60"];
const rollNumbers3: GenericArray<boolean> = [true, false];

type NameRollType = { name: string; roll: number };
const userNameAndRollNumbers: GenericArray<NameRollType> = [
	{
		name: "Mr X",
		roll: 10,
	},
	{
		name: "Mr Y",
		roll: 22,
	},
];

type GenericTuple<X, Y> = [X, Y];

const relation: GenericTuple<string, string> = ["Persian", "alan"];

// type alias
// type realtionWithSalaryType = {name: string; salary : number}

// type interface
interface realtionWithSalaryInterface {
	name: string;
	salary: number;
}

const relationWithSalary: GenericTuple<realtionWithSalaryInterface, string> = [
	{
		name: "Persian",
		salary: 100000000,
	},
	"alan",
];

const relationWithSalary2: GenericTuple<realtionWithSalaryInterface, string> = [
	{
		name: "Persian",
		salary: 100000000,
	},
	"alan",
];
