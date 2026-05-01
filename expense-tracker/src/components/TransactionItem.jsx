function TransactionItem({ transaction, onDelete }) {
  return (
    <div
      className={`flex items-center justify-between p-4 rounded-xl border-l-4 ${
        transaction.type === "income"
          ? "border-green-500 bg-green-50"
          : "border-red-500 bg-red-50"
      }`}
    >
      <div>
        <p className="font-semibold text-gray-800">{transaction.name}</p>
        <p className="text-sm text-gray-500 capitalize">{transaction.type}</p>
      </div>
      <div className="flex items-center gap-3">
        <span
          className={`font-bold text-lg ${
            transaction.type === "income" ? "text-green-500" : "text-red-500"
          }`}
        >
          {transaction.type === "income" ? "+" : "-"}£
          {transaction.amount.toFixed(2)}
        </span>
        <button
          onClick={() => onDelete(transaction.id)}
          className="text-gray-400 hover:text-red-500 font-bold text-lg"
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default TransactionItem;
