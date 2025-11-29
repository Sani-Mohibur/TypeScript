class BankAccount {
  public readonly userId: number;
  public userName: string;
  private userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }
  addBalance(balance: number) {
    return (this.userBalance += balance);
  }
}

const user1Account = new BankAccount(2221, "Farabi Sunny", 50230);
user1Account.addBalance(50000);
console.log(user1Account);

//private members are only accessible within their own class,
// while protected members can be accessed within their own class
// and by any classes that inherit from it.
