class bankAccount {
 public readonly id: number;
 public name : string;
 private  _balance : number;

    constructor(id: number, name :string, balance : number){
        this.id = id;
        this.name= name;
        this._balance = balance
    }

    getBalance(){
        console.log(`My current balance is : ${this._balance}`);
    }

    addDeposit(amount : number){
        this._balance = this._balance + amount;
    }
}

class studentAccount extends bankAccount{
    test(){
        this.getBalance() //
    }
}

const myAaccount = new bankAccount(222, 'Persian' , 20);

console.log(myAaccount);