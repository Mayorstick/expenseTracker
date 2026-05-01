import Header from "./components/Header";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import { useState } from "react";

function App() {
  const [transaction, setTransaction] = useState([]);

  function deletTransaction(idToRemove) {
    // delete by id instead of index
    setTransaction(transaction.filter((t) => t.id !== idToRemove));
  }

  function handleAdd(newTransaction) {
    setTransaction([...transaction, newTransaction]);
  }
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Expense Tracker
        </h1>
        <Header transactions={transaction} />
        <AddTransaction onAdd={handleAdd} />
        <TransactionList
          transactions={transaction}
          onDelete={deletTransaction}
        />
      </div>
    </div>
  );
}

export default App;
