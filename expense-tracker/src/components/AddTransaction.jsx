import { useState } from "react";

function AddTransaction({ onAdd }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  function handleSubmit() {
    if (!name || !amount) return;

    onAdd({
      id: Date.now(),
      name: name,
      amount: Number(amount),
      type: type,
    });
    setName("");
    setAmount("");
    setType("income");
  }
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Add Transaction</h3>

      <div className="flex gap-2 mb-3">
        <button
          onClick={() => setType("income")}
          className={`flex-1 py-2 rounded-xl font-semibold ${
            type === "income"
              ? "bg-green-500 text-white"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          Income
        </button>
        <button
          onClick={() => setType("expense")}
          className={`flex-1 py-2 rounded-xl font-semibold ${
            type === "expense"
              ? "bg-red-500 text-white"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          Expense
        </button>
      </div>

      <input
        type="text"
        placeholder="Name e.g. Salary, Rent..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full bg-gray-100 rounded-xl px-4 py-3 mb-3 outline-none text-gray-800"
      />

      <input
        type="number"
        placeholder="Amount e.g. 500"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full bg-gray-100 rounded-xl px-4 py-3 mb-4 outline-none text-gray-800"
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold"
      >
        Add Transaction
      </button>
    </div>
  );
}

export default AddTransaction;
