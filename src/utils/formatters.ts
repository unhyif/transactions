export const formatTransactionAmount = (amount: number) => {
  const sign = 0 <= amount ? '+' : '-';
  const symbol = '$';
  const formattedAmount = Math.abs(amount).toLocaleString();
  return sign + symbol + formattedAmount;
};
