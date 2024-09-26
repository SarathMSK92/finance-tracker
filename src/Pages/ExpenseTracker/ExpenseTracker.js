// import React, { useRef, useState } from 'react'
// import Modal from '../../Components/modal/Modal';
// import SimpleSelect from '../../Components/simpleselect/SimpleSelect';
// import { EXPENSE_SUB_CATEGORY, EXPENSE_TRACKER_MAIN_CATEGORY } from '../../config/data'
// import ExpenseForm from './ExpenseForm/ExpenseForm';
// import './ExpenseTracker.scss'

// const ExpenseTracker = () => {

//     // const [isAddExpenseOpen, setIsAddExpenseOpen] = useState(false);
//     const expenseFormRef = useRef();
//     const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false)

//     const showExpenseFormModal = () => {
//         setIsExpenseModalOpen(true)
//     }

//     const hideExpenseFormModal = () => {
//         setIsExpenseModalOpen(false)
//     }



//     return (
//         <div className='expense-tracker-root'>
//             <div className='expense-tracker-card-container'>
//                 <div className='expense-head-title'>Expense Tracker</div>
//                 <div className='expense-tracker-all-cards-section'>
//                     <div className='add-expense-section'>
//                         <button className='add-expense-btn' onClick={() => showExpenseFormModal()}>Add +</button>
//                     </div>
//                     <div className='income-section' >
//                         <span className='card-header-text'>Income (+)</span>
//                         <span className='card-value-text'>20,000</span>
//                     </div>
//                     <div className='expense-section' >
//                         <span className='card-header-text'>Expenses (-)</span>
//                         <span className='card-value-text'>13,000</span>
//                     </div>
//                     <div className='debt-section' >
//                         <span className='card-header-text'>Debt (-)</span>
//                         <span className='card-value-text'>5,000</span>
//                     </div>
//                     <div className='wallet-section' >
//                         <span className='card-header-text'>Wallet</span>
//                         <span className='card-value-text'>2,000</span>
//                     </div>
//                 </div>
//             </div>

//             <Modal
//                 modalRef={expenseFormRef}
//                 overlayClass=''
//                 isModalOpen={isExpenseModalOpen}
//                 hideModal={hideExpenseFormModal}
//             >
//                 <ExpenseForm
//                     modalRef={expenseFormRef}
//                     hideModal={hideExpenseFormModal}
//                 />
//             </Modal>
//         </div>
//     )
// }

// export default ExpenseTracker


import React from 'react'

function ExpenseTracker() {
    return (
        <div>
            ExpenseTracker
        </div>
    )
}

export default ExpenseTracker
