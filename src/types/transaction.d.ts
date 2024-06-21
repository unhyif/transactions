export interface TransactionResponse {
  amount: number;
  name: string;
  timestamp: number;
}

export interface Transaction extends TransactionResponse {
  id: string;
  type: 'INCOME' | 'EXPENSE';
}
