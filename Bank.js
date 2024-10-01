class BankAccount {
    constructor(accountHolder, balance) {
           this.accountHolder = accountHolder;
           this.balance = 0;
    }
    
   deposit(amount) {
    if (amount > 0) {
      this.balance =+ amount;
      console.log(`${amount} грн додано на ваш рахунок'`);
    } else {
      conslole.log('Недостатньо коштів для поповненя рахунку');
    }
   }
   
   withdraw(amount) {
   if (amount > 0) {
    if(this.balance >= amount) {
      this.balance -= amount;
      console.log(`${amount} грн знято з вашого рахунку`);
   }
  } else {
    console.log('Недостатньо коштів для знаття');
  }
 }
  getBalance() {
   console.log(`Поточний баланс: ${this.balance} грн`);
    return this.balance;
  }

}

const account = new BankAccount('Алекс');
account.deposit(500);
account.getBalance();
account.withdraw(200);
account.getBalance();
account.withdraw(400);