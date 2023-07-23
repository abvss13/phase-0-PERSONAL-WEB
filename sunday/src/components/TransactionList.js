import React from "react";
import Transaction from "./Transaction";

function TransactionList({ transactions, deleteTransaction }) {

  const transactionsCopy = [ ...transactions]
  transactionsCopy.sort((a, b) => (a.id < b.id) ? 1 : -1)

  return (
    <div>
      <table className="ttable" cellSpacing="12px">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
            {transactionsCopy.map(transaction => {
                return <Transaction key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction} />
            })}
          
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;