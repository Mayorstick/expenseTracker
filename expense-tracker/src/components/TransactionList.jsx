import TransactionItem from "./TransactionItem";

function TransactionList({ transactions, onDelete }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        Transaction History
      </h3>
      {transactions.length === 0 ? (
        <p className="text-center text-gray-400 py-6">
          No transactions yet. Add one above.
        </p>
      ) : (
        <div className="flex flex-col gap-3">
          {transactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TransactionList;
