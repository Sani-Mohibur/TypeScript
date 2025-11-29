class BankAccount {
  readonly userId: number;
  userName: string;
  private userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  //   addBalance(balance: number) {
  //     return (this.userBalance += balance);
  //   }
  //   showBalance() {
  //     return this.userBalance;
  //   }

  //setter
  set addBalance(balance: number) {
    this.userBalance += balance;
  }
  //getter
  get showBalance() {
    return this.userBalance;
  }
}

const user1 = new BankAccount(4120, "Ariful Islam", 200000);
// console.log("Updated Balance: ", user1.addBalance(90000));
// console.log("Check Balance: ", user1.showBalance());
user1.addBalance = 50000;
user1.addBalance = 20590;
console.log(user1.showBalance);
