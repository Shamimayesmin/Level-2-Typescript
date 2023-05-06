class bankAccount {
	public readonly id: number;
	public name: string;
	private _balance: number;

	constructor(id: number, name: string, balance: number) {
		this.id = id;
		this.name = name;
		this._balance = balance;
	}

	get balance(): number {
		return this._balance;
	}

	//    getBalance() : number{
	//     //    console.log(`My current balance is : ${this._balance}`);
	//     return this._balance;
	//    }

	// setter ................

	set deposit(amount: number) {
		this._balance = this.balance + amount;
	}

	//        addDeposit(amount : number){
	//            this._balance = this._balance + amount;
	//        }
}

class studentAccount extends bankAccount {
	test() {
		//this.getBalance() //
	}
}

const myAaccount = new bankAccount(222, "Persian", 50);

console.log(myAaccount.balance);

// myAaccount.addDeposit(20)
// myAaccount.getBalance()
// myAaccount.getBalance()
myAaccount.deposit = 20;
console.log(myAaccount.balance);
