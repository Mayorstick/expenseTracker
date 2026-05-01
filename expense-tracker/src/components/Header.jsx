function Header({ transactions }) {
  function calculateIncome() {
    return transactions
      .filter((t) => t.type === "income")
      .reduce((total, t) => total + t.amount, 0);
  }
  function calculateExpense() {
    return transactions
      .filter((t) => t.type === "expense")
      .reduce((total, t) => total + t.amount, 0);
  }
  function displayBalance() {
    return calculateIncome() - calculateExpense();
  }
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
      <h2 className="text-center text-gray-500 text-sm uppercase mb-1">
        Your Balance
      </h2>
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-6">
        £{displayBalance().toFixed(2)}
      </h1>
      <div className="flex justify-between">
        <div className="text-center">
          <p className="text-gray-500 text-sm uppercase">Income</p>
          <p className="text-green-500 text-xl font-bold">
            +£{calculateIncome().toFixed(2)}
          </p>
        </div>
        <div className="w-px bg-gray-200"></div>
        <div className="text-center">
          <p className="text-gray-500 text-sm uppercase">Expenses</p>
          <p className="text-red-500 text-xl font-bold">
            -£{calculateExpense().toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
