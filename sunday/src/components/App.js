import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import TransactionList from "./TransactionList";
import AddTransactionForm from "./AddTransactionForm";



function App() {

  const API = "https://json-server-bank-flatiron-vercel.vercel.app/transactions?q="
  const [data, setData] = useState([]);
  const [query, setQuery] = useState(" ")


  useEffect(() => {
    fetch(API + query).then(res => res.json())
    .then(data => setData(data))
  }, [query])

  

  function onSearch(e) {
    setQuery(e.target.value)
    console.log(e.target.value)
  }

  function onAddTransaction(addedData) {
    setData([...data, addedData])
  }

  function deleteTransaction(id) {
    const updatedTransactions = data.filter(todo => todo.id !== id)
    setData(updatedTransactions)
}

 

  return (
    <div className="main">
      <div className="container"> 
        <h2 className="page-title">Transaction History</h2>
        <div className="wrapper">
          <div className="list">
            <div className="l-wrapper">
            <SearchForm onSearch={onSearch} />
            <TransactionList transactions={data} deleteTransaction={deleteTransaction} /> 
            </div>
          </div>
          <div className="form">
            <AddTransactionForm onAddTransaction={onAddTransaction}  /> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;