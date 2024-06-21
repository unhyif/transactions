import { Transaction, TransactionResponse } from '@/types/transaction';

export const selectTransactions = (
  transactions: TransactionResponse[]
): Transaction[] => {
  return transactions
    .filter(({ timestamp }) => timestamp * 1000 <= Date.now())
    .map(({ amount, name, timestamp }) => {
      return {
        id: crypto.randomUUID(),
        amount,
        name,
        timestamp: timestamp * 1000,
        type: amount < 0 ? 'EXPENSE' : 'INCOME',
      };
    });
};

export const filterTransactionsByTimestamp = ({
  transactions,
  timestampRange: { min = -Infinity, max = Date.now() },
}: {
  transactions: Transaction[];
  timestampRange: { min?: number; max?: number };
}) => {
  return transactions.filter(
    ({ timestamp }) => min <= timestamp && timestamp <= max
  );
};

export const filterTransactionsByType = ({
  transactions,
  type,
}: {
  transactions: Transaction[];
  type?: Transaction['type'];
}) => {
  switch (type) {
    case 'INCOME': {
      return transactions.filter(({ type }) => type === 'INCOME');
      // .sort((a, b) => sortByLatest(a.timestamp, b.timestamp))
      // .slice(0, 10);
    }

    case 'EXPENSE': {
      return transactions.filter(({ type }) => type === 'EXPENSE');
      // .sort((a, b) => sortByLatest(a.timestamp, b.timestamp))
      // .slice(0, 10);
    }

    default: {
      return transactions;
      // .sort((a, b) => sortByLatest(a.timestamp, b.timestamp))
      // .slice(0, 20);
    }
  }
};
