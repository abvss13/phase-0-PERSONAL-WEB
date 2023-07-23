import React from 'react'

function Transaction({ transaction, deleteTransaction }) {
    const {id,date, description, category, amount } = transaction
    const API = "https://json-server-bank-flatiron-vercel.vercel.app/transactions"
    
    function handleDelete(id) {
      fetch(`${API}/${id}`, {
        method: "DELETE",
      })

      deleteTransaction(id)
    }
    
    
  return (
    <tr>
            
            <td >
                <p className="date">{date}</p></td>
            <td>{description}</td>
            <td>
                <p className="category">{category}</p></td>
            <td>
               <p className={Math.sign(parseInt(amount)) === 1 ? 'positive' : 'negative'}> 
                {amount}
                </p>
                </td>
            <td>
              <button className="delete" onClick={() => handleDelete(id)}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 6V13.5C3.75 15.1569 5.09315 16.5 6.75 16.5H11.25C12.9069 16.5 14.25 15.1569 14.25 13.5V6M10.5 8.25V12.75M7.5 8.25L7.5 12.75M12 3.75L10.9453 2.16795C10.6671 1.75065 10.1988 1.5 9.69722 1.5H8.30278C7.80125 1.5 7.3329 1.75065 7.0547 2.16795L6 3.75M12 3.75H6M12 3.75H15.75M6 3.75H2.25"
                    
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Delete
              </button>
            </td>
          </tr>
  )
}

export default Transaction