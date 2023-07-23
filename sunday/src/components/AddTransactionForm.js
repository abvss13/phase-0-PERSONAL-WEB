import React, { useState } from "react";

function AddTransactionForm({ onAddTransaction }) {
  const API = "https://json-server-bank-flatiron-vercel.vercel.app/transactions"
  const [formData, setformData] = useState({
    description: "",
    date: "",
    amount: "",
    category: "",
  });

  function handleChange(e) {
    //  console.log(e.target.value, e.target.name)
    setformData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: formData.date,
        description: formData.description,
        category: formData.category,
        amount: formData.amount,
      }),
    })
    .then(res => res.json())
    .then(res => onAddTransaction(res))
    
    alert("Added successfully");
   
  }

  // console.log(formData)

  return (
    <div className="add-form">
      <h3>ADD TRANSACTION</h3>
      <form onSubmit={handleSubmit} autoComplete="off" >
        <label>Description</label>
        <input
          type="text"
          placeholder="Purpose of use"
          name="description"
          onChange={handleChange}
          
        />
        <label>Date</label>
        <input
          type="date"
          placeholder="Date of transaction"
          name="date"
          onChange={handleChange}
         
        />
        <label>Amount</label>
        <input
          type="text"
          placeholder="Amount transacted"
          name="amount"
          onChange={handleChange}
          
        />
        <label>Category</label>
        <input
          type="text"
          placeholder="Category of purpose"
          name="category"
          onChange={handleChange}
          
        />
        <input type="submit" value="Add transaction" />
      </form>
    </div>
  );
}

export default AddTransactionForm;
