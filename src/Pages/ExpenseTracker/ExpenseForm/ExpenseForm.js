import React from 'react'
import './ExpenseForm.scss'
import SimpleSelect from '../../../Components/simpleselect/SimpleSelect'
import { EXPENSE_SUB_CATEGORY, EXPENSE_TRACKER_MAIN_CATEGORY } from '../../../config/data'

function ExpenseForm() {
    return (
        <div className='expense-form'>
            <div className='expense-form-container'>
                <div className='add-your-expense-text'>Add Your Expense</div>
                <div className='expense-form-category'>
                    <div>Income</div>
                    <div className='expense-category-btn'>Expense</div>
                    <div>Debt</div>
                </div>

                <div className='expense-form-fields'>

                    <div className='expense-form-fields-container'>
                        <SimpleSelect
                            options={EXPENSE_SUB_CATEGORY}
                            placeHolderValue='Select Category'
                        />
                        <div>
                            <input className='enter-form-amount' type='text' placeholder='Enter Amount' />
                        </div>
                        <div>
                            <input className='enter-form-reason' type='text' placeholder='Enter Reason' />
                        </div>
                    </div>
                </div>
                <div>
                    <button>Cancel</button>
                    <button>Save</button>
                </div>
            </div>
        </div>
    )
}

export default ExpenseForm
