import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import './Expenses.css';
import React, {useState} from 'react';
import ExpensesList from "./ExpensesList";


const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const onChangeFilterHandler = (filter) => {
        setFilteredYear(filter);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear() === parseInt(filteredYear);
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onChangeFilter={onChangeFilterHandler} selected={filteredYear} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList expenses={filteredExpenses} />
            </Card>
        </div>)

}

export default Expenses;