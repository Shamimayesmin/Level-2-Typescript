type a1 = number;
type a2 = undefined;
type a3 = number;

type a4 = a1 extends string ? string : null;

// nested conditional type
type d = a1 extends null
	? null
	: a2 extends number
	? number
	: a3 extends null
	? null
	: never;


    type Sheikh = {
        wife1 : string;
        wife2 : string;
    }

    type CheckProperty <T> = T extends 'wife1' ? true : false;