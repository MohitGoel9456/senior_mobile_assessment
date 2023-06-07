export interface Transaction {
  id: number;
  type: "creditCard" | "debitCard" | "deposit" | "wire";
  amount: number;
}

export interface GenerateTransaction {
  transactions: Transaction[],
  balance: string
}