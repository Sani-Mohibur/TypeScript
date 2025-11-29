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
  callHiddenMethod(balance: number) {
    this.addBalance(balance);
  }
}
