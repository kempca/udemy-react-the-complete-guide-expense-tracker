import './ExpenseForm';
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import React, {useState} from "react";

const NewExpense = (props) => {

    let [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const cancelNewExpenseHandler = () => {
        setIsEditing(false);
    };

    const newExpenseHandler = () => {
        setIsEditing(true);
    };

    if (isEditing) {
        return (
            <div className="new-expense">
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
                             onCancelNewExpense={cancelNewExpenseHandler}></ExpenseForm>
            </div>
        );
    }

    return (
        <div className="new-expense">
            <button onClick={newExpenseHandler}>New Expense</button>
        </div>
    );

}

export default NewExpense;